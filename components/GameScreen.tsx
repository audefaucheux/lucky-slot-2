import { useState, useEffect } from "react";
import { uniq } from "lodash";

import { slothImageCollection } from "../Helpers/SlothImageCollection.data";
import SlotMachineImage from "./SlotMachineImage";
import { updateUser } from "../Adapters/APIs";

import BetOption from "./BetOption";
import Leaderboard from "./Leaderboard";
import TopBanner from "./TopBanner";
import ThemeSelection from "./ThemeSelection";

interface Iimage {
  src: string;
  className: string;
}

const GameScreen = ({ users, user, setUser }) => {
  const placeholderSrc = "./images/game/question-mark.png";

  const imagePlaceholder: Iimage = {
    src: placeholderSrc,
    className: "",
  };

  const [themeSelected, setThemeSelected] = useState("sloth");
  const [bet, setBet] = useState(10);
  const [image1, setImage1] = useState<Iimage>(imagePlaceholder);
  const [image2, setImage2] = useState<Iimage>(imagePlaceholder);
  const [image3, setImage3] = useState<Iimage>(imagePlaceholder);

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

  const renderSpinningImage = (imageSetter): void =>
    imageSetter({ src: placeholderSrc, className: "animated infinite shake" });

  const handleSpin = () => {
    renderSpinningImage(setImage1);
    renderSpinningImage(setImage2);
    renderSpinningImage(setImage3);

    const randomNumberArray: number[] = spinResults();

    renderImage(randomNumberArray[0], setImage1, 1000);
    renderImage(randomNumberArray[1], setImage2, 1400);
    renderImage(randomNumberArray[2], setImage3, 1900);
    setTimeout(() => getResult(randomNumberArray), 2000);
  };

  const handleNoCredit = () => {
    alert("You don't have enough credit to spin");
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
      <button
        onClick={user.credit > 0 ? handleSpin : handleNoCredit}
        className="spin-button"
      >
        SPIN
      </button>
      <Leaderboard users={users} />
    </div>
  );
};

export default GameScreen;
