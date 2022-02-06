import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {Link} from 'react-router-dom'

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
            <nav className="mx-20 my-10 flex justify-between items-center">
                <Link to="/"><img src="/img/landing_page/Logo.png" alt="" /></Link>
                <div className="space-x-5 font-['Avenir-Black'] flex items-center">
                    {props.isLogin ? 
                    <>
                        <img className="px-3" src="/img/user/cartLogo.png" alt="" />
                        <img className="h-14 w-14 object-cover rounded-full border-2 border-brand-red" src="/img/user/profil.png" alt="" />
                    </> : 
                    <>
                        <button onClick={()=> setOpenLogin(!openLogin)} className="px-6 py-1 rounded-md border-2 border-brand-red text-brand-red" >Login</button>
                        <button  onClick={()=> setOpenRegister(!openRegister)} className="bg-brand-red text-white px-5 py-1 rounded-md border-2 border-brand-red" type="button">Register</button>
                    </>}
                </div> 
            </nav>
        
 
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
                    //   autoComplete=""
                    //   required
                      className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      />
                      <input
                      id="email-address"
                      name="email"
                      type="email"
                    //   autoComplete=""
                    //   required
                      className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      />
                      <input
                      id="email-address"
                      name="email"
                      type="email"
                    //   autoComplete=""
                    //   required
                      className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
                    //   autoComplete=""
                    //   required
                      className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      />
                      <input
                      id="email-address"
                      name="email"
                      type="email"
                    //   autoComplete=""
                    //   required
                      className="appearance-none relative block w-full px-3 py-2 border-2 border-red-700 bg-red-50 placeholder-gray-500 rounded-md focus:outline-none  focus:border-red-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
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