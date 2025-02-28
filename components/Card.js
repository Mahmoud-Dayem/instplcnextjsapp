import React from 'react'
import Link from 'next/link';
import NavBar from './NavBar';
function Card({ requests }) {

 


    return (
        <div className='flex flex-col justify-center mx-auto px-4   '>
            <NavBar />

            <div className='grid grid-cols-4 grid-flow-row  gap-2 mt-20 mx-10  '>
                {requests.map((request, index) => (

                    <div key={index} className=" relative  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm  min-h-36">
                        <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
                            {`${request.id} | ${request.equipment_affected} | ${request.plc_tag}`.toUpperCase()}
                        </h5>

                        <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white"> </h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{request.details_of_modification}</p>
                        <Link href={`/cardview/${request.id}`} className="absolute  right-0 bottom-0    m-0.5  px-2 py-2 text-sm font-medium text-center text-black bg-gray-300 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-white">
                            Read more
                        </Link>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Card