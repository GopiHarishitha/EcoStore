import { useSelector } from "react-redux";
import bgvideo from "../../assets/bgvideo.mp4";
import "./Home.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { loggedIn } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/user-profile");
    }
  }, [loggedIn, navigate]);

  return (
    <div className="home-div">
      <video autoPlay muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
