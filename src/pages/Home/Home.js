import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../redux/authAction";

function Home() {
  const { currentUser } = useSelector((state) => state.user); //get data from redux
  const dispatch = useDispatch();
  // logic to hundle log out
  const hundleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome to Our Site</h2>
      <br />
      <button className="btn btn-danger" onClick={hundleAuth}>
        Logout
      </button>
    </div>
  );
}

export default Home;
