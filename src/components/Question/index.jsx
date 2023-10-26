import React from "react";
import "./style.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider";
const Question = ({ques}) => {

  const ans=parseInt(ques)/15 * 100;

  return (
    <div className="quesCont">
      <p className="compG">
        Question Analysis
        <span
          className="percent"
          style={{ color: "#438AF6", marginLeft: "80px" }}
        >
          {ques} / 15
        </span>
      </p>
      <p className="desc detQues">
        <span>You scored {ques} question correct out of 15.</span>However it still
        needs some improvements
      </p>

      <div className="circProg">
        <ProgressProvider valueStart={0} valueEnd={ans}>
          {(value) => (
            <CircularProgressbar
              value={value}
              text="🎯"
              strokeWidth={16}
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `#438AF6`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  // Rotate the path
                },
              }}
            />
          )}
        </ProgressProvider>
      </div>
    </div>
  );
};

export default Question;
