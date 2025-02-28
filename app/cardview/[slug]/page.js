import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { unstable_cache } from 'next/cache';
import pool from '@/app/lib/db';


async function page({ params }) {
    const { slug } = await params;




    const [request] = await pool.execute(`SELECT * FROM plc_modification_requests where  id = ${slug}`);
    console.log(request[0]);
    const data = request[0]



    return (

        <div className='flex flex-col justify-center mx-auto px-4 text-center w-3/4'>


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

                    <p className='text-xl font-medium text-gray-900 '>Modification No {data.id}</p>
                </div>
                <div className="flex items-baseline gap-2   ">


                    <label className='text-xl font-medium' htmlFor="employee_id">Emply. ID </label>
                    <h5 className='text-xl font-medium  text-gray-500 ' htmlFor="employee_id">{data.employee_id} </h5>

                </div>
                <div className="flex items-baseline gap-2  ">

                    <label className='text-xl font-medium   ' htmlFor='employee_name'>Emply. Name </label>
                    <h5 className='text-xl font-medium  text-gray-500 ' htmlFor='employee_name'>{data.employee_name}</h5>



                </div>
                <div className="flex items-baseline gap-2 ">

                    <label className='text-xl font-medium' htmlFor='request_date'>Date: </label> 
                    <h5 className='text-xl font-medium text-gray-500 ' htmlFor='employee_name'>
                        {new Date(data.request_date).toISOString().split('T')[0]}
                    </h5>

                </div>
            </div>




            <div className="flex gap-4 items-baseline justify-start my-3 ">
                <label htmlFor="plc_tag" className=" mb-2 text-xl font-medium text-gray-900 ">PLC Tag: </label>
                <h5 className='text-xl font-medium  text-gray-500 ' htmlFor='employee_name'>{data.plc_tag.toUpperCase()}</h5>


            </div>


            <div className="flex gap-4 items-baseline justify-start my-3 ">
                <label htmlFor="description" className=" mb-2 text-xl font-medium text-gray-900 ">Description</label>
                <h5 className='text-xl font-medium  text-gray-500 ' htmlFor='employee_name'>{data.description }</h5>

            </div>

            <div className="flex gap-4 items-baseline justify-start my-3 ">
                <label className=" text-xl font-medium" htmlFor='equipment_affected'>Equipment to be affected</label>
                <h5 className='text-xl font-medium  text-gray-500 ' htmlFor='employee_name'>{data.equipment_affected }</h5>




            </div>

            <div className="flex flex-col items-start my-10">

                <label className=" text-xl font-medium" htmlFor='details_of_modification'>Details of PLC modification</label>
                <h5 className='text-xl font-medium text-start   text-gray-500 ' htmlFor='employee_name'>{data.details_of_modification }</h5>

            </div>




            <div className="flex gap-4 items-baseline justify-start my-1 ">
                <label className="text-xl font-medium w-1/4" htmlFor='reason_for_modification'>Reason for PLC modification</label>
                <h5 className='text-xl font-medium text-start  text-gray-500  '>{data.reason_for_modification}</h5>

            </div>
            <hr />


            <div className="d-flex m-1">
                <div className="col-5 fw-bold">
                    <p>Performed by:</p>
                </div>
      
            </div>
        </div>

    )
}


export default page