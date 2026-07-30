import { useState } from "react"
import { Outlet, Link } from "react-router-dom";
import GalleryStyle from "./Gallery.module.css";

export default function Gallery() {

    let [counter, setCounter] = useState(0);
    let [userName, setUserName] = useState(`Shrouk`);

    function updateCounter() {
        setCounter(prev => prev + 1);
    }

    function updateName() {
        setUserName(`Shrouk`);
    }

    return (
    <>
        <div className={GalleryStyle.wrapper}>
            <Outlet/>
            <Link className={GalleryStyle.homeLink} to={`/`}>&larr; back home</Link>
            <span className="session-tag">state demo</span>
            <h2>Gallery</h2>

            <div className={GalleryStyle.statRow}>
                <div className={GalleryStyle.stat}>
                    <div className="label">counter</div>
                    <div className="value">{counter}</div>
                </div>
                <div className={GalleryStyle.stat}>
                    <div className="label">name</div>
                    <div className="value">{userName}</div>
                </div>
            </div>

            <button className="btn btn-primary me-2" onClick={updateCounter}>Increase</button>
            <button className="btn btn-outline-primary" onClick={updateName}>Reset Name</button>
        </div>
    </>
    )
}