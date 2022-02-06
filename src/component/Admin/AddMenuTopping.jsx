function AddMenuTopping() {
    return(
        <div className="flex mx-32 justify-between">
            <div className="w-7/12">
                <h1 className="font-bold font-['Avenir-Black'] text-brand-red text-4xl mb-10">Topping</h1>
                <form className="text-center" action="">
                    <input className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-7" type="text" placeholder="Name Topping"/>               
                    <input className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-7" type="text" placeholder="Price"/>               
                    <input className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-7" type="text" placeholder="Photo Product"/>               
                    <button className="bg-brand-red text-white px-5 py-2 rounded-md text-center w-9/12 ">Add Product</button>
                </form>
            </div>
            <div className="w-4/12">
                <img className="w-full" src="/img/addTopping.png" alt="" />
            </div>
        </div>
    )
}

export default AddMenuTopping