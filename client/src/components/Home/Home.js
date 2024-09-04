import { Outlet } from "react-router-dom";
import bgvideo from "../../assets/bgvideo.mp4";
import "./Home.css";

function Home() {
  return (
    <div className="home-div">
      <video autoPlay muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
