import { Link } from 'react-router-dom'
import NotFoundStyle from './NotFound.module.css'

export default function NotFound() {
    return (
    <>
    <div className={NotFoundStyle.wrapper}>
        <img className="img-fluid" src="https://http.cat/404" alt="404" />
        <h2 className="mt-3">The Page Not Found</h2>
        <p className={NotFoundStyle.code}>error: route not found</p>
        <Link className="btn btn-primary mt-3" to="/">Back To Main</Link>
    </div>
    </>
    )
}