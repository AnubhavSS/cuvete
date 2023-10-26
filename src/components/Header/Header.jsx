import React from "react";
import "./style.css";
import cuvette from "../../assets/cuvette.png";
import man from "../../assets/man.png";

const Header = () => {
  return (
    <div className="container">
      <img src={cuvette} alt="logo" className="logo" />
   
   <div className="user">
   <img src={man} alt="Avatar" className="avatar"/>
<p>User</p>
   </div>

    </div>
  );
};

export default Header;
