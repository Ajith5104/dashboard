import { Link } from "react-router-dom";
import profile from "./assets/img/profile.jpg";
import { IoIosArrowBack } from "react-icons/io";

import { FiFileText } from "react-icons/fi";
import { TfiWallet } from "react-icons/tfi";
import { FiLink } from "react-icons/fi";
import { TiPen } from "react-icons/ti";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
const Register = () => {
  return (
    <div>
      <div className="second-section container-fluid">
        <div className="row p-1">
          <div
            className="col-md-12 col-lg-3  d-flex justify-content-center"
            id="sidebar"
          >
            <div className="profile-item-style text-white">
              <div className="profile-section p-5">
                <div className="profile-img">
                  <img
                    src={profile}
                    height={120}
                    width={120}
                    alt=""
                    className="rounded"
                  />
                </div>
                <div className="profile-details  pt-3">
                  <p>
                    <strong>D.O.C</strong> : 28.04.2013
                  </p>
                  <p>
                    <strong>STATUS</strong> : Complete
                  </p>
                </div>
              </div>
              <Link to={"/dashboard"}>
                <h5 className="text-white">
                  <IoIosArrowBack /> Back Home
                </h5>
              </Link>
            </div>
          </div>
          <div className="col-md-12 col-lg-9 border">
            <div className="row p-1">
              <div className="col-md-12 col-lg-2 border" id="Addcolor">
                <div className="top-box d-flex justify-content-between p-2">
                  <div className="icons">
                    <AiOutlineUserAdd className="h2 " />
                  </div>
                  <div className="content text-white">
                    <strong>Add</strong>
                    <br />
                    <span>Beneficiaries</span>
                  </div>

                  <br />
                  <div className="count-1 pe-4">
                    <span className="content text-white">4</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-2 border ">
                <div className="top-box d-flex justify-content-center align-items-center p-2">
                  <div className="icons">
                    <IoHomeOutline className="h2" />
                  </div>
                  <div className="content ms-3">
                    <strong>Add</strong>
                    <br />
                    <span>Asset</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-2 border">
                <div className="top-box d-flex justify-content-center align-items-center p-2">
                  <div className="icons">
                    <TfiWallet className="h2" />
                  </div>
                  <div className="content ms-3">
                    <strong>Add</strong>
                    <br />
                    <span fw-normal>Liability</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-2 border">
                <div className="top-box d-flex justify-content-center align-items-center p-2">
                  <div className="icons">
                    <FiLink className="h2" />
                  </div>
                  <div className="content ms-3">
                    <strong>Add</strong>
                    <br />
                    <span>Links</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-2 border">
                <div className="top-box d-flex justify-content-center align-items-center p-2">
                  <div className="icons">
                    <TiPen className="h2" />
                  </div>
                  <div className="content ms-3">
                    <strong>Add</strong>
                    <br />
                    <span >Signatories</span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-2 border">
                <div className="top-box d-flex justify-content-center align-items-center p-2">
                  <div className="icons">
                    <FiFileText className="h2" />
                  </div>
                  <div className="content ms-3">
                    <strong>0</strong>
                    <br />
                    <span >Generation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="table">
                  <div className="d-flex justify-content-between py-2">
                    <span>List Of Data</span>
                    <div>
                      <span className="text-primary">Edit</span>
                      <span className="text-primary">Delete</span>
                    </div>
                  </div>
                  <table className="w-100">
                    <thead>
                      <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Relationship</th>
                        <th>Date Of Birth</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            className="h4"
                            name=""
                            id=""
                            checked
                          />
                        </td>
                        <td>vaishnavi</td>
                        <td>Sister</td>
                        <td>04/10/1988</td>
                        <td>
                          <div className="d-flex">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckDefault"
                              ></label>
                            </div>
                            <span className="ms-2">Ative</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            className="h4"
                            name=""
                            id=""
                            checked
                          />
                        </td>
                        <td>vaishnavi</td>
                        <td>Sister</td>
                        <td>04/10/1988</td>
                        <td>
                          <div className="d-flex">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckChecked"
                              ></label>
                            </div>
                            <span className="ms-2">Active</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" className="h4" name="" id="" />
                        </td>
                        <td>vaishnavi</td>
                        <td>Sister</td>
                        <td>04/10/1988</td>
                        <td>
                          <div className="d-flex">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckDefault"
                              ></label>
                            </div>
                            <span className="ms-2">Inactive</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            className="h4"
                            name=""
                            id=""
                            checked
                          />
                        </td>
                        <td>vaishnavi</td>
                        <td>Sister</td>
                        <td>04/10/1988</td>
                        <td>
                          <div className="d-flex">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="flexSwitchCheckChecked"
                              ></label>
                            </div>
                            <span className="ms-2">Active</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>  
{/* --------------------------Form ------------------*/}
              <div className="col-md-12 col-lg-4" style={{backgroundColor:"#EDF1F2"}}>
                <h6 className="text-underline text-center py-2">
                  Add New Beneficiary
                </h6>
                <label className="py-1" htmlFor="">
                  Personal information
                </label>
                <div className="form-right">
                  <input
                    type="text"
                    className="user-data d-block w-100"
                    placeholder="Title*"
                  />
                </div>
                <div className="form-right d-flex">
                  <input
                    type="text"
                    className="user-data d-block w-100"
                    placeholder="First Name*"
                  />
                  <input
                    type="text"
                    className="user-data d-block w-100"
                    placeholder="Middle Name"
                  />
                  <input
                    type="text"
                    className="user-data d-block w-100"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-right">
                  <select name="" className="w-100" id="">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-right">
                  <input
                    type="text"
                    className="user-data d-block w-100"
                    placeholder="Date Of Birth*"
                  />
                </div>
                <div className="form-right">
                  <input
                    type="text"
                    className="user-data d-block w-100"
                    placeholder="Religion*"
                  />
                </div>
                <div className="form-right">
                  <input
                    type="text"
                    className="user-data d-block w-100"
                    placeholder="Father Name*"
                  />
                </div>
                <div className="form-right">
                  <input
                    type="text"
                    className="user-data d-block w-100"
                    placeholder="Motehr Name*"
                  />
                </div>
                <div className="form py-3 d-flex justify-content-evenly">
                  <button className="py-1 px-4">CANCEL</button>
                  <button className="py-1 px-4 text-white bg-primary">
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
