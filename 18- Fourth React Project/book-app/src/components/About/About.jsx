export default function About() {
    return (
        <div style={{ maxWidth: '1000px', margin: '2rem auto', padding: '0 1.25rem' }}>
            <section style={{
                background: 'linear-gradient(135deg, #14213d, #3554d1)',
                color: 'white',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 16px 36px rgba(20, 33, 61, 0.16)'
            }}>
                <h2 style={{ marginBottom: '0.8rem' }}>About BookNest</h2>
                <p style={{ margin: 0, lineHeight: 1.8, color: 'rgba(255,255,255,0.92)' }}>
                    BookNest is a cozy digital library where readers can explore curated books, browse favorites, and enjoy a polished experience built around discovery and comfort.
                </p>
            </section>
        </div>
    )
}