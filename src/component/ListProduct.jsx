import {Link} from 'react-router-dom'

function ListProduct() {
    return(
        <div className="mx-32 my-5">
            <h2 className="text-brand-red text-2xl font-['Avenir-Black'] mb-5">Let's Order</h2>
            <div className="flex justify-between space-x-6"> 
                <Link to="/detail-product" className="bg-brand-pink w-1/4 rounded-lg text-brand-red">
                    <img className="w-full" src="/img/landing_page/product1.png" alt="" />
                    <div className="p-3">
                        <p className="font-bold">Iced Coffe Palm Sugar</p>
                        <p>Rp. 27.000</p>
                    </div>
                </Link>    
                <div className="bg-brand-pink w-1/4 rounded-lg text-brand-red">
                    <img className="w-full" src="/img/landing_page/product2.png" alt="" />
                    <div className="p-3">
                        <p className="font-bold">Iced Coffe Green Tea</p>
                        <p>Rp. 31.000</p>
                    </div>
                </div>               
                <div className="bg-brand-pink w-1/4 rounded-lg text-brand-red">
                    <img className="w-full" src="/img/landing_page/product3.png" alt="" />
                    <div className="p-3">
                        <p className="font-bold">Hanami Latte</p>
                        <p>Rp. 29.000</p>
                    </div>
                </div>               
                <div className="bg-brand-pink w-1/4 rounded-lg text-brand-red">
                    <img className="w-full" src="/img/landing_page/product4.png" alt="" />
                    <div className="p-3">
                        <p className="font-bold">Clepon Coffe</p>
                        <p>Rp. 28.000</p>
                    </div>
                </div>               
            </div>
        </div>
    )
}

export default ListProduct