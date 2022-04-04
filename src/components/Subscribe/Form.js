import React from "react";
import { Field, reduxForm } from "redux-form";
import { ButtonLink } from "../BannerContainer/BannerElements";

const Form = (props) => {
  const onFormSubmit = (formValues) => {
    onSubmit(formValues);
  };

  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            style={{
              width: "100%",
              backgroundColor: "#002530",
              padding: "1.6rem",
              border: "none",
              fontSize: "1.6rem",
              color: "#fff",
              borderRadius: "0.3rem",
              marginBottom: "2rem",
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email Address"
            style={{
              width: "100%",
              backgroundColor: "#002530",
              padding: "1.6rem",
              border: "none",
              fontSize: "1.6rem",
              color: "#fff",
              borderRadius: "0.3rem",
              marginBottom: "2rem",
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple",
})(Form);
