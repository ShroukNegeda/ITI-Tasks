import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import AboutStyle from "./About.module.css";


export default function About() {

    const { getProducts, productsList, userLogin } = useContext(AppContext);

    return (
        <>
        <div className={AboutStyle.wrapper}>
            <span className="session-tag">catalog</span>
            <h2>About</h2>
            <p className={AboutStyle.subtitle}>products pulled live from the Fake Store API</p>

            <button className="btn btn-primary mb-3" onClick={userLogin}>Login</button>
            <button className="btn btn-outline-primary mb-3 ms-2" onClick={getProducts}>Get Products</button>

            <div className="row g-4">
                {productsList.map((product) => (
                    <div className="col-md-4 col-lg-3" key={product.id}>
                        <div className={`h-100 ${AboutStyle.card}`}>
                            <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: "220px", objectFit: "contain" }} />
                            <div className="card-body d-flex flex-column p-3">
                                <h6 className="card-title">{product.title}</h6>
                                <p className={AboutStyle.price}>${product.price}</p>
                                <button className="btn btn-outline-primary mt-auto">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}