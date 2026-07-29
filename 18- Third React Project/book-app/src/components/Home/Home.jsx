import { Link } from 'react-router-dom'
import HomeStyle from './Home.module.css'

const highlights = [
    {
        title: 'Curated Collections',
        description: 'Discover handpicked books for every mood, from calm classics to thrilling page-turners.'
    },
    {
        title: 'Easy Discovery',
        description: 'Browse by genre, author, or favorite themes with a smooth and welcoming experience.'
    },
    {
        title: 'Reading Comfort',
        description: 'Enjoy a polished library experience built to make exploring books feel effortless.'
    }
]

export default function Home() {
    return (
        <main className={HomeStyle.page}>
            <section className={HomeStyle.hero}>
                <div className={HomeStyle.heroContent}>
                    <p className={HomeStyle.eyebrow}>Welcome to BookNest</p>
                    <h1>Find your next favorite story in a cozy digital library.</h1>
                    <p className={HomeStyle.description}>
                        Explore timeless classics, fresh releases, and thoughtful recommendations in one elegant space.
                    </p>

                    <div className={HomeStyle.actions}>
                        <Link to="/catalog" className={HomeStyle.primaryBtn}>Browse Catalog</Link>
                        <Link to="/about" className={HomeStyle.secondaryBtn}>Learn More</Link>
                    </div>

                    <div className={HomeStyle.stats}>
                        <div>
                            <strong>120+</strong>
                            <span>Books</span>
                        </div>
                        <div>
                            <strong>4</strong>
                            <span>Genres</span>
                        </div>
                        <div>
                            <strong>24/7</strong>
                            <span>Reading Vibes</span>
                        </div>
                    </div>
                </div>

                <div className={HomeStyle.heroCard}>
                    <span className={HomeStyle.cardBadge}>Editor&apos;s Pick</span>
                    <h3>The Midnight Library</h3>
                    <p>A warm and imaginative journey through the life you could have lived.</p>
                    <ul>
                        <li>Thoughtful and inspiring</li>
                        <li>Perfect for reflective readers</li>
                        <li>Beautifully curated for your next pick</li>
                    </ul>
                </div>
            </section>

            <section className={HomeStyle.features}>
                {highlights.map((item) => (
                    <article key={item.title} className={HomeStyle.featureCard}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </section>

            <section className={HomeStyle.midSection}>
                <div>
                    <p className={HomeStyle.eyebrow}>Why readers love it</p>
                    <h2>A welcoming space for every kind of reader.</h2>
                </div>
                <p>From timeless classics to modern favorites, BookNest brings together inspiring stories and effortless browsing in one calm place.</p>
            </section>

            <section className={HomeStyle.ctaSection}>
                <div>
                    <p className={HomeStyle.eyebrow}>Ready to read?</p>
                    <h2>Step into your next reading adventure.</h2>
                    <p>Browse the library, explore genres, and discover books that fit your mood perfectly.</p>
                </div>
                <Link to="/library" className={HomeStyle.primaryBtn}>Open Library</Link>
            </section>
        </main>
    )
}