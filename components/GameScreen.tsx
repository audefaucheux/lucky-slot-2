import { useState, useEffect } from "react";
import { uniq } from "lodash";

import { slothImageCollection } from "../Helpers/SlothImageCollection.data";
import { updateUser } from "../Adapters/APIs";

import BetOption from "./game_components/BetOption";
import Leaderboard from "./game_components/Leaderboard";
import SlotMachineImage from "./game_components/SlotMachineImage";
import SpinButton from "./game_components/SpinButton";
import ThemeSelection from "./game_components/ThemeSelection";
import TopBanner from "./layout/TopBanner";

interface Iimage {
  src: string;
  className: string;
}

const GameScreen = ({ users, user, setUser }) => {
  const placeholderSrc: string = "./images/game/question-mark.png";

  const imagePlaceholder: Iimage = {
    src: placeholderSrc,
    className: "",
  };

  const [themeSelected, setThemeSelected] = useState<string>("sloth");
  const [bet, setBet] = useState<number>(10);
  const [image1, setImage1] = useState<Iimage>(imagePlaceholder);
  const [image2, setImage2] = useState<Iimage>(imagePlaceholder);
  const [image3, setImage3] = useState<Iimage>(imagePlaceholder);

  const renderSpinningImage = (
    imageSetter: (image: Iimage) => void,
    placeholder: string
  ) => imageSetter({ src: placeholder, className: "animated infinite shake" });

  const getRandomNumber = (): number => Math.floor(Math.random() * 3);

  const spinResults = (): number[] => [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];

  const renderImage = (
    index: number,
    imageSetter: (image: Iimage) => void,
    time: number
  ) => {
    const imageUrl = slothImageCollection[themeSelected][index];
    setTimeout(() => imageSetter({ src: imageUrl, className: "" }), time);
  };

  const getResult = (randomNumberArray: number[]) => {
    const uniqueNumberArray = uniq(randomNumberArray);
    if (uniqueNumberArray.length === 1) {
      const userUpdate = {
        ...user,
        credit: user.credit + bet * 5,
      };
      updateUser(userUpdate.id, userUpdate).then(setUser);
    } else {
      const userUpdate = { ...user, credit: user.credit - bet };
      updateUser(userUpdate.id, userUpdate).then(setUser);
    }
  };

  const handleSpin = () => {
    renderSpinningImage(setImage1, placeholderSrc);
    renderSpinningImage(setImage2, placeholderSrc);
    renderSpinningImage(setImage3, placeholderSrc);

    const randomNumberArray: number[] = spinResults();

    renderImage(randomNumberArray[0], setImage1, 1000);
    renderImage(randomNumberArray[1], setImage2, 1400);
    renderImage(randomNumberArray[2], setImage3, 1900);
    setTimeout(() => getResult(randomNumberArray), 2000);
  };

  useEffect(() => {
    if (bet > user.credit) setBet(user.credit);
  }, [user]);

  return (
    <div className="text-center">
      <TopBanner user={user} setUser={setUser} />
      <h1>
        Your current credit is{" "}
        <span className="sea-green"> £{user.credit}</span>
      </h1>
      <BetOption {...{ bet, setBet, user }} />
      <ThemeSelection {...{ themeSelected, setThemeSelected }} />
      <div id="slot-machine">
        <div id="slot-image-container">
          <SlotMachineImage image={image1} id={1} />
          <SlotMachineImage image={image2} id={2} />
          <SlotMachineImage image={image3} id={3} />
        </div>
      </div>
      {user.credit <= 0 ? (
        <div>You don't have enough credit to spin</div>
      ) : (
        <SpinButton {...{ user, handleSpin }} />
      )}
      <Leaderboard users={users} />
    </div>
  );
};

export default GameScreen;
