import Link from "next/link";
import { slothImageCollection } from "../Helpers/SlothImageCollection.data";
import { getUsers } from "../Adapters/APIs";
import { useState, useEffect } from "react";
import { uniq } from "lodash";

// import spinningAudio from "../sounds/slotmachinesound.wav";
// import WinningAudio from "../public/sounds/winaudio.wav";
// import LosingAudio from "../public/sounds/lose.mp3";

// const confetti = require("canvas-confetti");

// const audio = new Audio("../public/sounds/slotmachinesound.wav");
// const loseaudio = new Audio("sounds/lose.mp3");
// const winaudio = new Audio("sounds/winaudio.wav");

const GameScreen = () => {
  const imagePlaceholder = "./images/game/question-bear_dribbble.png";

  const [user, setUser] = useState({
    username: "Aude",
    theme: "Cats",
    credit: 100,
  });
  const [usersList, setUsersList] = useState([]);
  const [bet, setBet] = useState(10);
  const [image1, setImage1] = useState({
    src: imagePlaceholder,
    className: "",
  });
  const [image2, setImage2] = useState({
    src: imagePlaceholder,
    className: "",
  });
  const [image3, setImage3] = useState({
    src: imagePlaceholder,
    className: "",
  });
  const [resultMessage, setResultMessage] = useState("Spin to play !!");
  // const [audioUrl, setAudioUrl] = useState("");
  // const [renderConfetti, setRenderConfetti] = useState(false);

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

  // const renderConfetti = () => {
  //   let end = Date.now() + 1 * 1000;
  //   let interval = setInterval(function () {
  //     if (Date.now() > end) {
  //       return clearInterval(interval);
  //     }
  //     confetti({
  //       startVelocity: 30,
  //       spread: 360,
  //       ticks: 60,
  //       shapes: ["square"],
  //       origin: {
  //         x: Math.random(),
  //         // since they fall down, start a bit higher than random
  //         y: Math.random() - 0.2,
  //       },
  //     });
  //   }, 200);
  // };

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
    setState({ src: imagePlaceholder, className: "animated infinite shake" });

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
    getUsers().then(setUsersList);
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
          <div id="image-1" className="slot-images-size">
            <img
              src={image1.src}
              alt="placeholder"
              className={image1.className}
            />
          </div>
          <div id="image-2" className="slot-images-size">
            <img
              src={image2.src}
              alt="placeholder"
              className={image2.className}
            />
          </div>
          <div id="image-3" className="slot-images-size">
            <img
              src={image3.src}
              alt="placeholder"
              className={image3.className}
            />
          </div>
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
      <div id="leaderboard-table">
        <h2>Leaderboard</h2>
        {/* <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>£{user.credit}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
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
