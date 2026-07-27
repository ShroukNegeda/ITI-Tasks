import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import { useState } from 'react'

export default function Home() {
    let [counter, setCounter] = useState(0)
    let [fruits] = useState(['apple', 'banana', 'orange'])

    function increase(param) {
        setCounter(counter + param)
    }

    const isWarn = counter >= 40

    return (
        <>
            <Navbar />
            <Hero />

            <div className={styles.page}>
                <div className={`${styles.counterCard} ${isWarn ? styles.counterCardWarn : ''}`}>
                    <span className={styles.label}>Counter</span>
                    <div className={styles.count}>{counter}</div>
                    <button className={styles.button} onClick={() => increase(10)}>
                        Increase by 10
                    </button>
                </div>

                <h3 className={styles.fruitsTitle}>Fruits list</h3>
                <ul className={styles.fruits}>
                    {fruits.map(fruit => (
                        <li key={fruit} className={styles.fruit}>{fruit}</li>
                    ))}
                </ul>
            </div>

            <About />
            <Footer />
        </>
    )
}