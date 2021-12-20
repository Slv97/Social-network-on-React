import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";

const Login = (props) => {
  return (
    <Formik
    onSubmit={props.handleSubmit}
      initialValues={{
        login: "",
        password: "",
        rememberMe: true,
      }}
    >
      {(formik) => (
        <div>
          {console.log(formik.values)}
          <h1>Login</h1>
          <Form >
            <TextField label="Login" name="login" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Remember me" name="rememberMe" type="checkbox" />
            <button>Submit</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

// const Login = (props) => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <LoginForm props={props} />
//     </div>
//   );
// };

export default Login;
