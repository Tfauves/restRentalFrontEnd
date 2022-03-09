import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types add to npm npm i proptypes

const NavButton = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <NavLink
      to={props.to}
      style={{
        background: "transparent",
        textDecoration: "none",
        fontSize: "1.25em",
        color: hover ? "#f1f1f1" : "#010101",
        fontWeight: 700,
        textShadow: "1px 1px #f1f1f1",
        textAlign: "center",
        whiteSpace: "nowrap",
        margin: "0 10px",
        opacity: hover ? "60%" : "100%"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.label} 
      {/* {hover ? "willkommen" : ""} */}
    </NavLink>
  );
};

// NavButton.propTypes = {
//     label: PropTypes.string.isRequired,
//     to: PropTypes.string.isRequired
//   }

export default NavButton;
