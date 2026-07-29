import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { nanoid } from 'nanoid';

export default function BookSearch() {
    let [booksArray, setBooksArray] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    let genres = ['Fiction', 'Fantasy', 'History', 'Science'];

    useEffect(() => {
        getBooks('harry potter');
    }, [])

    async function getBooks(searchTerm = 'harry potter') {
        setIsLoading(true);
        try {
            let { data } = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
            setBooksArray(data.docs.slice(0, 8));
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1rem' }}>
                {genres.map((genre) => (
                    <span key={nanoid()} style={{
                        background: '#e9f0ff',
                        color: '#3554d1',
                        padding: '0.45rem 0.8rem',
                        borderRadius: '999px',
                        fontSize: '0.9rem',
                        fontWeight: 700
                    }}>
                        {genre}
                    </span>
                ))}
            </div>

            <div className="row g-4">
                {isLoading ? (
                    <div className="loader-wrapper"><Loader /></div>
                ) : (
                    booksArray.map((book) => <BookContainer key={book.key || nanoid()} book={book} />)
                )}
            </div>
        </section>
    )
}

function BookContainer({ book }) {
    let coverUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : `https://via.placeholder.com/150x220?text=No+Cover`;

    return (
        <div className="col-md-3">
            <div style={{
                background: 'linear-gradient(135deg, #ffffff, #f7f9ff)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '18px',
                padding: '1rem',
                boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)',
                textAlign: 'center',
                height: '100%'
            }}>
                <p style={{ marginBottom: '0.7rem', color: '#14213d', fontWeight: 600 }}>{book.title}</p>
                <img src={coverUrl} alt={book.title} style={{ width: '100%', borderRadius: '12px' }} />
            </div>
        </div>
    )
}