import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center my-5">
      <img
        className="img-fluid rounded shadow"
        src="https://http.cat/404"
        alt="404 - Page not found"
        style={{ maxWidth: "400px" }}
      />
      <h2 className="mt-4">The page you're looking for doesn't exist</h2>
      <Link to="/" className="btn btn-primary mt-3">
        Back to Home
      </Link>
    </div>
  );
}