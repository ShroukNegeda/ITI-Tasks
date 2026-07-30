import HomeStyle from './Home.module.css';
import { useContext } from 'react';
import { AppContext } from "../../context/AppContext";

export default function Home() {

    const { user, counter, increament } = useContext(AppContext);

    return (
        <>
            <div className={HomeStyle.wrapper}>
                <span className="session-tag">session state</span>
                <h1>Home</h1>
                <p className={HomeStyle.subtitle}>current values pulled from AppContext</p>

                <div className={HomeStyle.console}>
                    <div><span className="key">name</span>: <span className="val">"{user.fName}"</span></div>
                    <div><span className="key">age</span>: <span className="val">{user.age}</span></div>
                    <div><span className="key">city</span>: <span className="val">"{user.city}"</span></div>
                </div>

                <div className={HomeStyle.counterRow}>
                    <span className="session-tag" style={{ marginBottom: 0 }}>counter</span>
                    <span className={HomeStyle.counterValue}>{counter}</span>
                    <button className="btn btn-primary" onClick={increament}>Increase</button>
                </div>
            </div>
        </>
    )
}