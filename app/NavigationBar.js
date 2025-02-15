import Link from 'next/link';
import React from 'react';

function NavigationBar() {

  return (
    <div  >


      <div className="bg-emerald-900  flex  justify-between  items-center p-2 ">
        <Link href="./plcform" className='text-3xl text-white hover:text-emerald-500' >PLC & Instrumentation </Link>
        <ul className="flex space-x-4 ">
          <li className='border border-emerald-500 rounded p-2'>
            <Link href="./plcform" className='text-3xl text-white hover:text-emerald-500 '>New Request</Link>
          </li>
          <li className='border border-emerald-500 rounded p-2'>
            <Link href="./plcformnew" className='text-3xl text-white hover:text-emerald-500 '>Review Old Request</Link>
          </li>
        </ul>
      </div >
    </div>

  );
}

export default NavigationBar;
