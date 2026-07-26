import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <Link to="/">Go Back Home</Link>
      </div>
    </div>
  );
}

export default NotFound;