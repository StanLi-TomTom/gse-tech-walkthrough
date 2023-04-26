import React from "react";
import FormFieldSeparator from "./form-field-separator";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const SingleSelect = (props) => {
  const { options, componentKeyVal } = props;
  return (
    <>
      <FormFieldSeparator key={componentKeyVal + "-FormField"}>
        <Autocomplete
          disablePortal
          autoHighlight
          size="small"
          id="combo-box-demo"
          key={"Supplier Name-autocomplete"}
          options={options}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormFieldSeparator>
    </>
  );
};

export default SingleSelect;
