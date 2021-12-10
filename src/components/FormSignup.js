import React from "react";
import "../styles/FormSignup.scss";
import useForm from "./useForm";
import validate from "./validateInfo";

function FormSignup({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="started">Create your account to get started!</h1>

      <div className="formSignup__inputs">
        <label htmlFor="username" className="formSignup__label">
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          className="formSignup__input"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div className="formSignup__inputs">
        <label htmlFor="email" className="formSignup__label">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="formSignup__input"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div className="formSignup__inputs">
        <label htmlFor="password" className="formSignup__label">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className="formSignup__input"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div className="formSignup__inputs">
        <label htmlFor="password2" className="formSignup__label">
          Confirm password
        </label>
        <input
          id="password2"
          type="password"
          name="password2"
          className="formSignup__input"
          placeholder="Confirm password"
          value={values.password2}
          onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
      </div>
      <button className="formSignup__button" type="submit">
        Sign up
      </button>

      <span className="formSignup__login">
        Already have an account? Login <a href="#">here</a>
      </span>
    </form>
  );
}

export default FormSignup;
