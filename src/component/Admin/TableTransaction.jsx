

const dataTable = [
    {
        no: '1',
        name: 'Sugeng No Pants',
        address: 'Cilengsi',
        postCode: '16620',
        income: '69.000',
        status: 'Waiting Aprove',
    },
    {
        no: '2',
        name: 'Haris Gams',
        address: 'Serang',
        postCode: '42111',
        income: '30.000',
        status: 'Waiting Aprove',
    },
    {
        no: '3',
        name: 'Aziz Union',
        address: 'Bekasi',
        postCode: '13450',
        income: '46.000',
        status: 'Waiting Aprove',
    },
    {
        no: '4',
        name: 'Lae Tanjung Balai',
        address: 'Tanjung Balai',
        postCode: '21331',
        income: '46.000',
        status: 'Waiting Aprove'
    },
]

function TableTransaction() {
    return(
        <div className="transactionWrapp md:w-9/12 md:m-auto md:mt-12">
                <div>
                    <table className="md:w-full text-center">
                        <thead>
                            <tr>
                                <td className="px-2 border border-collapse">No</td>
                                <td className="md:py-3 border border-collapse">Name</td>
                                <td className="border border-collapse">Address</td>
                                <td className="border border-collapse">Post Code</td>
                                <td className="border border-collapse">Income</td>
                                <td className="border border-collapse">Status</td>
                                <td className="border border-collapse">Action</td>
                            </tr>
                        </thead>
                        {dataTable.map((items) => (
                            <tbody>
                                <tr>
                                    <td className="border border-collapse">{items.no}</td>
                                    <td className="md:py-1 border border-collapse">{items.name}</td>
                                    <td className="border border-collapse">{items.address}</td>
                                    <td className="border border-collapse">{items.postCode}</td>
                                    <td className="border border-collapse">{items.income}</td>
                                    <td className="border border-collapse">{items.status}</td>
                                    <td className="border border-collapse">
                                        <button className="md:m-1 bg-red-600 text-white md:px-3 rounded-md">Cancel</button>
                                        <button className="md:m-1 bg-green-600 text-white md:px-3 rounded-md">Approve</button>
                                    </td>
                                </tr>

                            </tbody>
                        ))}
                    </table>
                </div>
        </div>
    )
}

export default TableTransaction