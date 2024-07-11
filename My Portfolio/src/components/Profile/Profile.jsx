import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import profileImage from "../../assets/profileimg.png"; // Replace with the correct path
import "./Profile.css";

export default function Profile() {
  const { darkMode } = useContext(MyContext);
  return (
    <main className={darkMode ? "dark-mode" : ""}>
      <div className="profile-container">
        <h1 className="profile-title">Profile</h1>
        <div className="profile-content">
          <div className="basic-info">
            <h2>Basic Information</h2>
            <p>
              <strong>Doğum tarihi</strong>
              <span>24.03.1996</span>
            </p>
            <p>
              <strong>İkamet Şehri</strong>
              <span>Ankara</span>
            </p>
            <p>
              <strong>Eğitim Durumu</strong>
              <span> Hacettepe Ünv. Biyoloji Lisans, 2016</span>
            </p>
            <p>
              <strong>Tercih Ettiği Rol</strong>
              <span>Frontend, UI</span>
            </p>
          </div>
          <img src={profileImage} alt="Profile" />
          <div className="about-me">
            <h2>About Me</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, adit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
