import axios from "axios";
import React, { useState } from "react";

const user = {
  picture: "",
};

const Form = () => {
  const [state, setState] = useState({ ...user });

  const onChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post(process.env.REACT_APP_DB_PICTURE, state);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        URL:
        <input
          type='text'
          name='picture'
          onChange={onChange}
          value={state.name}
        />
      </label>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
