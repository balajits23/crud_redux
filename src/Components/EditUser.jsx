import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUsers } from "../Redux/action/action";
import { useEffect } from "react";
import { getbyId } from "./../Redux/action/action";

const EditUser = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let getId = useSelector((state) => state.reducer.getId);
  let [state, setState] = useState({
    username: "",
    salary: "",
  });
  let { username, salary } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    dispatch(getbyId(id));
    setState({
      id: getId.id,
      username: getId.username,
      salary: getId.salary,
    });
  }, [getId.id]);

  let handleSubmit = (e) => {
    e.preventDefault();
    let put = { username, salary };
    dispatch(editUsers(id, put));
    window.location.assign("/");
  };

  return (
    <div>
      <form
        className="w-50 d-flex align-items-center justify-content-between p-2"
        onSubmit={handleSubmit}
      >
        <h1>Edit User</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Salary</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Salary"
            name="salary"
            value={salary}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-md">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
