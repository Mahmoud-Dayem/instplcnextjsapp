import Link from 'next/link';
import React from 'react';

function NavigationBar() {

  return (
    <div  >


      <div className="bg-emerald-900  flex  justify-between  items-center p-1 ">
        <Link href="./plcform" className='text-2xl text-white hover:text-emerald-500' >PLC & Instrumentation </Link>
        <ul className="flex mr-4  ">
          <li className='border border-emerald-500 rounded p-1  bg-emerald-400 hover:bg-emerald-500'>
            <Link href="./plcform" className='text-xl text-gray-900  '>New Request</Link>
          </li>

        </ul>
      </div >
    </div>

  );
}

export default NavigationBar;
