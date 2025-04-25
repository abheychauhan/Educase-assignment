import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignupScreen() {

  const [selected, setselected] = useState('')
  return (
    <div className=' h-screen flex flex-col  p-6'>
      <div className='mx-auto bg-gray-200 p-6 h-full flex flex-col gap-4 w-full max-w-sm border-gray-300 border-2'>

        <div className='text-left mb-5'>
          <h1 className='text-2xl font-semibold'>Create your <br /> PopX account</h1>
        </div>

        <div className='flex flex-col justify-between h-full'>

          {/* form */}
          <form action="">
           {/* fullname */}
            <div className="mb-4 relative">
              <label className="block absolute bg-gray-200 px-1 text-xs font-medium text-purple-700 top-[-9px] left-2">
                Full Name <span className='text-red-500'>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full border border-gray-400 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* phone number */}

            <div className="mb-4 relative">
              <label className="block absolute bg-gray-200 px-1 text-xs font-medium text-purple-700 top-[-9px] left-2">
                Phone number <span className='text-red-500'>*</span>
              </label>
              <input
                type="number"
                placeholder="Enter phone number"
                className="w-full border border-gray-400 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* email address */}

            <div className="mb-4 relative">
              <label className="block absolute bg-gray-200 px-1 text-xs font-medium text-purple-700 top-[-9px] left-2">
                Email Address <span className='text-red-500'>*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full border border-gray-400 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* password */}

            <div className="mb-4 relative">
              <label className="block absolute bg-gray-200 px-1 text-xs font-medium text-purple-700 top-[-9px] left-2">
                Password <span className='text-red-500'>*</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-400 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-4 relative">
              <label className="block absolute bg-gray-200 px-1 text-xs font-medium text-purple-700 top-[-9px] left-2">
                Company name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full border border-gray-400 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* agency */}

            <div className="mb-4 relative">
              <span className='text-sm'>
                Are you an Agency?<span className='text-red-500'>*</span>

              </span>
              <div className='flex gap-2 mt-2'>
                <input
                  type="radio"
                  value={selected}
                  checked={selected == 'yes'}
                  onChange={() => setselected('yes')}
                />
                <label className='text-sm'>Yes</label>
                <input
                  type="radio"
                  value={selected}
                  checked={selected == 'no'}
                  onChange={() => setselected('no')}
                  className='ml-4' />
                <label className='text-sm'>No</label>
              </div>
            </div>
          </form>
        {/* button */}
        <Link to='/profile' className="block w-full bg-[#6C25FF] text-center text-white font-semibold py-3 rounded-md">
          Create Account
        </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupScreen