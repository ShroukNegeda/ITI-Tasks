export default function ProductCard({ product, onDelete }) {
  const { id, name, price, count, onSale } = product;

  return (
    <div className="col-md-4 mb-3">
      <div className="bg-light text-center shadow p-4 rounded position-relative">
        {onSale && (
          <span className="badge bg-danger position-absolute top-0 end-0 m-2">
            OnSale
          </span>
        )}
        <h4>{name}</h4>
        <p className="mb-1">Price: {price} EGP</p>
        <p className="mb-3">Quantity: {count}</p>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}