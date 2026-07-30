import { NavLink } from 'react-router-dom'
import NavbarStyle from './Navbar.module.css'

const links = [
    { to: '/', label: 'home' },
    { to: '/gallery', label: 'gallery' },
    { to: '/about', label: 'about' },
    { to: '/hero', label: 'hero' },
    { to: '/send', label: 'pizza' },
    { to: '/register', label: 'register' },
]

export default function Navbar() {
    return (
        <>
        <nav className={`navbar navbar-expand-sm ${NavbarStyle.navbarCustom}`}>
        <div className="container">
            <NavLink className={`navbar-brand ${NavbarStyle.brand}`} to={'/'}>session.log</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {links.map(link => (
                    <li className="nav-item" key={link.to}>
                        <NavLink
                            className={({ isActive }) => `nav-link ${NavbarStyle.navLink} ${isActive ? NavbarStyle.navLinkActive : ''}`}
                            to={link.to}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                <input className="form-control me-2" type="search" placeholder="search..." aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Go</button>
            </form>
            </div>
        </div>
        </nav>
    </>
    )
}