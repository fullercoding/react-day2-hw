import React from "react";
import { render } from "react-dom";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import classNames from "classnames";

const MyForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <Field
        id="email"
        className={classNames({
          "form-control": true,
          "is-valid": touched.email && !errors.email,
          "is-invalid": touched.email && errors.email
        })}
        type="email"
        name="email"
        placeholder="Email"
      />
      {touched.email && errors.email && (
        <div className="invalid-feedback">{errors.email}</div>
      )}
      <small className="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>
    <div className="form-group">
      <label htmlFor="passowrd">Password</label>
      <Field
        id="password"
        className={classNames({
          "form-control": true,
          "is-valid": touched.password && !errors.password,
          "is-invalid": touched.password && errors.password
        })}
        type="password"
        name="password"
        placeholder="Password"
      />
      {touched.password && errors.password && (
        <div className="invalid-feedback">{errors.password}</div>
      )}
    </div>
    <div className="form-group form-check">

      
    </div>

    <div className="form-group form-check">
   

      {touched.terms && errors.terms && (
        <div className="invalid-feedback">{errors.terms}</div>
      )}
    </div>
    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
);

const FormikForm = withFormik({
  mapPropsToValues({ email, password, newsletter, plan, terms }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "free",
      terms: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or longer")
      .required("Password is required"),
    terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
    setTimeout(() => {
      if (values.email === "arnaud@test.io") {
        setErrors({ email: "That email is already taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(MyForm);

const App = () => (
  <div className="container">
    <h1 className="display-4">Register form</h1>
    <FormikForm />
  </div>
);

render(<App />, document.getElementById("root"));

