import axios from "axios";
import { User } from "../interfaces/User";

export const getUsers = (): Promise<User[]> => {
  return axios({
    method: "get",
    url: "http://localhost:3004/users",
  }).then((res) => res.data);
};

export const createUser = (data: User): Promise<User> => {
  console.log(data);
  return axios({
    method: "post",
    url: "http://localhost:3004/users",
    data,
  }).then((res) => res.data);
};

export const updateUser = (id: number, data: User): Promise<User> => {
  return axios({
    method: "patch",
    url: `http://localhost:3004/users/${id}`,
    data,
  }).then((res) => res.data);
};
