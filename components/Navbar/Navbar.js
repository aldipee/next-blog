import React from 'react';
import Link from 'next/link';
const Navbar = (props) => {
  return (
    <div className='bg-white'>
      <nav className='bg-white shadow'>
        <div className='px-2 mx-auto max-w-7xl sm:px-4 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex px-2 lg:px-0'>
             
                <div className='flex items-center flex-shrink-0'>
                <Link href='/'>
                  <img
                    className='block w-auto h-8 cursor-pointer lg:hidden'
                    src='https://firebasestorage.googleapis.com/v0/b/principal-my.appspot.com/o/blog-logo.svg?alt=media&token=6427d288-e054-4376-9386-f5f483f9978f'
                    alt='Workflow'
                  />
                    </Link>
                   <Link href='/'>
                  <img
                    className='hidden w-auto h-12 cursor-pointer lg:block'
                    src='https://firebasestorage.googleapis.com/v0/b/principal-my.appspot.com/o/blog-logo.svg?alt=media&token=6427d288-e054-4376-9386-f5f483f9978f'
                    alt='Workflow'
                  />
                  </Link>
                </div>
              
              <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                <Link href={`/`}>
                  <a className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500'>
                    Now
                  </a>
                </Link>

                {/* <a
                  href="/"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                >
                  About Me
                </a> */}
              </div>
            </div>
            <div className='flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end'>
              <div className='w-full max-w-lg lg:max-w-xs'>
                <label htmlFor='search' className='sr-only'>
                  Search
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg
                      className='w-5 h-5 text-gray-400'
                      data-todo-x-description='Heroicon name: search'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <input
                    id='search'
                    name='search'
                    className='block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    placeholder='Search'
                    type='search'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
