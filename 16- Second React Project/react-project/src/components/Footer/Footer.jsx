import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.brand}>Learning Lab</span>
            <p className={styles.note}>Built while learning React + Vite</p>
        </footer>
    )
}