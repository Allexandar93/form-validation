import React, { useState } from "react";
import "../styles/Form.scss";
import FormSignup from "./FormSignup";
import FormDone from "./FormDone";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="form__wrapper">
      <div className="left">
        <img className="image" src="images/space.jpg" alt="" />
      </div>
      <div className="form__right">
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormDone />}
      </div>
    </div>
  );
}

export default Form;
