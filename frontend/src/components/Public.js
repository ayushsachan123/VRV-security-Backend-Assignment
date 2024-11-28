import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header className="public_header">
        <h1>TechNotes</h1>
        <Link
          to="/login"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          Login
        </Link>
      </header>
      <main className="public__main">
        Welcome To Notes Application!
      </main>
      <footer>
        <p style={{ textAlign: "center" }}>&copy; 2024 - Ayush Sachan</p>
      </footer>
    </section>
  );
  return content;
};
export default Public;
