import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const FormFieldTitle = (props) => {
  const { fieldDisplayName, isRequired } = props;
  return (
    <>
      <Stack direction="row" spacing={0} alignItems="center">
        <Typography
          key={fieldDisplayName + "-Typography"}
          // variant="caption"
        >
          {fieldDisplayName}
        </Typography>
        {isRequired && (
          <Typography
          // variant="required"
          >
            {"*"}
          </Typography>
        )}
      </Stack>
    </>
  );
};

FormFieldTitle.propTypes = {
  isRequired: PropTypes.bool.isRequired,
  fieldDisplayName: PropTypes.string.isRequired
};

export default FormFieldTitle;
