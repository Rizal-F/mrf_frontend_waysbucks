import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'

function Cart(props) {

    const [openPay, setOpenPay] = useState(false)
    const cancelButtonRef = useRef(null)

    return(
        <div>
            {/* Cart */}
            <div className="mx-32">
                <div className="">
                    <h1 className="font-bold font-['Avenir-Black'] text-brand-red text-xl mb-5">My Cart</h1>
                    <p className="font-['Avenir-roman'] text-brand-red text-lg">Review Your Order</p>
                </div>
                <div className="flex mt-2">
                    <div className="w-3/5">
                    <hr className="border-1 border-brand-brown" />
                        <div className="flex justify-between mt-4 mb-4">
                            <div className="flex">
                                <div>
                                    <img className="w-20" src="/img/landing_page/product1.png" alt="" />
                                </div>
                                <div className="text-brand-red px-4 py-4">
                                    <p className="font-bold font-['Avenir-Black'] mb-3">Ice Coffe Palm Sugar</p>
                                    <p className="">Toping : Bill Berry Boba, Bubble Tea Gelatin</p>
                                </div>
                            </div>
                            <div className="space-y-5 items-end">
                                <p className="text-brand-red">Rp. 33.000</p>
                                <img className="pl-14" src="/img/delete.png" alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 mb-4">
                            <div className="flex">
                                <div>
                                    <img className="w-20" src="/img/landing_page/product1.png" alt="" />
                                </div>
                                <div className="text-brand-red px-4 py-4">
                                    <p className="font-bold font-['Avenir-Black'] mb-3">Ice Coffe Palm Sugar</p>
                                    <p className="">Toping : Bill Berry Boba, Manggo</p>
                                </div>
                            </div>
                            <div className="space-y-5">
                                <p className="text-brand-red">Rp. 36.000</p>
                                <img className="pl-14" src="/img/delete.png" alt="" />
                            </div>
                        </div>
                        <hr className="border-1 border-brand-brown" />
                        <div className="flex justify-between text-brand-red">
                            <div className="w-1/2 mt-10">
                                <hr className="border-brand-brown my-5" />
                                <div className="flex justify-between">
                                    <div>
                                        <p>Subtotal</p>
                                        <p>Qty</p>
                                    </div>
                                    <div>
                                        <p>69.000</p>
                                        <p>2</p>
                                    </div>
                                </div>
                                <hr className="border-brand-brown mt-5 mb-2" />
                                <div className="flex justify-between font-bold font-['Avenir-Black']">
                                    <div>
                                        <p>Total</p>
                                    </div>
                                    <div>
                                        <p>69.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-14 mx-5 p-5 bg-brand-pink border-2 border-brand-red rounded-md cursor-pointer">
                                <img className="px-16 py-2" src="/img/note.png" alt="" />
                                <p>Attache of Transaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 ml-16">
                        <form action="">
                            <input className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-4" type="text" placeholder="Name" />
                            <input className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-4" type="text" placeholder="Email" />
                            <input className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-4" type="text" placeholder="Phone" />
                            <input className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-4" type="text" placeholder="Post Code" />
                            <textarea className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-4" placeholder="Address" name="" id=""></textarea>
                            <button type='button' onClick={() => setOpenPay(!openPay)} className="bg-brand-red text-white px-5 py-2 rounded-md text-center w-full mt-2">Pay</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal Pay */}
            <Transition.Root show={openPay} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpenPay}>
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
                            <div className="inline-block  bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-fit">
                                <div className="bg-white px-6 py-6 ">
                                    <div className="">
                                        <div className="text-center">
                                            <Dialog.Title as="h3" className="text-xl font-['Avenir-Roman'] text-brand-green">
                                            Thank you for ordering in us, please wait to verify you order
                                            </Dialog.Title>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Cart