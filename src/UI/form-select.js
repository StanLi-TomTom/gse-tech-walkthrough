import React from "react";
import { Typography, Stack, styled } from "@mui/material";
import SingleSelect from "../components/form-single-select";
import PropTypes from "prop-types";

const FormField = styled("div")(() => ({
  paddingTop: "8px",
  paddingBottom: "16px"
}));

const SingleSelectDropDown = (props) => {
  const {    
    fieldDisplayName,
    selectOptions,
    optionKey,
    componentKey,
    isRequired
  } = props;

  return (
    <>
      <Stack direction="row" spacing={0} alignItems="center">
        <Typography
          key={componentKey + "-Typography-" + fieldDisplayName}
          variant="caption"
          aligntext="left"
          style={{
            display: "flex",
            paddingBottom: "2px",
            fontSize: "12px"
          }}
        >
          {fieldDisplayName}
        </Typography>
        {isRequired && (
          <Typography
            variant="required"
            aligntext="left"
            style={{
              display: "flex",
              paddingBottom: "2px",
              paddingLeft: "4px",
              paddingRight: "4px"
            }}
          >
            {"*"}
          </Typography>
        )}
      </Stack>
      <FormField key={componentKey + "-FormField-" + fieldDisplayName}>
        <SingleSelect
          options={selectOptions}
          optionLableKey={optionKey}
          componentKey={fieldDisplayName}
        />
      </FormField>
    </>
  );
};

SingleSelectDropDown.defaultProps = {
  isRequired: false
};

SingleSelectDropDown.propTypes = {
  dispatch: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  setFunc: PropTypes.func.isRequired,
  fieldDisplayName: PropTypes.string.isRequired,
  fieldAPIName: PropTypes.string.isRequired,
  selectOptions: PropTypes.array.isRequired,
  optionKey: PropTypes.string.isRequired,
  componentKey: PropTypes.string.isRequired,
  valueSet: PropTypes.object,
  isRequired: PropTypes.bool.isRequired
};

export default SingleSelectDropDown;
