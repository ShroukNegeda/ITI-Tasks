import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <a className={styles.brand} href="#">Learning Lab</a>

            <ul className={styles.links}>
                <li><a className={`${styles.link} ${styles.linkActive}`} href="#">Home</a></li>
                <li><a className={styles.link} href="#about">About</a></li>
                <li className={styles.dropdownWrap} tabIndex={0}>
                    <a className={styles.link} href="#">Resources</a>
                    <ul className={styles.dropdown}>
                        <li><a className={styles.dropdownItem} href="#">Action</a></li>
                        <li><a className={styles.dropdownItem} href="#">Another action</a></li>
                        <li><hr className={styles.divider} /></li>
                        <li><a className={styles.dropdownItem} href="#">Something else</a></li>
                    </ul>
                </li>
                <li><span className={styles.disabled}>Disabled</span></li>
            </ul>

            <form className={styles.search} role="search">
                <input className={styles.searchInput} type="search" placeholder="Search" aria-label="Search" />
                <button className={styles.searchBtn} type="submit">Search</button>
            </form>
        </nav>
    )
}