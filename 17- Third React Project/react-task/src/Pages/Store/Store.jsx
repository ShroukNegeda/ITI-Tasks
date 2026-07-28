import { useState } from "react";
import ProductCard from "./ProductCard";

export default function Store() {
  const [products, setProducts] = useState([
    { id: 1, name: "Samsung", price: 3000, count: 250, onSale: true },
    { id: 2, name: "Apple", price: 5000, count: 100, onSale: false },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addProduct(e) {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      count: 0,
      onSale: false,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  }

  function deleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <div>
      <h2>Store</h2>
      <p className="text-muted">
        Example of <code>useState</code>: A Controlled Inputs form that adds a product to the array, and each
        product is passed as a prop to the child component <code>ProductCard</code>.
      </p>

      <form className="row g-2 mb-4" onSubmit={addProduct}>
        <div className="col-auto">
          <input
            className="form-control"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" type="submit">
            Add Product
          </button>
        </div>
      </form>

      <div className="row">
        {products.length === 0 && <p>No products available now</p>}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={deleteProduct} />
        ))}
      </div>
    </div>
  );
}