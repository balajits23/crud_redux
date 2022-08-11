import axios from "../../utility/axios";

export let fetchUsers = () => {
  return async (dispatch) => {
    let Fetch_users = await axios.get("/users");
    dispatch({
      type: "FETCH_USERS",
      payload: Fetch_users.data,
    });
  };
};

export let postUsers = (post) => {
  return async (dispatch) => {
    let Post_users = await axios.post("/users", post);
    dispatch({
      type: "POST_USERS",
      payload: Post_users,
    });
  };
};

export let delUsers = (id) => {
  return async (dispatch) => {
    let Del_users = await axios.delete(`/users/${id}`);
    dispatch({
      type: "DEL_USERS",
      payload: Del_users,
    });
  };
};

export let editUsers = (id, put) => {
  return async (dispatch) => {
    let Edit_users = await axios.put(`/users/${id}`, put);
    dispatch({
      type: "EDIT_USERS",
      payload: Edit_users,
    });
  };
};

export let getbyId = (id) => {
  return async (dispatch) => {
    let Get_id = await axios.get(`/users/${id}`);
    dispatch({
      type: "GET_ID",
      payload: Get_id.data,
    });
  };
};
