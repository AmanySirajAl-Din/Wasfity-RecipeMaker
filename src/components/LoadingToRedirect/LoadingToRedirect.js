import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5); // I set this Value to make it time for loader
  const history = useHistory();

  //this logic for loader by use interval to make time depends on count if it end push by history to login
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && history.push("/login");
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div>
      {/* just need style here no more */}
      <p style={{ margin: "20rem" }}> Redirect you in {count} seconds </p>
    </div>
  );
};

export default LoadingToRedirect;
