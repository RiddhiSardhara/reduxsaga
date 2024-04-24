import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_USER_PENDING,
  POST_USER_PENDING,
  UPDATE_USER_PENDING,
} from "../redux-saga/user/action/action";

const Data = () => {
  let email = useRef();
  let password = useRef();

  //view
  let [view, setView] = useState();

  //selector
  let user = useSelector((state) => state.userReducer);

  let dispatch = useDispatch();

  //add user
  let addUser = () => {
    let data = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(data);

    dispatch({ type: POST_USER_PENDING, payload: data });
  };

  //delete user
  let handleDelete = (id) => {
    console.log(id);

    dispatch({ type: DELETE_USER_PENDING, payload: id });
  };

  //update

  let handleView = (id, index) => {
    let data = user.user[index];

    // console.log(data);
    setView(data);
  };

  let handle = (e) => {
    setView({ ...view, [e.target.name]: e.target.value });
  };

  let update = () => {
    console.log(view);
    dispatch({ type: UPDATE_USER_PENDING, payload: view });
  };

  return (
    <>
      <input
        type="text"
        ref={email}
        style={{ marginBottom: "10px", padding: "5px", borderRadius: "5px" }}
      />
      <input
        type="text"
        ref={password}
        style={{ marginBottom: "10px", padding: "5px", borderRadius: "5px" }}
      />
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={addUser}
      >
        Save
      </button>
      <br />

      <input
        type="text"
        name="email"
        value={view?.email}
        onChange={handle}
        style={{ marginBottom: "10px", padding: "5px", borderRadius: "5px" }}
      />
      <input
        type="text"
        name="password"
        value={view?.password}
        onChange={handle}
        style={{ marginBottom: "10px", padding: "5px", borderRadius: "5px" }}
      />
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={update}
      >
        Update
      </button>

      <div>
        {user.user?.map((val, index) => (
          <div key={val.id}>
            <p>{val.id}</p>
            <h1>{val.email}</h1>
            <h2>{val.password}</h2>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "5px",
              }}
              onClick={() => handleDelete(val.id)}
            >
              Delete
            </button>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#ffc107",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "5px",
              }}
              onClick={() => handleView(val.id, index)}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Data;
