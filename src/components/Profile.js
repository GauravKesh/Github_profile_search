/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useState ,useEffect} from "react";
import { Fade ,Zoom} from "react-awesome-reveal";

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


  // search user data
  // const searchUrl = `https://api.github.com/users/${userSearch}`;
  // const fetchUser = async () => {
  //   await fetch(searchUrl)
  //     .then((response) => response.json())
  //     .then(function (data) {
  //       console.log(data);
  //       if (data.message === "Not Found") {
  //         setNotFoundAlert(true);
  //         alertfn();
  //         return false;
  //       } else {
  //         setFoundAlert(true);
  //         alertfn();
  //         setImageUrl(data.avatar_url);
  //         setName(data.name);
  //         setUserName(data.login);
  //         setBio(data.bio);
  //         setFollowers(data.followers);
  //         setFLink(`https://github.com/${data.login}?tab=followers`);
  //         setFollowing(data.following);
  //         setFlLink(`https://github.com/${data.login}?tab=following`);
  //         setLocation(data.location);
  //         setRepo(data.public_repos);
  //         setRepoLink(`https://github.com/${data.login}?tab=repositories`);
  //         setProfileURL(data.html_url);
  //         console.log("USER DATA FOUND");
  //         fetchRepo();
  //       }
  //     });
  // };
  // // fetch  user repo data
  // const repoUrl = `https://api.github.com/users/${userSearch}/repos`;
  // const fetchRepo = async () => {
  //   await fetch(repoUrl)
  //     .then((response) => response.json())
  //     .then(function (repoData) {
  //       console.log(repoData);
  //       if (repoData.message === "not found") {
  //         alert("USER DOESN'T HAVE ANY REPO");
  //       } else {
  //         console.log("USER HAVE REPO");
  //         const arr = Object.values(repoData);
  //         setrepoArrayDataK(arr);
  //         console.log(repoArrayDataK);
  //       }
  //     });
  // };


  return (
    <>
      <div className="github-container bg-grey-900  flex  flex-wrap  justify-center ">
        {/* HEADER SECTION OF THE PROJECT */}
        <div className="flex flex-row text-center  w-full mb-19 justify-center space-x-20">
          {/* <h1 className="github-title my-5 text-3xl lg:te title-font  text-black dark:text-gray-400 text-pretty font-bold   rounded-xl  ">
            Github Clone
          </h1> */}
        </div>
        {/* HEADER SECTION OF THE PROJECT ENDS*/}
        <div className="github-body  pt-0 pr-2 pl-3 lg:w-1/2 md:w-full justify-center flex flex-row md:flex-row flex-wrap   ">
          <div className="form-section container ">
            {/* TO GIVE USER ALERT ABOUT THE PROFILE SEARCH */}
            <div className="alert-c h-5 mt-2">
              {foundAlert && (
                <div role="alert" className="badge badge-inf0 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Found the user!!!</span>
                </div>
              )}
              {notFoundAlert && (
                <div role="alert" className="badge badge-success gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Oops No user found !!!</span>
                </div>
              )}
            </div>
            <div className="container flex flex-wrap justify-center rounded mt-5 ">
              {/* USER DATA FETCHED  */}

              <div className="github-detail  rounded flex  flex-wrap flex-row   h-96 justify-center md:flex-col sm:flex-col lg:justify-center md:justify-center  ">
                {/* REPO DATA */}

                <div className="user-repo-details  rounded-xl flex justify-center mx-5  border-gray-300 dark:border-neutral    ">
                  <div className="all-repo  rounded     md:overflow-auto  shadow-xl shadow-black flex flex-wrap justify-center  ">
                    {/* REPO ELEMENT  start */}
                    {showRepo &&
                      repoArrayDataK.map((item, index) => {
                        return (
                          <Zoom cascade>
                            <div
                              className="repo w-64  shadow-md shadow-black overflow-hidden h-36 my-2 mx-2 px-2 justify-between flex flex-wrap flex-col  rounded border-gray-300 dark:border-neutral"
                              key={index}
                            >
                              <div className="repobody mt-2">
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
                              <div className="repo-content flex flex-wrap space-x-12">
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
                                      <div className="str-cnt">
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
            {/* USER SEARCH PROFILE */}
            {/*  <div className="github-profile-search">
              <div className="searchbar mt-5 " id="searchBar">
                <form
                  className="flex items-center max-w-sm mx-auto "
                  value={userSearch}
                  onChange={(e) => {
                    setUserSearch(e.target.value);
                  }}
                >
                  <label for="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full shadow-md shadow-black rounded-2xl">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549a5.51 5.51 0 0 1 3.034 4.084a.75.75 0 1 1-1.482.235a4 4 0 0 0-7.9 0a.75.75 0 0 1-1.482-.236A5.5 5.5 0 0 1 3.102 8.05A3.5 3.5 0 0 1 2 5.5M11 4a3.001 3.001 0 0 1 2.22 5.018a5 5 0 0 1 2.56 3.012a.749.749 0 0 1-.885.954a.75.75 0 0 1-.549-.514a3.51 3.51 0 0 0-2.522-2.372a.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5A.75.75 0 0 1 11 4m-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border Search border-gray-300 text-gray-900 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 placeholder-slate-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Github User ..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-instagram-blue dark:bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={(e) => {
                      console.log(userSearch);
                      e.preventDefault();
                      fetchUser();
                      document.getElementById("simple-search").value = ""; // clear the input
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
        {/* PROFILE-SEARCH RESULT */}
      </div>
    </>
  );
}
