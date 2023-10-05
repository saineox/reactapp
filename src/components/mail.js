import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const MailPage = () => {
  return (
    <div className="wrapper">
        <div className="header">
            <div className="ain">
                <h3> Welcome to PkMail</h3>
            </div>
        </div>
     
      <div className="container">
        <div className="sidebar">
            <NavLink to="/mail/inbox">InboxPage</NavLink>
            <br />
            <NavLink to="/mail/sent">Sent Page</NavLink>
            <br/>
            <NavLink to="/mail/trash">Trash Page</NavLink>
            <br/>
            <NavLink to="/mail/starred">Starred Page</NavLink>
        </div>
        <div className="main-content">
        <Outlet />
        </div>
      </div>

      
    </div>
  );
};

export default MailPage;
