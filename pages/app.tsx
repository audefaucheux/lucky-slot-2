import { useState, useEffect } from "react";
import { isEmpty } from "lodash";

import { getUsers, createUser, updateUser } from "../Adapters/APIs";
import { User } from "../interfaces/User";

import Header from "../components/Header";
import GameScreen from "../components/GameScreen";
import Login from "../components/Login";
import Footer from "../components/Footer";

const SlotMachineApp = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const findUser = (user: User) => {
    const existingUser = users.find(
      ({ username }) => username === user.username
    );

    if (existingUser) {
      updateUser(existingUser.id, user).then(setUser);
    } else {
      const newUser: User = { ...user, credit: 100 };
      createUser(newUser).then(setUser);
    }
  };

  useEffect(() => {
    console.log("re-rendering");
    getUsers().then(setUsers);
  }, [user]);
  return (
    <div>
      <Header />
      {isEmpty(user) ? (
        <Login findUser={findUser} />
      ) : (
        <GameScreen {...{ users, user, setUser }} />
      )}
      <Footer />
    </div>
  );
};

export default SlotMachineApp;
