import { useState, useEffect } from "react";
import { isEmpty } from "lodash";

import { getUsers, createUser } from "../Adapters/APIs";
import Header from "../components/layout/Header";
import GameScreen from "../components/GameScreen";
import Login from "../components/Login";
import Footer from "../components/layout/Footer";
import ErrorMessage from "../Constants/ErrorMessage";

const SlotMachineApp = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const findUser = (usernameInput: string) => {
    const existingUser = users.find(
      ({ username }) => username === usernameInput
    );

    if (existingUser) {
      setUser(existingUser);
    } else {
      const newUser = { username: usernameInput };
      createUser(newUser)
        .then(setUser)
        .catch((e) => setErrorMessage(ErrorMessage.USER_NOT_CREATED));
    }
  };

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((e) => setErrorMessage(ErrorMessage.USERS_NOT_RETRIEVED));
  }, [user]);
  return (
    <>
      <Header />
      {isEmpty(user) ? (
        <Login {...{ users, findUser }} />
      ) : (
        <GameScreen {...{ users, user, setUser }} />
      )}
      <Footer />
    </>
  );
};

export default SlotMachineApp;
