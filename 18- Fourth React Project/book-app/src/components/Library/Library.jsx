import { Outlet, Link } from "react-router-dom";
import BookSearch from "../BookSearch/BookSearch";

export default function Library() {
    return (
        <div style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1.25rem' }}>
            <section style={{
                background: 'linear-gradient(135deg, #ffffff, #f4f7ff)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 16px 36px rgba(15, 23, 42, 0.08)'
            }}>
                <Outlet />
                <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#3554d1', fontWeight: 700, marginBottom: '0.3rem' }}>Your Library</p>
                    <h2 style={{ color: '#14213d', marginBottom: '0.6rem' }}>Explore books, discover favorites, and stay inspired.</h2>
                    <p style={{ color: '#64748b', margin: 0, lineHeight: 1.8 }}>
                        Browse through curated sections and enjoy a library experience that feels calm, modern, and easy to navigate.
                    </p>
                </div>
                <Link className="btn btn-primary" to="/">Back to Home</Link>
                <BookSearch />
            </section>
        </div>
    )
}