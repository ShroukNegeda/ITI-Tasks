export default function Child(props) {

    console.log({props});
    let {bookTitle, bookPrice, bookType, bookDetails} = props;

    return (
    <>
    <div className="text-2xl bg-primary p-4">
        <h1>Child</h1>
            <h2 className='bg-warning'>Book Title: {bookTitle}</h2>
            <h2 className='bg-warning'>Book Price: {bookPrice}</h2>
            <h2 className='bg-warning'>Book Type: {bookType}</h2>
            <h2 className='bg-warning'>Device Name: {bookDetails.name}</h2>
            <h2 className='bg-warning'>Device Copies: {bookDetails.copies}</h2>

    </div>
    </>
    )
}