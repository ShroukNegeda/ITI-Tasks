import styles from './About.module.css'

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.card}>
                <h2 className={styles.title}>About this page</h2>
                <p className={styles.text}>
                    This page was built during a React learning session to practice
                    components, state with <code>useState</code>, conditional rendering,
                    and rendering lists with <code>.map()</code> — all styled from scratch
                    with CSS Modules instead of default Bootstrap classes.
                </p>
            </div>
        </section>
    )
}