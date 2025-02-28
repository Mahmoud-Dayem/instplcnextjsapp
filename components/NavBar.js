import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function NavBar() {
  return (
    <nav className="mb-10 bg-gray-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <Image
        src="/hcclogo.jpg"
        width={60}
        height={80}
        alt="Picture of the author"
        className='float-left p-1 ml-2' />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap hover:text-green-700  "> PLC and Instrumentations</span>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href='plcform' type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">New request</Link>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">


          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-6 md:p-0 mt-4 font-medium border border-gray-100 rounded-sm bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
              <Link href="/" className="block py-2 px-3   rounded-sm b  " aria-current="page"> Home </Link>
            </li>

            <li>
              <Link href="cardview" className="block py-2 px-3   rounded-sm border-green-300 border-1   " aria-current="page"> Card View </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>

  )
}
