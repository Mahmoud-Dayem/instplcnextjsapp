import Link from 'next/link';
import React from 'react';

function NavigationBar() {

  return (


    <div className="bg-emerald-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/plcform" className="text-2xl text-white font-bold hover:text-emerald-500 transition duration-300">
        
            PLC & Instrumentation
         
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/plcform" className="px-4 py-2 bg-emerald-600 text-white rounded border border-emerald-500 hover:bg-emerald-500 shadow-lg transition duration-300">
            
                New Request
             
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // <div  >


    //   <div className="bg-emerald-900  flex  justify-between  items-center p-1 ">
    //     <Link href="./plcform" className='text-2xl text-white hover:text-emerald-500' >PLC & Instrumentation </Link>
    //     <ul className="flex mr-4  ">
    //       <li className='border border-emerald-500 rounded-2xl p-2  bg-emerald-600 hover:bg-emerald-500 shadow-lg'>
    //         <Link href="./plcform" className='text-xl text-gray-900  '>New Request</Link>
    //       </li>

    //     </ul>
    //   </div >
    // </div>

  );
}

export default NavigationBar;
