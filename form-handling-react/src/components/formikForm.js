import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log("Formik Submitted:", values);
    alert("Registration successful!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <label>Username:</label>
            <Field name="username" type="text" style={{ width: "100%", padding: "8px" }} />
            <ErrorMessage name="username" component="p" style={{ color: "red", fontSize: "0.8rem" }} />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" type="email" style={{ width: "100%", padding: "8px" }} />
            <ErrorMessage name="email" component="p" style={{ color: "red", fontSize: "0.8rem" }} />
          </div>

          <div>
            <label>Password:</label>
            <Field name="password" type="password" style={{ width: "100%", padding: "8px" }} />
            <ErrorMessage name="password" component="p" style={{ color: "red", fontSize: "0.8rem" }} />
          </div>

          <button type="submit" style={{ padding: "10px", backgroundColor: "black", color: "white", border: "none", cursor: "pointer" }}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
