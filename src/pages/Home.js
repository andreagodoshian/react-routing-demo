import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Hej from the Home Page!</h1>
      <p>
        Go to: <Link to="/products">the list of products.</Link>
      </p>
      {/* 
      <p>
        Go to: <a href="/products">list of products</a>
      </p> 
      ^^^^^ this creates an unnecessary reload
      */}
    </>
  );
}
export default HomePage;
