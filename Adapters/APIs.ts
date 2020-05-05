import axios from "axios";

enum theme {
  SLOTH = "sloth",
  CAT = "cat",
  DUCK = "duck",
  GEORGE = "george",
  KEANU = "keanu",
  SOUTH_PARK = "south park",
}

interface User {
  username: string;
  theme: theme;
  credit: number;
}

export const getUsers = (): Promise<User[]> => {
  return axios.get("http://localhost:3004/users").then((res) => res.data);
};
