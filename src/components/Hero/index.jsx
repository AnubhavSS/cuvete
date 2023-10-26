import React,{useState} from "react";
import "./style.css";
import icon from "../../assets/html-5.png";
import Stats from "../Stats";
import Comparison from "../Comparison";
import Syllabus from "../Syllabus";
import Question from "../Question";
import Modal from "../Modal";
const Hero = () => {

  const [stats, setstats] = useState({rank:'12890',percentile:'37',score:'07'})
  const [showModal, setshowModal] = useState(false)
  const closeModal=()=>{
    setshowModal(false)
  }

  const getInfo=(val)=>{
    setstats(val)
  }

  return (
    <div>
      <p className="skill">Skill Test</p>
      {/* HTML Div */}
      <div className="posi">
        <div>
      <div className="hml">
        <div className="subComp">
          <img
            src={icon}
            alt="hmt5-icon"
            style={{ height: "50px", width: "45px" }}
          />
          <div>
            <p className="heading">HyperText Markup Language</p>
            <p className="text">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>

        <button className="upd" onClick={()=>setshowModal(true)}>Update</button>
        {showModal && <Modal stats={stats} closeModal={closeModal} getInfo={getInfo}/>}
      </div>
      <Stats stats={stats}/>
      <Comparison grph={stats.percentile}/>
      </div>
      <div>
      <Syllabus/>
      <Question ques={stats.score}/>
      </div>
      </div>
    </div>
  );
};

export default Hero;
