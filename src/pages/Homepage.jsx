import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div>This is a Homepage</div>
      <button onClick={handleClick}>Go to Profile page</button>
    </div>
  );
}

export default Homepage;
