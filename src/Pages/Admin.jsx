import React from "react";
import AdminHeader from "../Components/AdminHeader";

import Body from "../Components/Body";
import AdminFooter from "../Components/AdminFooter";
import "../Styles/AdminStyling.css";

function Admin({ allNfts }) {
  return (
    <div className="adminPageWrapper">
      <AdminHeader />
      <Body allNfts={allNfts} />
      <AdminFooter />
    </div>
  );
}

export default Admin;
