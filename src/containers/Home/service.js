import service from "../../utils/req";


// Get all user
export const getUsers = async (id) =>  {
  const param = id ? `/${id}` : ``
  try {
    const res = await service().get(`/users${param}`);
    return res.data;
  } catch(err) {
    return err.response.data
  }
};