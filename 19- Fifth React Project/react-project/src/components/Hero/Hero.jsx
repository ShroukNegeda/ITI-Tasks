import HeroImage from '../../assets/logo.svg'
import HeroStyle from './Hero.module.css'

export default function Hero() {
    return (
        <div className={`container text-center ${HeroStyle.hero}`}>
            <span className={HeroStyle.badge}>// welcome</span>
            <h1>Hero</h1>
            <img src={HeroImage} alt="Hero Image"/>
        </div>
    )
}