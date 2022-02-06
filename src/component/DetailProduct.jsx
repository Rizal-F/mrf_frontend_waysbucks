function DetailProduct () {
    return(
        <div className="flex mx-32">
            <div className="w-2/5">
                <img className="w-full"  src="/img/landing_page/product1.png" alt="" />
                </div>
            <div className=" text-brand-red w-3/5 ml-10">
                <h1 className="text-4xl font-bold font-['Avenir-Black']">Ice Coffee Palm Sugar</h1>
                <p className="font-['Avenir-Book'] mt-5">Rp.27.000</p>
                <p className="font-['Avenir-Roman'] text-lg font-bold mt-10 mb-5">Topping</p>
                <div className="flex text-sm flex-wrap text-center justify-between items-center">
                    <div className="w-1/4 mb-10 flex flex-col items-center">
                        <img src="/img/detail_product/bubbleTea.png" alt="" />
                        <p>Bubble Tea Gelatin</p>
                    </div>
                    <div className="w-1/4 mb-10 flex flex-col items-center">
                        <img src="/img/detail_product/manggo.png" alt="" />
                        <p>Manggo</p>
                    </div>
                    <div className="w-1/4 mb-10 flex flex-col items-center">
                        <img src="/img/detail_product/coconut.png" alt="" />
                        <p>Green Coconut</p>
                    </div>
                    <div className="w-1/4 mb-10 flex flex-col items-center">
                        <img src="/img/detail_product/bobaManggo.png" alt="" />
                        <p>Boba Manggo</p>
                    </div>
                    <div className="w-1/4 mb-10 flex flex-col items-center">
                        <img src="/img/detail_product/bilberry.png" alt="" />
                        <p>Bill Berry Boba</p>
                    </div>
                    <div className="w-1/4 mb-10 flex flex-col items-center">
                        <img src="/img/detail_product/kiwi.png" alt="" />
                        <p>Kiwi Popping Pearl</p>
                    </div>
                    <div className="w-1/4 mb-10 flex flex-col items-center">
                        <img src="/img/detail_product/matcha.png" alt="" />
                        <p>Matcha Cantaloupe</p>
                    </div>
                    <div className="w-1/4 mb-10 flex flex-col items-center">
                        <img src="/img/detail_product/strawberry.png" alt="" />
                        <p>Strawberry Popping</p>
                    </div>
                   
                </div>
                <div className="flex justify-between text-brand-brown text-xl font-bold font-['Avenir-Black'] mt-10">
                    <h1>Total</h1>
                    <h1>Rp. 27.000</h1>
                </div>
                <div className="bg-brand-red text-white px-5 py-1 rounded-md text-center mt-14 mb-14">
                    <button>Add Cart</button>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct