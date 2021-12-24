import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer"

const Login = (props) => {
  return (
    <Formik
    onSubmit={props.handleSubmit}
      initialValues={{
        email: "",
        password: "",
        rememberMe: true,
      }}
    >
      {(formik) => (
        <div>
          {console.log(formik.values)}
          {console.log(props.login)}
          <h1>Login</h1>
          <Form >
            <TextField label="Email" name="email" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Remember me" name="rememberMe" type="checkbox" />
            <button >Submit</button>
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

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
