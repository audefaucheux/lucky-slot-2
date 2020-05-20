import { useState, useEffect } from "react";
import { isEmpty } from "lodash";

import { getUsers, createUser } from "../Adapters/APIs";
import Header from "../components/Header";
import GameScreen from "../components/GameScreen";
import Login from "../components/Login";
import Footer from "../components/Footer";

const SlotMachineApp = () => {
  // const defaultUser = {
  //   username: "Aude",
  //   credit: 100,
  //   id: 1,
  // };

  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState(defaultUser);
  const [user, setUser] = useState({});

  const findUser = (usernameInput: string) => {
    const existingUser = users.find(
      ({ username }) => username === usernameInput
    );

    if (existingUser) {
      setUser(existingUser);
    } else {
      const newUser = { username: usernameInput };
      createUser(newUser).then(setUser);
    }
  };

  useEffect(() => {
    getUsers().then(setUsers);
  }, [user]);
  return (
    <>
      <Header />
      {isEmpty(user) ? (
        <Login {...{ findUser }} />
      ) : (
        <GameScreen {...{ users, user, setUser }} />
      )}
      <Footer />
    </>
  );
};

export default SlotMachineApp;
