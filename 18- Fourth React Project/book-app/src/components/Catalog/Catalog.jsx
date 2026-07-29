import { useState } from 'react';
import BookCard from "../BookCard/BookCard";

export default function Catalog() {
    let bookArray = [
        {id: 1, title: "1984", author: "George Orwell", price: 120, isBestseller: true, desc: "Dystopian novel", copies: 4},
        {id: 2, title: "Dune", author: "Frank Herbert", price: 150, isBestseller: true, desc: "Sci-fi epic", copies: 2},
        {id: 3, title: "Sapiens", author: "Yuval Noah Harari", price: 180, isBestseller: true, desc: "History of humankind", copies: 5},
        {id: 4, title: "Atomic Habits", author: "James Clear", price: 140, isBestseller: false, desc: "Self improvement", copies: 3},
        {id: 5, title: "Clean Code", author: "Robert Martin", price: 200, isBestseller: false, desc: "Software craftsmanship", copies: 1},
        {id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", price: 130, isBestseller: true, desc: "Fantasy novel", copies: 6},
        {id: 7, title: "Educated", author: "Tara Westover", price: 110, isBestseller: false, desc: "Memoir", copies: 2},
    ]

    let [books, setBooks] = useState(bookArray);

    function removeBook(bookId){
        setBooks(books.filter( book => book.id !== bookId ));
    }

    return (
        <div style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1.25rem' }}>
            <div style={{ marginBottom: '1.2rem' }}>
                <h2 style={{ color: '#14213d', marginBottom: '0.4rem' }}>Book Catalog</h2>
                <p style={{ color: '#64748b', margin: 0 }}>Browse your favorite books in a polished, easy-to-scan layout.</p>
            </div>
            <div className="row g-4">
                {books.map((book) => <BookCard key={book.id} book={book} removeBook={removeBook} />)}
            </div>
        </div>
    )
}