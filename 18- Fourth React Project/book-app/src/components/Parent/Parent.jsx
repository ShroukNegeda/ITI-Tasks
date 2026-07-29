import { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {

    let [bookTitle, setBookTitle] = useState(`The Alchemist`);
    let [bookPrice, setBookPrice] = useState(150);
    let [book, setBook] = useState({
        id: 1,
        name: `Kindle`,
        price: 2500,
        copies: 40,
        isBestseller: true,
    });

    return (
    <>
    <div className="text-2xl bg-info p-4">
        <h1>Parent</h1>
        {/* <h2 className='bg-warning'>Reader Name: {readerName}</h2> */}
    </div>
    <Child bookTitle={bookTitle} bookPrice={bookPrice}
    bookType="E-Book" bookDetails={book}/>
    </>
    )
}