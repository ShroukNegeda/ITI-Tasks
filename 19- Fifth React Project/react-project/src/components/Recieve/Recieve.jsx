export default function Recieve({ product, deleteProduct }) {
    let { id, pName, price, desc, onSale, count } = product;
    return (
    <>
    <div className="col-md-3">
        <div className="bg-warning text-center item shadow-lg p-4 rounded position-relative">
            <h2>Product Name: {pName}</h2>
            <h2>Product Price: {price}</h2>
            <h2>Product Desc: {desc}</h2>
            <h2>Count: {count}</h2>

            { onSale ? <span className="badge bg-danger p-2 position-absolute top-0 end-0"> OnSale</span> : "" }

            <div className="d-flex justify-content-around my-3">
                <button className="btn btn-danger" onClick={() => deleteProduct(id)}>Delete</button>
                <button className="btn btn-primary">Update Count</button>
            </div>
        </div>
    </div>
    </>
    )
}