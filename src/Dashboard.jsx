import React from "react";
import profile from "./assets/img/profile.jpg";
import { CiCirclePlus } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import "./gauge.css";

const Gauge = ({ number, rotation, label, color }) => {
  return (
    <div className="gauge-container">
      <svg className="gauge-svg" viewBox="0 0 100 100">
       
        <circle
          className="gauge-arc"
          cx="50"
          cy="50"
          r="45"
          style={{ stroke: color }}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          className="gauge-number"
          transform={`rotate(${rotation} 50 50)`}
        >
          {number}
        </text>
      </svg>

      <div className="gauge-label" style={{ color }}>
        <p>{label}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <div className="first-section">
        <div className="user-active py-1 px-5 bg-primary text-white ">
          <h6 className="pt-1">Good Morning Vinoth!</h6>
          <p>Today is August 27,2018</p>
        </div>
        <div className="container-fluid mt-2 border">
          <div className="row p-4">
            <div className="col-md-12 col-lg-8 border">
              <div className="row pt-5 ps-4">
                <div className="col-md-12 col-lg-6">
                  <div className="row">
                    <div className="col-md-12 col-lg-6 ps-3">
                      <div>
                        <img src={profile} height={140} width={160} alt="" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 pt-5 ps-1">
                      <div>
                        <h6>Information</h6>
                        <span>
                          <strong>D.O.C</strong> : 04/12/1988
                        </span>
                        <br />
                        <span>
                          <strong>STATUS</strong> : Complete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="row pt-5 ">
                    <div className="col-md-12 col-lg-6">
                      <h5 className="py-1">₹ 2.5 Lakhs</h5>
                      <p className="text-success">Worth assets today</p>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <h5 className="py-1">₹ 2.5 Lakhs</h5>
                      <p className="text-danger">Worth assets today</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Gauge Integration */}
              <div className="row justify-content text-align-center pt-5">
                {/* First Gauge */}
                <div className="col-md-12 col-lg-2 d-flex flex-column ms-1">
                  <Gauge number={10} rotation={160} label="ASSETS"/>
                  <div id="AssetDetails">
                    <span>5 Active Assets</span>
                    <span>3 Inactive Assets</span>
                  </div>
                </div>

                {/* Second Gauge */}
                <div className="col-md-12 col-lg-2 d-flex flex-column ps-4 me-2">
                  <Gauge number={3} rotation={160} label="LIABILITIES" />
                  <div id="AssetDetails">
                    <span>5 Active Assets</span>
                    <span>3 Inactive Assets</span>
                  </div>
                </div>

                {/* Third Gauge */}
                <div className="col-md-12 col-lg-2 d-flex flex-column ps-4 me-2">
                  <Gauge number={15} rotation={160} label="BENEFICIARIES"  />
                  <div id="AssetDetails">
                    <span>5 Active Assets</span>
                    <span>3 Inactive Assets</span>
                  </div>
                </div>

                {/* Fourth Gauge */}
                <div className="col-md-12 col-lg-2 d-flex flex-column ps-4">
                  <Gauge number={3} rotation={160} label="SIGNATORIES"  />
                  <div id="AssetDetails">
                    <span>5 Active Assets</span>
                    <span>3 Inactive Assets</span>
                  </div>
                </div>

                {/* Fifth Gauge */}
                <div className="col-md-12 col-lg-2 d-flex flex-column ps-4">
  <Gauge number={1} rotation={160} label=" WILL" />
  <div id="AssetDetails" style={{ color: "black" }}>
    <span>5 Active Assets</span>
    <span>3 Inactive Assets</span>
  </div>
</div>

              </div>
            </div>
            {/* Signatory Will Section */}
            <div className="col-md-12 col-lg-4 p-2 border">
              <h6>Signatory Will</h6>
              {[1, 2, 3, 4].map((_, index) => (
                <div className="row p-2 shadow" key={index}>
                  <div className="col-md-12 col-lg-4">
                    <img src={profile} height={120} width={120} alt="" />
                  </div>
                  <div className="col-md-12 col-lg-8 pt-4">
                    <span>lima</span>
                    <br />
                    <span>witness</span>
                    <br />
                    <span>D.O.C : 28.4.2013</span>
                    <br />
                    <span className="mt-5">STATUS : Complete</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Menu Button */}
        <div className="container-fluid d-flex justify-content-between px-lg-5 menu-list">
          <div className="plus-icons mb-5 ms-4 d-flex align-items-center">
            <NavLink to={"/register"}>
              <div className="plus">
                <CiCirclePlus className="h1 p-1 text-white pt-2" />
              </div>
            </NavLink>
            <h6 className="ms-3"><strong>ADD NEW</strong></h6>
          </div>
          <div className="plus-icons p-1 d-flex align-items-center">
            <div className="plus">5</div>
            <h6 className="ms-3">
              <strong>VIEW INVITATIONS</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 