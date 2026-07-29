import { NavLink } from 'react-router-dom'
import NavbarStyle from './Navbar.module.css'
import brandIcon from '../../assets/logo.jpg'

const links = [
    { to: '/', label: 'Home' },
    { to: '/library', label: 'Library' },
    { to: '/about', label: 'About' },
    { to: '/featured', label: 'Featured' },
    { to: '/catalog', label: 'Catalog' }
]

export default function Navbar() {
    return (
        <nav className={NavbarStyle.navbar}>
            <div className={NavbarStyle.container}>
                <NavLink className={NavbarStyle.brand} to="/">
                    <img src={brandIcon} alt="BookNest logo" className={NavbarStyle.brandIcon} />
                    <span>BookNest</span>
                </NavLink>

                <div className={NavbarStyle.links}>
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            className={({ isActive }) => isActive ? `${NavbarStyle.link} ${NavbarStyle.active}` : NavbarStyle.link}
                            to={link.to}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}