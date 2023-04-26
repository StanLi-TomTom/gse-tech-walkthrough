import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const FormTitle = (props) => {
  const { pageTitle, marginBottomVal } = props;
  return (
    <>
      <Typography
        key="title"        
        sx={{
          marginTop: `${marginBottomVal}px`,
          marginBottom: `${marginBottomVal}px`
        }}
      >
        {pageTitle}
      </Typography>
    </>
  );
};

FormTitle.defaultProps = {
  marginBottomVal: "16"
};

FormTitle.propTypes = {
  marginBottomVal: PropTypes.string,
  pageTitle: PropTypes.string.isRequired
};

export default FormTitle;
