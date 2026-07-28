import HomeStyle from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={`text-center py-5 ${HomeStyle.hero}`}>
      <h1>Welcome to the Project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellendus animi quas suscipit distinctio praesentium sapiente ullam maiores modi, at nam earum voluptatibus illum impedit ab quaerat odio! Ab, enim?
      </p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/gallery" className="btn btn-outline-primary">
          Try useEffect (Gallery)
        </Link>
        <Link to="/store" className="btn btn-outline-success">
          Try useState (Store)
        </Link>
      </div>
    </div>
  );
}