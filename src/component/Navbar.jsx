import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'
import {Link} from 'react-router-dom'
import Transactions from './Transactions'

function Navbar(props) {
    
    const [openLogin, setOpenLogin] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)
    const cancelButtonRef = useRef(null)
    
    function toggleLoggedIn() {
        setOpenLogin(false)
        setOpenRegister(false)
        props.onClick()
    }

    return(
        <div>
            <nav className='flex justify-between items-center mx-20 my-7'>
                <div>
                    <Link to="/">
                        <img src="/img/landing_page/Logo.png" alt="logo" />
                    </Link>
                </div>
                {/* Props isLogin & Dropdown */}
                <div className='space-x-4'>
                    {props.isLogin ? (
                    <div className='flex items-center relative'>
                        <Link to="/my-cart" className='relative' >
                            <img className='mx-8 w-8 cursor-pointer' src="img/user/cartLogo.png" alt="logo" />
                            {Transactions.length > 0 ? (
                                <div className='w-5 h-5 text-xs text-white font-bold bg-red-600 rounded-full absolute right-6 -top-1 flex justify-center items-center'>
                                    {Transactions.length}
                                </div>
                            ) : null}
                        </Link>
                        <div>
                            <Menu as="div" className="ml-3 relative z-10">
                                    <div>
                                    <Menu.Button className="max-w-xs border-brand-red border-2 bg-brand-red rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-12 w-12 rounded-full" src="/img/user/profil.png" alt="" />
                                    </Menu.Button>
                                    </div>
                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {!props.isAdmin ? (
                                        <Menu.Item>
                                            <div className='flex my-3'>
                                                <img className='w-8 h-8 mx-3 mt-1' src="img/dropdown/profilIco.png" alt="" />
                                                <Link 
                                                    to='/profil'
                                                    className='bg-white block px-4 py-2 text-md font-["Avenir-Black"] text-gray-700'>
                                                    Profile
                                                </Link>
                                            </div>
                                        </Menu.Item>  
                                ):(
                                <>
                                    <Menu.Item>
                                        <div className='flex my-3'>
                                            <img className='h-8 mx-3 mt-1' src="img/dropdown/addProduct.png" alt="" />
                                            <Link 
                                                to='/add-menu'
                                                className='bg-white block px-5 py-2 text-md font-["Avenir-Black"] text-gray-700'>
                                                Add Product
                                            </Link>
                                        </div>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <div className='flex mt-3 my-2'>
                                            <img className='h-8 mx-3 mt-1' src="img/dropdown/addIcoTopping.png" alt="" />
                                            <Link
                                                to='/add-menu-topping'
                                                className='bg-white block px-4 py-2 font-["Avenir-Black"] text-md text-gray-700'>
                                                Add Topping
                                            </Link>
                                        </div>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <div className='flex mt-3 my-2'>
                                            <img className='h-8 mx-3 mt-4' src="img/dropdown/transaction.png" alt="" />
                                            <Link
                                                to='/income-transaction'
                                                className='bg-white block px-4 py-2 font-["Avenir-Black"] text-md text-gray-700'>
                                                Table Transaction
                                            </Link>
                                        </div>
                                    </Menu.Item>
                                </>
                                )}
                                <hr />
                                    <Menu.Item>
                                        <div className='flex mt-3 my-2'>
                                            <img className='h-8 mx-3 mt-1' src="img/dropdown/logout.png" alt="" />
                                            <div
                                                className='bg-white block px-4 py-2 font-["Avenir-Black"] text-md text-gray-700 cursor-pointer' onClick={() => toggleLoggedIn()}>
                                                Logout
                                            </div>
                                        </div>
                                    </Menu.Item>
                                        </Menu.Items>
                                        </Transition>
                            </Menu>
                        </div> 
                    </div>
                    ) : (
                    <>
                        <button onClick={() => setOpenLogin(!openLogin)} className='bg-white border-2 border-brand-red text-brand-red font-bold px-7 py-1 rounded-md'>Login</button>
                        <button onClick={() => setOpenRegister(!openRegister)} className='bg-brand-red border-2 border-brand-red text-white px-7 py-1 rounded-md'>Register</button>
                    </>
                    )}
                </div>

            </nav>
        
      {/* Modal Register */}
      <Transition.Root show={openRegister} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpenRegister}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-96">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-3xl font-bold font-['Avenir-Black'] text-brand-red">
                        Register
                      </Dialog.Title>
                      <div className="space-y-5">
                        <label htmlFor="email-address" className="sr-only">
                        Email address
                        </label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Email"
                        />
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        />
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Full Name"
                        />
                        <div className=''>
                          <button
                          type="button"
                          className="bg-brand-red text-white w-full py-2 rounded-md"
                          onClick={() => toggleLoggedIn()}
                          >
                              Register
                          </button>
                      </div>
                      <p className="text-center">Already have an account ? Klik <b>Here</b></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
               
      {/* {/* Modal Login */}
      <Transition.Root show={openLogin} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpenLogin}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-96">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-3xl font-bold font-['Avenir-Black'] text-brand-red">
                        Login
                      </Dialog.Title>
                      <div className="space-y-5">
                        <label htmlFor="email-address" className="sr-only">
                        Email address
                        </label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Email"
                        />
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        />
                        <div className=''>
                          <button
                          type="button"
                          className="bg-brand-red text-white w-full py-2 rounded-md"
                          onClick={() => toggleLoggedIn()}
                          >
                              Login
                          </button>
                      </div>
                      <p className="text-center">Don't have an account ? Klik <b>Here</b></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
        </div>
    )
}

export default Navbar