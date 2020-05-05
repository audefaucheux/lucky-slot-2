import Link from "next/link";
import { slothImageCollection } from "../Helpers/SlothImageCollection.data";
import { getUsers } from "../Adapters/APIs";
import { useState, useEffect } from "react";
import { uniq } from "lodash";
import Leaderboard from "./Leaderboard";
import SlotMachineImage from "./SlotMachineImage";

// import spinningAudio from "../sounds/slotmachinesound.wav";
// import WinningAudio from "../public/sounds/winaudio.wav";
// import LosingAudio from "../public/sounds/lose.mp3";

// const confetti = require("canvas-confetti");

// const audio = new Audio("../public/sounds/slotmachinesound.wav");
// const loseaudio = new Audio("sounds/lose.mp3");
// const winaudio = new Audio("sounds/winaudio.wav");

const GameScreen = () => {
  const placeholderSrc = "./images/game/question-bear_dribbble.png";

  const imagePlaceholder = {
    src: placeholderSrc,
    className: "",
  };

  const [user, setUser] = useState({
    username: "Aude",
    theme: "Cat",
    credit: 100,
  });
  const [users, setUsers] = useState([]);
  const [bet, setBet] = useState(10);
  const [image1, setImage1] = useState(imagePlaceholder);
  const [image2, setImage2] = useState(imagePlaceholder);
  const [image3, setImage3] = useState(imagePlaceholder);
  const [resultMessage, setResultMessage] = useState("Spin to play !!");

  const getRandomNumber = (): number => Math.floor(Math.random() * 3);

  const spinResults = (): number[] => [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];

  const renderImage = (index: number, imageNumber: string) => {
    const imageUrl = slothImageCollection[user.theme][index];
    imageNumber === "image1" && setImage1({ src: imageUrl, className: "" });
    imageNumber === "image2" && setImage2({ src: imageUrl, className: "" });
    imageNumber === "image3" && setImage3({ src: imageUrl, className: "" });
  };

  const getResult = (randomNumberArray: number[]) => {
    const uniqueNumberArray = uniq(randomNumberArray);
    if (uniqueNumberArray.length === 1) {
      // renderConfetti();
      // winaudio.play();
      setUser({ ...user, credit: user.credit + bet * 10 });
      setResultMessage("YOU WON !");
    } else {
      // renderConfetti();
      setUser({ ...user, credit: user.credit - bet });
      setResultMessage("You lost");
    }
  };

  const renderSpinningImage = (setState): void =>
    setState({ src: placeholderSrc, className: "animated infinite shake" });

  const handleSpin = () => {
    renderSpinningImage(setImage1);
    renderSpinningImage(setImage2);
    renderSpinningImage(setImage3);

    const randomNumberArray: number[] = spinResults();

    setTimeout(() => renderImage(randomNumberArray[0], "image1"), 1000);
    setTimeout(() => renderImage(randomNumberArray[1], "image2"), 1400);
    setTimeout(() => renderImage(randomNumberArray[2], "image3"), 1900);
    setTimeout(() => getResult(randomNumberArray), 2000);
  };

  const handleBetDecrement = () => {
    setBet(bet - 10);
  };

  const handleBetIncrement = () => {
    setBet(bet + 10);
  };

  const handleNoCredit = () => {
    alert("You don't have enough credit to spin");
  };

  useEffect(() => {
    getUsers().then(setUsers);
    if (bet > user.credit) setBet(user.credit);
  }, [user.credit]);

  return (
    <div id="game-screen" className="text-center">
      <div id="slot-machine-header">
        <h2 data-user-id="0">
          Hi {user.username}. Your current credit is
          <span className="credit-span"> £{user.credit}</span>
        </h2>
        <div>
          <strong id="bet-header">
            Bet amount: <span>{bet}</span>
          </strong>
          <button
            disabled={bet <= 10 || user.credit < 10}
            className="btn btn-primary"
            onClick={handleBetDecrement}
          >
            -
          </button>
          <button
            disabled={bet >= user.credit || user.credit < 10}
            className="btn btn-primary"
            onClick={handleBetIncrement}
          >
            +
          </button>
          <button
            disabled={bet >= user.credit || user.credit < 10}
            className="btn btn-primary"
            onClick={() => setBet(user.credit)}
          >
            Bet MAX
          </button>
        </div>
      </div>

      <div id="slot-machine">
        <div id="slot-image-container">
          <SlotMachineImage image={image1} id={1} />
          <SlotMachineImage image={image2} id={2} />
          <SlotMachineImage image={image3} id={3} />
        </div>
      </div>

      <div className="spin-button">
        <img
          src="./images/game/spinbutton.png"
          alt="Spin Button"
          onClick={user.credit > 0 ? handleSpin : handleNoCredit}
        />
      </div>
      <div id="game-result-message" className="text">
        {resultMessage}
      </div>
      <br />
      <div id="back-to-login">
        <Link href="/login">
          <a className="btn btn-danger">EXIT</a>
        </Link>
      </div>
      <br />
      <Leaderboard users={users} />
      <div id="stop-logo">
        <img
          src="./images/game/when-the-fun-stops-stop.jpg"
          alt="When The Fun Stops, Stop"
        />
      </div>
    </div>
  );
};

export default GameScreen;
