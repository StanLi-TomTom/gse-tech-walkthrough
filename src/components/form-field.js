import React from "react";
import FormFieldTitle from "./field-title";
import SingleSelect from "./form-select";

const FormField = (props) => {
  const { options, fieldDisplayName, isRequired } = props;
  return (
    <>
      <FormFieldTitle
        fieldDisplayName={fieldDisplayName}
        isRequired={isRequired}
      />
      <SingleSelect options={options} componentKeyVal={fieldDisplayName} />
    </>
  );
};

export default FormField;
