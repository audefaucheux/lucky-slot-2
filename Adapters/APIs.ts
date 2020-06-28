import axios from "axios";
import { User } from "../interfaces/User";

const server = process.env.SERVER;

export const getUsers = (): Promise<User[]> => {
  return axios({
    method: "get",
    url: `${server}/users`,
  }).then((res) => res.data.data);
};

export const createUser = (data): Promise<User> => {
  return axios({
    method: "post",
    url: `${server}/users`,
    data,
  }).then((res) => res.data.data);
};

export const updateUser = (id: number, credit: number): Promise<User> => {
  return axios({
    method: "patch",
    url: `${server}/users/${id}`,
    data: { credit },
  }).then((res) => res.data.data);
};
