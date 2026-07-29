import FeaturedImage from '../../assets/logo.jpg'
import FeaturedStyle from './Featured.module.css'

export default function Featured() {
    return (
        <div style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1.25rem' }}>
            <section className={FeaturedStyle.card}>
                <div className={FeaturedStyle.textBlock}>
                    <p className={FeaturedStyle.eyebrow}>Featured Book</p>
                    <h1>Discover the story everyone is talking about.</h1>
                    <p>BookNest highlights inspiring reads with a modern, calm, and welcoming layout that makes every book feel special.</p>
                </div>
                <div className={FeaturedStyle.imageBlock}>
                    <img src={FeaturedImage} alt="Featured Book Cover" />
                </div>
            </section>
        </div>
    )
}