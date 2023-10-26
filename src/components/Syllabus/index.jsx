import React from "react";
import "./style.css";
import ProgressBar from "@ramonak/react-progress-bar";

const Syllabus = () => {
  return (
    <div className="sylContainer">
      <p className="compG">Syllabus wise Analysis</p>

      <div className="detCon">
        <p className="tag">HTML Tools, Forms, History</p>
        <div className="pbCon" >
          <ProgressBar
          animateOnRender={true}
            completed={80}
            bgColor="#438AF6"
            customLabel=" "
            height="10px"
            width="197px"
          />
         
          <span className="percent" style={{ color: "#438AF6" }}>
            80%
          </span>
        </div>
      </div>

      <div className="detCon">
        <p className="tag">Tags & Refrences in HTML</p>
        <div className="pbCon">
          <ProgressBar
          animateOnRender={true}
            completed={60}
            bgColor="#FF9142"
            customLabel=" "
            height="10px"
            width="197px"
          />
         
          <span className="percent" style={{ color: "#FF9142" }}>
            60%
          </span>
        </div>
      </div>

      <div className="detCon">
        <p className="tag">Tables & CSS Basics</p>
        <div className="pbCon">
          <ProgressBar
          animateOnRender={true}
            completed={24}
            bgColor="#FB5E5E"
            customLabel=" "
            height="10px"
            width="197px"
          />
         
          <span className="percent" style={{ color: "#FB5E5E" }}>
            24%
          </span>
        </div>
      </div>

      <div className="detCon">
        <p className="tag">Tables & CSS Basics</p>
        <div className="pbCon">
          <ProgressBar
          animateOnRender={true}
            completed={96}
            bgColor="#2EC971"
            customLabel=" "
            height="10px"
            width="197px"
          />
         
          <span className="percent" style={{ color: "#2EC971" }}>
            96%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
