import React from "react";
import { Link } from "react-router-dom";
import "../compcss/contestcard.css";
export const Contestcard = ({ contest }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp); // Convert UNIX timestamp to milliseconds
    return date.toLocaleString(); // Convert to local date-time string
  };
  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  };
  const handleRegisterClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="fullcard">
      {contest.status === "before" && (
        <button
          className="contestname"
          onClick={() =>
            handleRegisterClick(
              `https://codeforces.com/contestRegistration/${contest.id}`
            )
          }
        >
          {contest.name}
        </button>
      )}
      {contest.status === "finished" && (
        <button
          className="contestname"
          onClick={() =>
            handleRegisterClick(`https://codeforces.com/contest/${contest.id}`)
          }
        >
          {contest.name}
        </button>
      )}
      
      <div className="individualcontest">
        <h2>Start : {formatDate(contest.start_time)}</h2>
      </div>
      <div className="individualcontest">
        <h2>Duration : {formatDuration(contest.duration)}</h2>
      </div>
    </div>
  );
};
export default Contestcard;
