import React from "react";
import { useState } from "react";

export default function Profile() {
  // const

  const fetchUser =(e) =>{
    
  }

  const [foundAlert, setfoundAlert] = useState(false); // FOR USER FOUND alert
  const [notFoundAlert, setnotFoundAlert] = useState(false); // FOR USER NOT FOUND  alert
  const [userSearch ,setUserSearch] = useState("");
  const [userName, setUserName] = useState("");
  const name = " Gaurav Kesh Roushan";
  const callApi = `https://api.github.com/users/{userName}`;
  const userNamet = "GauravKesh";
  const imageUrl = "https://avatars.githubusercontent.com/u/98611148?v=4";
  const followers = "100";
  const following = " 122";
  const location = "Bengaluru";
  const lastActive = "Today ";
  const Joined = "2020";
  const fLink = "https://github.com/GauravKesh?tab=followers";
  const flLink = "https://github.com/GauravKesh?tab=followers";
  const repo = "17";
  const bio = "Student";
  const repoTittle = "repo";
  const strCnt = "2";
  const repo_link = "";
  const forks_count = 0;
  const language = "HTML";

  return (
    <>
      <div className="github-container   flex  flex-wrap  justify-center ">
        {/* HEADER SECTION OF THE PROJECT */}
        <div className="flex flex-row text-center  w-full mb-19 justify-center space-x-20">
          <h1 className="text-3xl text-10xl my-5 title-font  text-red text-pretty font-bold shadow-xl shadow-black rounded-xl ">
            Github Clone
          </h1>
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
                  <span>
                    Found the user!!!
                    <span className="text-grey-500"> Task Added</span>
                  </span>
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
            {/* USER SEARCH PROFILE */}
            <div className="github-profile-search">
              <div className="searchbar mt-5 ">
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
                  <div className="relative w-full shadow-xl shadow-black rounded-2xl">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-6 h-6 text-gray-800 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border Search border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Github User ..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={(e) => {
                      console.log(userSearch);
                      e.preventDefault();
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
            </div>
          </div>
        </div>
        {/* PROFILE-SEARCH RESULT */}

        <div className="container flex flex-wrap justify-center rounded mt-5 ">
          {/* USER DATA FETCHED */}

          <div className="github-detail  rounded flex  flex-wrap flex-row mt-3  h-96 justify-center md:flex-col sm:flex-col lg:justify-center md:justify-center  ">
            {/* PROFILE DATA */}

            <div className="github-user-data-side mt-2 rounded-xl border-2  border-red-700 h-full  lg:w-96 flex flex-wrap flex-col  justify-center profile-side shadow-xl shadow-black">
              <div className="data-side-inside mx-3">
                <div className="profile-img flex justify-center mb-2">
                  <div className="avatar ">
                    <div className="w-24 shadow-xl shadow-white rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={imageUrl} />
                    </div>
                  </div>
                </div>
                <div className="name flex flex-wrap flex-col">
                  <div className="full-name">
                    <p className="FullName font-mono text-pretty text-2xl text-white">
                      {name}
                    </p>
                  </div>
                  <div className="user-name">
                    <p className="username" style={{ color: "848d97" }}>
                      {userNamet}
                    </p>
                  </div>
                </div>
                <div className="bio font-bold my-1">{bio}</div>
                <div className="peopleInteraction flex flex-wrap space-x-2 ">
                  <div className="icon-people my-1">
                    <svg
                      text="muted"
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-people"
                    >
                      <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                    </svg>
                  </div>
                  <div className="followers flex">
                    <a href={fLink} className="flex flex-wrap space-x-1">
                      <div className="fnum text-white">{followers}</div>
                      <div className="f ">followers</div>
                    </a>
                  </div>
                  <div className="flex ">
                    <a href={flLink} className="flex flex-wrap space-x-1">
                      <div className="fnum text-white">{following}</div>
                      <div className="f ">following</div>
                    </a>
                  </div>
                </div>
                <div className="location flex flex-wrap space-x-1">
                  <svg
                    class="octicon octicon-location my-1"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
                  </svg>
                  <span>Bengaluru</span>
                </div>
                <div className="repo flex flex-wrap space-x-1">
                  <div class="repo-icon my-1 ">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-repo UnderlineNav-octicon"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                  </div>
                  <div className="repo-count">{repo}</div>
                </div>
                <div className="follow-btn">
                  <div className="follow">
                    <button
                      type="button"
                      class="px-3 py-2 pt-2 my-2 text-xs font-medium text-center text-white bg-black-700 rounded-lg hover:bg-grey-800 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-grey-600 dark:hover:bg-gray-700"
                    >
                      <div className="repoLink">
                        <div className="linkicon flex flex-wrap flex-col">
                          <a
                            href={repo_link}
                            className="flex flex-wrap space-x-1"
                          >
                            <div className="follow-ic">
                              <span>Follow</span>
                            </div>
                            <svg
                              class="w-3 h-3 text-gray-800 dark:text-white my-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="5"
                              height="5"
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
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PROFILE DATA END HERE */}

            {/* REPO DATA */}

            <div className="user-repo-details border-4 rounded border-red-700  max-w-96  m-2  lg:min-w-96   ">
              <div className="all-repo repocustombg rounded  md:h-96 h-96 max-w-96 overflow-y-auto overflow-x-auto  md:overflow-auto  shadow-xl shadow-black flex flex-wrap justify-center p-2  ">
                {/* REPO ELEMENT  start */}

                <div className="repo w-64 repoElementbg shadow-md shadow-slate-200 bg-black h-36 my-2 mx-2 px-2 justify-between flex flex-wrap flex-col  rounded border-red-600">
                  <div className="repobody ">
                    <div className="repoName">
                      <span>
                        <h1 className="text-2xl  text-pretty font-mono">
                          {repoTittle}
                        </h1>
                      </span>
                    </div>
                  </div>
                  <div className="language ">
                    <div className="language-used">
                      <span>
                        <p className="font-bold">
                          Language:
                          <span className="font-normal">{language}</span>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="repo-content flex flex-wrap space-x-12">
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
                          <div className="str-cnt">{strCnt}</div>
                        </span>
                      </div>
                    </div>
                    <div className="repoLink">
                      <div className="linkicon">
                        <a href={repo_link}>
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
                            <span>{forks_count}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="repoSize"></div>
                  </div>
                </div>
                <div className="repo w-64 repoElementbg shadow-md shadow-slate-200 bg-black h-36 my-2 mx-2 px-2 justify-between flex flex-wrap flex-col  rounded border-red-600">
                  <div className="repobody ">
                    <div className="repoName">
                      <span>
                        <h1 className="text-2xl  text-pretty font-mono">
                          {repoTittle}
                        </h1>
                      </span>
                    </div>
                  </div>
                  <div className="language ">
                    <div className="language-used">
                      <span>
                        <p className="font-bold">
                          Language:
                          <span className="font-normal">{language}</span>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="repo-content flex flex-wrap space-x-12">
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
                          <div className="str-cnt">{strCnt}</div>
                        </span>
                      </div>
                    </div>
                    <div className="repoLink">
                      <div className="linkicon">
                        <a href={repo_link}>
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
                            <span>{forks_count}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="repoSize"></div>
                  </div>
                </div>
                <div className="repo w-64 repoElementbg shadow-md shadow-slate-200 bg-black h-36 my-2 mx-2 px-2 justify-between flex flex-wrap flex-col  rounded border-red-600">
                  <div className="repobody ">
                    <div className="repoName">
                      <span>
                        <h1 className="text-2xl  text-pretty font-mono">
                          {repoTittle}
                        </h1>
                      </span>
                    </div>
                  </div>
                  <div className="language ">
                    <div className="language-used">
                      <span>
                        <p className="font-bold">
                          Language:
                          <span className="font-normal">{language}</span>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="repo-content flex flex-wrap space-x-12">
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
                          <div className="str-cnt">{strCnt}</div>
                        </span>
                      </div>
                    </div>
                    <div className="repoLink">
                      <div className="linkicon">
                        <a href={repo_link}>
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
                            <span>{forks_count}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="repoSize"></div>
                  </div>
                </div>
                <div className="repo w-64 repoElementbg shadow-md shadow-slate-200 bg-black h-36 my-2 mx-2 px-2 justify-between flex flex-wrap flex-col  rounded border-red-600">
                  <div className="repobody ">
                    <div className="repoName">
                      <span>
                        <h1 className="text-2xl  text-pretty font-mono">
                          {repoTittle}
                        </h1>
                      </span>
                    </div>
                  </div>
                  <div className="language ">
                    <div className="language-used">
                      <span>
                        <p className="font-bold">
                          Language:
                          <span className="font-normal">{language}</span>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="repo-content flex flex-wrap space-x-12">
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
                          <div className="str-cnt">{strCnt}</div>
                        </span>
                      </div>
                    </div>
                    <div className="repoLink">
                      <div className="linkicon">
                        <a href={repo_link}>
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
                            <span>{forks_count}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="repoSize"></div>
                  </div>
                </div>
                <div className="repo w-64 repoElementbg shadow-md shadow-slate-200 bg-black h-36 my-2 mx-2 px-2 justify-between flex flex-wrap flex-col  rounded border-red-600">
                  <div className="repobody ">
                    <div className="repoName">
                      <span>
                        <h1 className="text-2xl  text-pretty font-mono">
                          {repoTittle}
                        </h1>
                      </span>
                    </div>
                  </div>
                  <div className="language ">
                    <div className="language-used">
                      <span>
                        <p className="font-bold">
                          Language:
                          <span className="font-normal">{language}</span>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="repo-content flex flex-wrap space-x-12">
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
                          <div className="str-cnt">{strCnt}</div>
                        </span>
                      </div>
                    </div>
                    <div className="repoLink">
                      <div className="linkicon">
                        <a href={repo_link}>
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
                            <span>{forks_count}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="repoSize"></div>
                  </div>
                </div>
                <div className="repo w-64 repoElementbg shadow-md shadow-slate-200 bg-black h-36 my-2 mx-2 px-2 justify-between flex flex-wrap flex-col  rounded border-red-600">
                  <div className="repobody ">
                    <div className="repoName">
                      <span>
                        <h1 className="text-2xl  text-pretty font-mono">
                          {repoTittle}
                        </h1>
                      </span>
                    </div>
                  </div>
                  <div className="language ">
                    <div className="language-used">
                      <span>
                        <p className="font-bold">
                          Language:
                          <span className="font-normal">{language}</span>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="repo-content flex flex-wrap space-x-12">
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
                          <div className="str-cnt">{strCnt}</div>
                        </span>
                      </div>
                    </div>
                    <div className="repoLink">
                      <div className="linkicon">
                        <a href={repo_link}>
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
                            <span>{forks_count}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="repoSize"></div>
                  </div>
                </div>
                <div className="repo w-64 repoElementbg shadow-md shadow-slate-200 bg-black h-36 my-2 mx-2 px-2 justify-between flex flex-wrap flex-col  rounded border-red-600">
                  <div className="repobody ">
                    <div className="repoName">
                      <span>
                        <h1 className="text-2xl  text-pretty font-mono">
                          {repoTittle}
                        </h1>
                      </span>
                    </div>
                  </div>
                  <div className="language ">
                    <div className="language-used">
                      <span>
                        <p className="font-bold">
                          Language:
                          <span className="font-normal">{language}</span>
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="repo-content flex flex-wrap space-x-12">
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
                          <div className="str-cnt">{strCnt}</div>
                        </span>
                      </div>
                    </div>
                    <div className="repoLink">
                      <div className="linkicon">
                        <a href={repo_link}>
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
                            <span>{forks_count}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="repoSize"></div>
                  </div>
                </div>


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
