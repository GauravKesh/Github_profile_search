/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useRef, useState, useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import img from "../image/myLogo.png";
import Profile from "./Profile";
import Footer from "./Footer";

export default function Navbar() {
  const [foundAlert, setFoundAlert] = useState(false); // For user found alert
  const [notFoundAlert, setNotFoundAlert] = useState(false); // For user not found alert.
  const [userNameEnterAlert, setUserNameEnterAlert] = useState(false); // to alert user if trying to search when it's empty
  const [userSearch, setUserSearch] = useState("");
  const [name, setName] = useState("github"); // Full name of the user
  const [userName, setUserName] = useState("github"); // User name
  const [imageUrl, setImageUrl] = useState(
    "https://avatars.githubusercontent.com/u/9919?s=200&v=4"
  ); // Profile URL
  const [followers, setFollowers] = useState("0"); // Number of followers
  const [following, setFollowing] = useState("0"); // Number of following
  const [location, setLocation] = useState("unknown"); // User location
  const [fLink, setFLink] = useState(""); // Followers link of user
  const [flLink, setFlLink] = useState(""); // Following link of user
  const [profileURL, setProfileURL] = useState(""); // User GitHub link
  const [repo, setRepo] = useState("0"); // Number of public repositories
  const [bio, setBio] = useState(""); // Bio of the user
  const [repo_link, setRepoLink] = useState(""); // Repository link of user
  const [repoArrayData, setRepoArrayData] = useState([]); // Storing repository data of user

  // alert user
  let alertfn ;

  // it alerts user if search section is empty and search is performed
  const onClickCheckUserName = () => {
    if (userSearch) {
      fetchUser();
    } else {
      setUserNameEnterAlert(true);
      alertfn();
    }
  };

  // search user data
  const searchUrl = `https://api.github.com/users/${userSearch}`;
  const fetchUser = async () => {
    await fetch(searchUrl)
      .then((response) => response.json())
      .then(function (data) {
        if (data.message === "Not Found") {
          setNotFoundAlert(true);
          alertfn();
        } else {
          setFoundAlert(true);
          alertfn();
          setImageUrl(data.avatar_url);
          setName(data.name);
          setUserName(data.login);
          setBio(data.bio);
          setFollowers(data.followers);
          setFLink(`https://github.com/${data.login}?tab=followers`);
          setFollowing(data.following);
          setFlLink(`https://github.com/${data.login}?tab=following`);
          setLocation(data.location);
          setRepo(data.public_repos);
          setRepoLink(`https://github.com/${data.login}?tab=repositories`);
          setProfileURL(data.html_url);
          console.log("USER DATA FOUND");
          fetchRepo();
          setUserSearch("");
        }
      });
    // alert function timeout
  };
  // fetch  user repo data
  const repoUrl = `https://api.github.com/users/${userSearch}/repos`;
  const fetchRepo = async () => {
    await fetch(repoUrl)
      .then((response) => response.json())
      .then(function (repoData) {
        if (repoData.message === "not found") {
          alert("USER DOESN'T HAVE ANY REPO");
        } else {
          setUserSearch("");
          console.log("USER HAVE REPO");
          const arr = Object.values(repoData);
          setRepoArrayData(arr);
        }
      });
  };

  alertfn = () => {
    setTimeout(() => {
      setFoundAlert(false);
      setNotFoundAlert(false);
      setUserNameEnterAlert(false);
    }, 3000);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-slate-400 font-sans hover:bg-transparent bg-transparent text-xl subpixel-antialiased  hover:cursor-auto ">
            Github Clone
          </a>
        </div>
        <div className="flex-none gap-2 ">
          {/* USER SEARCH PROFILE */}
          <div className="github-profile-search">
            <div className="searchbar mt-1 " id="searchBar">
              <form
                className="flex items-center max-w-sm mx-auto "
                value={userSearch}
                onChange={(e) => {
                  setUserSearch(e.target.value);
                }}
              >
                <label htmlFor="simple-search" className="sr-only">
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
                    onClickCheckUserName();
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
          </div>
          <div className="UserProfile dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  alt="Tailwind CSS Navbar component"
                  src={imageUrl}
                />
              </div>
            </div>
            {/* We can open the modal using document.getElementById('ID').showModal() method */}
            <Zoom>
              <dialog id="my_modal_3" className="modal ">
                <div className="modal-box">
                  <form method="dialog">
                    {/* Buttton to close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="github-user-data-side mt-2 rounded-xl h-full    lg:w-96  flex flex-wrap flex-col  justify-center   shadow-black">
                    <Fade>
                      <div className="data-side-inside mx-3">
                        <div className="profile-img flex justify-center mb-2">
                          <div className="avatar ">
                            <div className="w-24 shadow-xl  rounded-full ring ring-transparent  ring-offset-base-100 ring-offset-2">
                              <img src={imageUrl} />
                            </div>
                          </div>
                        </div>
                        <div className="name flex flex-wrap flex-col">
                          <div className="full-name">
                            <p className="FullName  font-semibold text-pretty text-2xl text-black dark:text-white ">
                              {name}
                            </p>
                          </div>
                          <div className="user-name">
                            <p className="username" style={{ color: "848d97" }}>
                              {userName}
                            </p>
                          </div>
                        </div>
                        <div className="bio font-bold  text-balance text-black dark:text-white my-3  ">
                          <p className="text-balance ">{bio}</p>
                        </div>
                        <div className="peopleInteraction flex flex-wrap space-x-2 ">
                          <div className="icon-people my-1">
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
                          <div className="followers flex">
                            <a
                              href={fLink}
                              target="_blank"
                              target="_blank"
                              className="flex flex-wrap space-x-1"
                            >
                              <div className="fnum font-bold dark:text-white ">
                                {followers}
                              </div>
                              <div className="f text-grey-700 dark:">
                                followers
                              </div>
                            </a>
                          </div>
                          <span>|</span>
                          <div className="flex ">
                            <a
                              href={flLink}
                              target="_blank"
                              className="flex flex-wrap space-x-1"
                            >
                              <div className="fnum font-bold   dark:text-white">
                                {following}
                              </div>
                              <div className="f text-grey-700 ">following</div>
                            </a>
                          </div>
                        </div>
                        <div className="location flex flex-wrap space-x-1 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 12 16"
                            className="mt-1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 0C2.69 0 0 2.5 0 5.5C0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5C1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36c.92.86 1.44 1.97 1.44 3.14c0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2c0-1.11.89-2 2-2c1.11 0 2 .89 2 2z"
                              fill="currentColor"
                            />
                          </svg>

                          <span className="pb-1  dark:text-gray-300">
                            {location}
                          </span>
                        </div>
                        {/* No of repos */}
                        <div className="repo flex flex-wrap space-x-1">
                          <div className="repo-icon my-1 ">
                            <a
                              href={repo_link}
                              target="_blank"
                              className="flex flex-wrap  space-x-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="mt-1"
                              >
                                <path
                                  fill="currentColor"
                                  d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7a.75.75 0 1 1-1.072 1.05A2.5 2.5 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                                />
                              </svg>
                              <div className="repo-count dark:text-gray-300">
                                {repo}
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* FOLLOW BUTTON */}
                        <div className="follow-btn">
                          <div className="follow">
                            <button
                              type="button"
                              className="px-3 py-2 pt-2 my-2 text-xs font-medium text-center text-gray-200 dark:text-white bg-black-700 rounded-lg hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 bg-blue-700
                       dark:bg-blue-700 "
                            >
                              <div className="repoLink">
                                <div className="linkicon flex flex-wrap flex-col">
                                  <a
                                    href={profileURL}
                                    target="_blank"
                                    className="flex flex-wrap space-x-1"
                                  >
                                    <div className="follow-ic">
                                      <span>Follow</span>
                                    </div>
                                    <svg
                                      className="w-3 h-3 text-gray-200 dark:text-white my-1"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="5"
                                      height="5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
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
                    </Fade>
                  </div>
                </div>
              </dialog>
            </Zoom>
          </div>
        </div>
      </div>
      {/* Alert */}
      <div className="fixed alert-c h-5 mt-2 right-5">
        {foundAlert && (
          <Zoom>
            <div role="alert" className="badge badge-warning gap-2 p-5 z-20">
              <span> User Found !!</span>
            </div>
          </Zoom>
        )}
        {notFoundAlert && (
          <Zoom>
            <div role="alert" className="badge badge-warning gap-2 p-5 z-20">
              <span>Oops No User Found !!</span>
            </div>
          </Zoom>
        )}
        {userNameEnterAlert && (
          <Zoom>
            <div role="alert" className="badge badge-warning gap-2 p-5 z-20">
              <span> Please write the user name to search user..</span>
            </div>
          </Zoom>
        )}
      </div>
      {/* Passing data to child(Profile.js) */}
      <Profile data={repoArrayData} />
    </>
  );
}
