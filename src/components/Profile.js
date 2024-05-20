/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useState ,useEffect} from "react";
import { Fade ,Zoom} from "react-awesome-reveal";
import Footer from "./Footer";

export default function Profile(props) {
  
  const [foundAlert, setFoundAlert] = useState(false); // For user found alert
  const [notFoundAlert, setNotFoundAlert] = useState(false); // For user not found alert
  const [repoArrayDataK, setrepoArrayDataK] = useState([]); // Storing repository data of user
  const [showRepo, setShowRepo] = useState(true); // To show repo data

  // alert function timeout
  const alertfn = (e) => {
    setTimeout(() => {
      setFoundAlert(false);
      setNotFoundAlert(false);
    }, 800);
  };
  // to set data received from parent(navbar js ) to child(profile.js) components
   useEffect(() => {
     setrepoArrayDataK(props.data);
   }, [props]);


  return (
    <>
      <div className="github-container bg-grey-900  flex  flex-wrap  justify-center  ">
        {/* HEADER SECTION OF THE PROJECT */}
        <div className="flex flex-row text-center  w-full  justify-center space-x-20">
          <h1 className="github-title my-5 text-3xl lg:te title-font  text-black dark:text-gray-400 text-pretty font-bold   rounded-xl  ">
            Repositories
          </h1>
        </div>
        {/* HEADER SECTION OF THE PROJECT ENDS*/}
        <div className="github-body  pt-0 pr-2 pl-3 lg:w-1/2 md:w-full justify-center flex flex-row md:flex-row flex-wrap   ">
          <div className="form-section container ">
            {/* TO GIVE USER ALERT ABOUT THE PROFILE SEARCH */}
           
          </div>
        </div>
        <div className="container flex flex-wrap justify-center rounded mt-5 ">
          {/* USER DATA FETCHED  */}
          <div className="github-detail  rounded flex  flex-wrap flex-row  m-8 h-96 justify-center md:flex-col sm:flex-col lg:justify-center md:justify-center   ">
            {/* REPO DATA */}

            <div className="user-repo-details   rounded-xl flex justify-center mx-5  border-gray-300 dark:border-neutral   ">
              <div className="all-repo  rounded      shadow-black flex flex-wrap justify-center mb-8 ">
                {/* REPO ELEMENT  start */}
                {showRepo &&
                  repoArrayDataK.map((item, index) => {
                    return (
                      <Zoom cascade>
                        <div
                          className="repo w-64  shadow-lg shadow-black overflow-hidden h-36 my-2 mx-2 px-2 mb-3 justify-between flex flex-wrap flex-col  rounded border-gray-300 dark:border-neutral"
                          key={index}
                        >
                          <div className="repobody mt-2 ">
                            {/* REPO NAME */}
                            <div className="repoName">
                              <span>
                                <h1
                                  className="text-xl text-wrap font-bold font-mono text-instagram-blue"
                                  style={{ wordWrap: "break-word" }}
                                >
                                  {item.name}
                                </h1>
                              </span>
                            </div>
                          </div>
                          {/* LANGUAGE USED */}
                          <div className="language ">
                            <div className="language-used">
                              <span>
                                <p className="font-bold font-mono">
                                  Language:
                                  <span className="font-normal">
                                    {item.language}
                                  </span>
                                </p>
                              </span>
                            </div>
                          </div>
                          {/* LANGUAGE USED ENDS */}
                          <div className="repo-content flex flex-wrap space-x-12 mb-2 m-1">
                            {/* STARED DETAILS  */}
                            <div className="stars">
                              <div className="icon">
                                <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                  <svg
                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-width="2"
                                      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                                    />
                                  </svg>
                                  <div className="str-cnt ml-1 ">
                                    {item.watchers_count}
                                  </div>
                                </span>
                              </div>
                            </div>
                            {/* REPO URL */}
                            <div className="repoLink">
                              <div className="linkicon">
                                <a href={item.html_url} target="_blank">
                                  <svg
                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            {/* FORK DETAILS */}
                            <div className="fork_count">
                              <div className="icon">
                                <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                                  <svg
                                    class="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                    />
                                  </svg>
                                  <div className="count_fork">
                                    <span>{item.forks_count}</span>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div className="repoSize"></div>
                          </div>
                        </div>
                      </Zoom>
                    );
                  })}

                {/* REPO ELEMENT ENDS HERE */}
              </div>
            </div>

            {/* REPO DATA ENDS HERE */}
          </div>
        </div>
      </div>

    </>
  );
}
