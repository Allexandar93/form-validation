import React from "react";
import "../styles/FormDone.scss";

function FormDone() {
  return (
    <div className="formDone__right">
      <div className="formDone_succes">
        <p className="thanks">Thank you!</p>
        <p>You'll receive an email with next steps</p>
      </div>
    </div>
  );
}

export default FormDone;
