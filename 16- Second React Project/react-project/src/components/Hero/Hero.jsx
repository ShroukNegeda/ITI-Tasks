import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <span className={styles.eyebrow}>React + Vite</span>
            <h1 className={styles.title}>Same lesson, better look</h1>
            <p className={styles.subtitle}>
                Components, state, and conditional rendering — the same ideas
                from the session, wrapped in a cleaner interface.
            </p>
        </section>
    )
}