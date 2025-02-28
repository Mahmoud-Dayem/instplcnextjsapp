'use client'
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

import React from 'react'
// import './PLCForm.css'; // Import the CSS file
import Image from 'next/image'
import { useState } from 'react';


function PLCForm() {
    const [formData, setFormData] = useState({
        employee_id: '',
        employee_name: '',
        request_date: '',
        plc_tag: '',
        description: '',
        equipment_affected: '',
        details_of_modification: '',
        reason_for_modification: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/plc-modification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Handle success
                window.print();
            } else {
                // Handle error
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Failed to submit form', error);
        }
    };



    return (
        <div className='flex flex-col justify-center mx-auto px-4 text-center w-3/4'>

            <form onSubmit={handleSubmit}>

                <div className=' flex flex-col'>
                    <Link href='/'>
                    <Image
                        src="/hcclogo.jpg"
                        width={80}
                        height={100}
                        alt="Picture of the author"
                        className='float-left' />
                        </Link>

                    <h2 className='text-center font-sans
   text-3xl mb-2'> PLC MODIFICATION REQUEST FORM</h2>
                </div>
                <div className="flex gap-3 items-baseline justify-between my-3 w-full  ">
                    <div className=" flex ">

                    <p className='text-xl font-medium text-gray-900 '>Modification #</p>
                    </div>
                    <div className="flex items-baseline gap-2   ">


                        <label className='text-xl font-medium' htmlFor="employee_id">Emply. ID </label>
                        <input type="number"
                            className="   
            p-1 text-gray-900 border
           border-gray-300 rounded-lg
         bg-yellow-50  
  
            text-2xl 
               

             "


                            id="employee_id" required
                            value={formData.employee_id}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-baseline gap-2  ">

                        <label className='text-xl font-medium   ' htmlFor='employee_name'>Emply. Name </label>

                        <input type="input"
                            className="block  
                          p-1 text-gray-900 border
                         border-gray-300 rounded-lg
                       bg-yellow-50  
                         focus:ring-blue-500
                          focus:border-blue-500 
                          text-2xl 
                          text-uppercase
                            
                           "

                            id="employee_name"
                             required
                            value={formData.employee_name}


                            onChange={handleChange} />

                    </div>
                    <div className="flex items-baseline gap-2 ">

                        <label className='text-xl font-medium' htmlFor='request_date'>Date: </label>
                        <input type="date" className="form-control" id="request_date" style={{ width: 'auto' }} required
                            value={formData.request_date}
                            onChange={handleChange}
                        />
                    </div>
                </div>




                <div className="flex gap-4 items-baseline justify-start my-3 ">
                    <label htmlFor="plc_tag" className=" mb-2 text-xl font-medium text-gray-900 ">PLC Tag</label>
                    <input
                        id="plc_tag"
                        value={formData.plc_tag}
                        onChange={handleChange}
                        required


                        type="text"
                        className="    
                         text-gray-900
                          border
                       border-gray-100
                        rounded-lg
                     bg-green-50  
                     p-1
  
                        text-2xl 
                        text-uppercase
                         w-1/4

                         "/>
                </div>


                <div className="flex gap-4 items-baseline justify-start my-3 ">
                    <label htmlFor="description" className=" mb-2 text-xl font-medium text-gray-900 ">Description</label>
                    <input
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        required



                        type="text"
                         className="block  
                        p-1 text-gray-900 border
                       border-gray-300 rounded-lg
                     bg-yellow-50  
                       focus:ring-blue-500
                        focus:border-blue-500 
                        text-xl 
                          w-3/4

                         "/>
                </div>

                <div className="flex gap-4 items-baseline justify-start my-3 ">
                    <label className=" text-xl font-medium" htmlFor='equipment_affected'>Equipment to be affected</label>
                   
                        <input type="input" 
                        
                        className="block  
                        p-1 text-gray-900 border
                       border-gray-300 rounded-lg
                     bg-yellow-50  
                  
                        text-xl 
                          w-3/4"

                        id="equipment_affected"
                            value={formData.equipment_affected} required
                            onChange={handleChange} />
                    
                </div>

                <div className="flex flex-col items-start my-10">
                     
                        <label className=" text-xl font-medium" htmlFor='details_of_modification'>Details of PLC modification</label>
                   
                
                        <textarea 
                        
                        className=" w-full
                        p-1 text-gray-900 border
                       border-gray-300 rounded-lg
                     bg-yellow-50
                        
                        
                        " 
                        
                        
                        
                        id="details_of_modification" rows="2"
                            value={formData.details_of_modification}
                            onChange={handleChange} required

                        />
                  
                </div>

                <div className="col-sm-10 d-flex">
                    <div className='me-3'>
                        <p className='fw-bold'>Type of Request</p>
                    </div>
                    <div className="form-check">
                        <label htmlFor="new">New </label>
                        <input className="form-check-input" type="checkbox" id="new" />
                    </div>

                    <div className='ms-5 d-flex'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="permanent" />
                            <label className="form-check-label" htmlFor="gridRadios1">Permanent</label>
                        </div>
                        <div className="form-check ms-5">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="temporarily" />
                            <label className="form-check-label" htmlFor="gridRadios2">Temporarily</label>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 items-baseline justify-start my-3 ">
                    <label className="text-xl font-medium w-1/4" htmlFor='reason_for_modification'>Reason for PLC modification</label>
                    
                        <input type="input" 
                        
                        className=" 
                        p-1 text-gray-900 border
                       border-gray-300 rounded-lg
                     bg-yellow-50
                     w-3/4
                        
                        " 
                        
                        
                        id="reason_for_modification"
                            value={formData.reason_for_modification}
                            onChange={handleChange} required
                        />
                    
                </div>
                <hr />

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan="2">Expected Duration of PLC modification if Temporarily</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th colSpan="2" className="text-center">Date and Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center" style={{ height: "1px" }}>
                            <td>Applied</td>
                            <td>Cancelled</td>
                        </tr>
                        <tr style={{ height: "1.5rem" }}>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <div className="d-flex m-1">
                    <div className="col-5 fw-bold">
                        <p>Performed by:</p>
                    </div>
                    <div className="fw-bold col-4">
                        <p>Signature:</p>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success">Submit & Print</button>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col w-full">
                    <div className=" flex   ">
                        <p className=' w-1/2 text-left'>HOD Requester:</p>
                        <p className='  w-1/4 text-center'>Signature:</p>
                    </div>
          
                    <div className="flex justify-even">
                        <p className='  w-1/2 text-left'>Requester Manager:</p>
                        <p className=' w-1/4 text-center'>Signature:</p>

                    </div>
         
                    <div className="flex ">
                        <p className=' w-1/2 text-left '>E&I HOD:</p>
                        <p className=' w-1/4 text-center '>Signature:</p>

                    </div>
 
                    <div className="flex">
                        <p className=' w-1/2 text-left'>PME HOD:</p>
                        <p className=' w-1/4 text-center'>Signature:</p>


                    </div>

                    <div className="flex">
                    <p className=' w-1/2 text-left'>Maintenance Manager:</p>
                    <p className='  w-1/4 text-center'>Signature:</p>
                    </div>

     
                </div>
                <hr />
                <div className=" flex">
                    <p className="text-sm text-left ">
                        Document No:HIMS-L2-F-01-14.02<br />
                        Date Issued:17-03-2019<br />
                        Next Rev. Date:1/10/2027<br />
                        Revision number:04<br />
                    </p>
                </div>



            </form>

        </div>
    )
}

export default PLCForm
