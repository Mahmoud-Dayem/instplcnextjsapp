'use client'
import "bootstrap/dist/css/bootstrap.css";

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
        console.log(formData)
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
                console.log('Form submitted successfully');
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
        <div className='print-container'>
      
            <div className='print-content'>
                <form className='form-container' onSubmit={handleSubmit}>

                    <div >
                        <Image
                            src="/hcclogo.jpg"
                            width={80}
                            height={100}
                            alt="Picture of the author"
                            className='float-left' />

                        <h3 className='text-center'>الله اكبر الحمدالله PLC MODIFICATION REQUEST FORM</h3>
                    </div>
                    <div className=" d-flex flex-nowrap mb-2 justify-content-between align-items-center">
                        <p className='fw-bold mb-0'>Modification #</p>

                        <label className='fw-bold mb-0' style={{ width: "auto" }} htmlFor="employee_id">Emply. ID </label>
                        <input type="input" className="form-control  " style={{ width: "5rem" }} id="employee_id" required
                            value={formData.employee_id}
                            onChange={handleChange}
                        />

                        <label className='fw-bold mb-0 ' style={{ width: "auto" }} htmlFor='employee_name'>Emply. Name </label>

                        <input type="input" className="form-control " style={{ width: "15rem" }} id="employee_name" required
                            value={formData.employee_name}
                            onChange={handleChange} />



                        <label className='mb-0 fw-bold' style={{ width: "auto" }} htmlFor='request_date'>Date: </label>
                        <input type="date" className="form-control" id="request_date" style={{ width: 'auto' }} required
                            value={formData.request_date}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row mb-3 align-items-center form-group">
                        <label className="col-2 col-form-label fw-bold" htmlFor='plc_tag'>PLC Tag </label>
                        <div className="col-10">
                            <input type="input" className="form-control text-uppercase" style={{ width: "auto" }} id="plc_tag"
                                value={formData.plc_tag}
                                onChange={handleChange} required
                            />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center form-group">
                        <label className="col-2 col-form-label fw-bold" htmlFor='description'>Description</label>
                        <div className="col-10">
                            <input type="input" className="form-control" id="description"
                                value={formData.description}
                                onChange={handleChange} required
                            />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center form-group">
                        <label className="col-3 col-form-label fw-bold" htmlFor='equipment_affected'>Equipment to be affected</label>
                        <div className="col-9">
                            <input type="input" className="form-control" id="equipment_affected"
                                value={formData.equipment_affected} required
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center form-group">
                        <div>
                            <label className="col col-form-label fw-bold" htmlFor='details_of_modification'>Details of PLC modification</label>
                        </div>
                        <div className="col">
                            <textarea className="form-control fixed-size" id="details_of_modification" rows="2"
                                value={formData.details_of_modification}
                                onChange={handleChange} required

                            />
                        </div>
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

                    <div className="row mb-3 align-items-center form-group">
                        <label className="col-3 col-form-label fw-bold" htmlFor='reason_for_modification'>Reason for PLC modification</label>
                        <div className="col-9">
                            <input type="input" className="form-control text-uppercase" id="reason_for_modification"
                                value={formData.reason_for_modification}
                                onChange={handleChange} required
                            />
                        </div>
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
                    <div className="row justify-content-between align-items-center">
                        <div className="col-6">
                            <p className='fw-bold'>HOD Requester:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>
                        <div className="col-6">
                            <p className='fw-bold'>Requester Manager:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>
                        <div className="col-6">
                            <p className='fw-bold'>E&I HOD:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>
                        <div className="col-6">
                            <p className='fw-bold'>PME HOD:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>

                        <div className="col-6">
                            <p className='fw-bold'>Maintenance Manager:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>
                    </div>
                    <hr />
                    <div className=" mt-2">
                        <p className="hims fw-lighter lh-sm">
                            Document No:HIMS-L2-F-01-14.02<br />
                            Date Issued:17-03-2019<br />
                            Next Rev. Date:1/10/2027<br />
                            Revision number:04<br />
                        </p>
                    </div>



                </form>

            </div>
        </div>
    )
}

export default PLCForm
