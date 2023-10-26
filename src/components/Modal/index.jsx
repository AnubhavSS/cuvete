import React, { useState } from "react";
import "./style.css";
import html from "../../assets/html-5.png";

const Modal = ({ closeModal, getInfo, stats }) => {
  const [info, setinfo] = useState({
    rank: stats.rank,
    percentile: stats.percentile,
    score: stats.score,
  });

  const handleFieldChange = (e) => {
    e.preventDefault();
    const data = {
      ...info,
      [e.target.id]: e.target.value,
    };
    setinfo(data);
  };

  const handleClick = () => {
    getInfo(info);
    closeModal();
  };

  return (
    <div>
      <div className="modal-wrapper" onClick={closeModal} />
      <div className="modal-container">
        {/* Top Part  Scores*/}
        <div className="updTop">
          <p className="updtS">Update Scores</p>
          <img src={html} style={{ height: "48px", width: "46px" }} />
        </div>
        <div className="fade-effect1" />

        {/* Input Section */}
        <div className="mainCont">
          <div className="inpCont">
            <p className="bKey">
              <span className="bullet">1</span>Update your{" "}
              <span style={{ fontWeight: "700" }}>rank</span>
            </p>
            <input
              className="inp"
              id="rank"
              onChange={handleFieldChange}
              value={info.rank}
            />
          </div>

          <div className="inpCont">
            <p className="bKey">
              <span className="bullet">2</span>Update your{" "}
              <span style={{ fontWeight: "700" }}>percentile</span>
            </p>
            <input
              value={info.percentile}
              className="inp"
              id="percentile"
              onChange={handleFieldChange}
            />
          </div>

          <div className="inpCont">
            <p className="bKey">
              <span className="bullet">3</span>Update your{" "}
              <span style={{ fontWeight: "700" }}>
                curent score (out of 15)
              </span>
            </p>
            <input
              value={info.score}
              className="inp"
              id="score"
              onChange={handleFieldChange}
            />
          </div>

          <div className="fade-effect1" />
          <div className="cancel">
            <button className="cncBtn" onClick={closeModal}>
              Cancel
            </button>
            <button className="upd" onClick={handleClick}>
              Save &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
