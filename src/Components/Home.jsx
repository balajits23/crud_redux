import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, postUsers } from "../Redux/action/action";
import { delUsers } from "./../Redux/action/action";
import { Link } from "react-router-dom";

const Home = () => {
  let [state, setState] = useState({
    username: "",
    salary: "",
  });
  let { username, salary } = state;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let Users = useSelector((state) => state.reducer.users);
  //   console.log(Users);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      let post = { username, salary };
      console.log(post);
      dispatch(postUsers(post));
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = (id) => {
    dispatch(delUsers(id));
    window.location.reload(true);
  };
  return (
    <div>
      <form
        className="w-50 d-flex align-items-center justify-content-between p-2"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
      <div>
        <div className="row d-flex flex-wrap">
          {Users.length > 0 &&
            Users.map((val, ind) => {
              return (
                <div className="col-sm-4" key={ind}>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        <strong>Username: </strong>
                        {val.username}
                      </h3>
                      <h4 className="card-text">
                        <strong>Salary: </strong>
                        {val.salary}
                      </h4>
                      <Link
                        className="btn btn-success m-2"
                        to={`/edit/${val.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger m-2"
                        onClick={() => handleDelete(val.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
