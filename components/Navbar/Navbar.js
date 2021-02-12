import React from 'react';

const Navbar = (props) => {
  return (
    <div className='bg-white' style={{ minHeight: '90px' }}>
      <nav className='bg-white shadow'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex px-2 lg:px-0'>
              <div className='flex-shrink-0 flex items-center'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                  alt='Workflow'
                />
                <img
                  className='hidden lg:block h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                  alt='Workflow'
                />
              </div>
              <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                <a
                  href='/'
                  className='border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                >
                  Blog
                </a>
                <a
                  href='/'
                  className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                >
                  About Me
                </a>
              </div>
            </div>
            <div className='flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end'>
              <div className='max-w-lg w-full lg:max-w-xs'>
                <label htmlFor='search' className='sr-only'>
                  Search
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      className='h-5 w-5 text-gray-400'
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
                    className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
