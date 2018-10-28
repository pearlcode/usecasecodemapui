import React from "react";
import { Link } from "react-router-dom";
export default ({ userCases, parentUrl }) => (
  <div className="user-cases">
    {userCases.map((usercase, key) => (
      <li key={key} className="user-case">
        <div className="user-case__title">
          <Link to={`${parentUrl}/${usercase.id}`}>{usercase.title}</Link>
        </div>
        <div className="user-case__description">{usercase.description}</div>
      </li>
    ))}
  </div>
);
