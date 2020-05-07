import { theme } from "./Theme";

export interface User {
  id: number;
  username: string;
  theme: theme;
  credit: number;
}
