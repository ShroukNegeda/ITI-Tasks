export default function BookCard({ book, removeBook }) {
    let {id, title, author, price, isBestseller, copies} = book;
    return (
        <div className="col-md-4 col-lg-3">
            <div style={{
                background: 'linear-gradient(135deg, #ffffff, #f7f9ff)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '20px',
                padding: '1.2rem',
                boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
                position: 'relative',
                minHeight: '250px'
            }}>
                <h4 style={{ color: '#14213d', marginBottom: '0.4rem' }}>{title}</h4>
                <p style={{ color: '#3554d1', fontWeight: 600, marginBottom: '0.3rem' }}>{author}</p>
                <p style={{ color: '#64748b', marginBottom: '0.3rem' }}>Price: {price}</p>
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>Copies: {copies}</p>

                {isBestseller ? <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#ef4444', color: 'white', padding: '0.3rem 0.6rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>Bestseller</span> : ''}

                <div className="d-flex justify-content-between gap-2 mt-3">
                    <button className="btn btn-danger btn-sm" onClick={() => removeBook(id)}>Remove</button>
                    <button className="btn btn-primary btn-sm">Update Copies</button>
                </div>
            </div>
        </div>
    )
}