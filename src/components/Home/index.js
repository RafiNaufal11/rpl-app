import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Rafi' Muhammad Naufal</p>
          <p>Electrical Engineering Student</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/71824011.jpeg`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;