import axios from "axios";
import React, { useState } from "react";

const user = {
  email: "",
  password: "",
};

const Form = () => {
  const [state, setState] = useState({ ...user });

  const onChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post(process.env.REACT_APP_SIGNUP, state);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='email' onChange={onChange} value={state.name} />
      <input
        type='text'
        name='password'
        onChange={onChange}
        value={state.name}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
