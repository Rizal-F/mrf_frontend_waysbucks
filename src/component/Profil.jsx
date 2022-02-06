function Profil() {
    return(
        <div className="flex mx-32">
            <div className="w-1/2 ">
                <h1 className="font-bold font-['Avenir-Black'] text-brand-red text-xl mb-6">My Profile</h1>
                <div className="flex">
                    <img className="rounded-md mr-6" src="/img/user/profil.png" alt="" />
                    <div className="">
                        <p className="font-bold font-['Avenir-Black'] text-brand-brown">Full Name</p>
                        <p>Muhammad Rizal Fakhruddin</p>
                        <p className="font-bold font-['Avenir-Black'] text-brand-brown pt-5">Email</p>
                        <p>Rizal@mail.com</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 ">
                <h1 className="font-bold font-['Avenir-Black'] text-brand-brown text-xl mb-6">My Transaction</h1>
                <div className="bg-brand-pink rounded-xl justify-between flex">
                    <div >
                        <div className=" flex px-8 py-5">
                            <div>
                                <img className="w-20 rounded-lg" src="/img/landing_page/product1.png" alt="" />
                            </div>
                            <div className="text-xs pl-5">
                                <p className="font-bold font-['Avenir-Black'] text-brand-red text-xl mb-1">Ice Coffe Palm Sugar</p>
                                <p className="text-brand-red mb-3"><b>Saturday</b>, 5 March 2020</p>
                                <p className="text-brand-red mb-2 font-['Avenir-Roman']">Topping : Bill Berry Boba, Bubble Tea Gelatin</p>
                                <p className="text-brand-brown font-['Avenir-Book']">Price : Rp.33.000</p>
                            </div>
                        </div>
                        <div className=" flex px-8 pb-5">
                            <div>
                                <img className="w-20 rounded-lg" src="/img/landing_page/product1.png" alt="" />
                            </div>
                            <div className="text-xs pl-5">
                                <p className="font-bold font-['Avenir-Black'] text-brand-red text-xl mb-1">Ice Coffe Palm Sugar</p>
                                <p className="text-brand-red mb-3"><b>Saturday</b>, 5 March 2020</p>
                                <p className="text-brand-red mb-2 font-['Avenir-Roman']">Topping : Bill Berry Boba, Boba Manggo</p>
                                <p className="text-brand-brown font-['Avenir-Book']">Price : Rp.36.000</p>
                            </div>
                        </div>
                    </div>
                    <div className=" py-6 mx-5">
                        <img className="mb-5 px-4" src="/img/user/logoSmall.png" alt="" />
                        <img className="mb-2 px-3" src="/img/user/barcode.png" alt="" />
                        <button className="text-brand-blue text-xs bg-brand-blue-light w-full py-1 rounded-sm mr-3 mb-1">On The Wayt</button>
                        <p className="text-brand-brown font-['Avenir-Black'] text-xs">Subtotal : 69.000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil