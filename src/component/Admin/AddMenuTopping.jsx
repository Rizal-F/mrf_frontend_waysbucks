function AddMenuTopping() {
    return(
        <div className="flex mx-32 justify-between">
            <div className="w-7/12">
                <h1 className="font-bold font-['Avenir-Black'] text-brand-red text-4xl mb-10">Topping</h1>
                <form className="text-center" action="">
                    <input className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-7" type="text" placeholder="Name Topping"/>               
                    <input className="w-full border-2 border-brand-red rounded-md bg-grey-red p-2 mb-7" type="text" placeholder="Price"/>               
                    <label
                    htmlFor="photo-upload"
                    className="relative cursor-pointer font-medium text-zinc-400 mt-7" placeholder='asdads'>
                        <div className='flex border-2 border-brand-red bg-red-50 rounded-md justify-between items-center px-1 py-2
                        focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-900'>
                            <p className='ml-2 text-sm bg-red-50 opacity-100 font-normal'>Photo Product</p>
                            <input id="photo-upload" name="photo-upload" type="file" className="hidden place" />                    
                            <img className='h-5 mr-2' src="/img/upload.png" alt="" />
                        </div>
                    </label>                
                    <button className="bg-brand-red text-white px-5 py-2 rounded-md text-center w-9/12 mt-7">Add Product</button>
                </form>
            </div>
            <div className="w-4/12">
                <img className="w-full" src="/img/addTopping.png" alt="" />
            </div>
        </div>
    )
}

export default AddMenuTopping