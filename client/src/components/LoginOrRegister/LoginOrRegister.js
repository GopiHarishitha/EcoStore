import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./LoginOrRegister.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slices/userSlice";

function LoginOrRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  async function handleFormSubmit(userObj) {
    const res = await axios.post(
      `${process.env.REACT_APP_HOST}/user/login`,
      userObj
    );

    if (res.data.success) {
      dispatch(setUser(res.data.user));
      navigate("/");
    } else {
      console.log("Error: " + res.data.message);
    }
  }

  const handleFormSubmitRegister = async (userObj) => {
    const res = await axios.post(
      `${process.env.REACT_APP_HOST}/user/register`,
      userObj
    );

    if (res.data.success) {
      dispatch(setUser(res.data.user));
      navigate("/");
    } else {
      console.log("Error: " + res.data.message);
    }
  };

  const toggleLogin = () => {
    login === true ? setLogin(false) : setLogin(true);
  };

  return (
    <div className="lr">
      {login === true ? (
        <div className="card mx-auto p-3 login-div rounded">
          <h1 className="display-3 p-2">Signin</h1>
          <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form-group mb-3">
              <input
                type="text"
                name="username"
                id="username"
                className="form-control siginin-input"
                placeholder="Your name"
                {...register("username", { required: true })}
              />
              {errors.username?.type === "required" && (
                <p className="text-danger">Enter Username</p>
              )}
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control siginin-input"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <p className="text-danger">Enter Password</p>
              )}
            </div>

            <button className="rounded btn-success" type="submit">
              Signin
            </button>
            <p>
              Don't have an account? <i onClick={toggleLogin}>Register</i> here
            </p>
          </form>
        </div>
      ) : (
        <div className="card p-3 mx-auto signup-div rounded m-4">
          <h1 className="login-heading display-3">Sign Up</h1>

          <form
            className="form"
            onSubmit={handleSubmit(handleFormSubmitRegister)}
          >
            {/* Username */}
            <div className="form-group">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                {...register("username", { required: true })}
              />
              {errors.username?.type === "password" && (
                <p className="text-danger">Enter Username</p>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                {...register("password", { required: true })}
              />
            </div>

            {/* email */}
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                {...register("email", { required: true })}
              />
            </div>

            <button className="btn-success rounded">Sign Up</button>
            <p>
              Already have an account <i onClick={toggleLogin}>Login</i> here
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginOrRegister;
