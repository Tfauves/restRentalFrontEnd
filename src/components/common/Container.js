import React from "react";
// import PropTypes from "prop-types";


const Container = (props) => {
  return (<div style={{...defaultStyle,...props.style}}>
      {props.children}</div>
  )
};

// Container.propTypes = {
//     style: PropTypes.object({backgroudColor: String})
// }

const defaultStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%"
};

export default Container;
