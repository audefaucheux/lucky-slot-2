import Link from "next/link";
import { slothImageCollection } from "../Helpers/SlothImageCollection.data";
import { users } from "../Helpers/Users.data";
import { useState } from "react";
import { uniq } from "lodash";

// const audio = new Audio("../public/sounds/slotmachinesound.wav");
// const loseaudio = new Audio("sounds/lose.mp3");
// const winaudio = new Audio("sounds/winaudio.wav");

const GameScreen = () => {
  const imagePlaceholder = "./images/game/question-bear_dribbble.png";

  const [user, setUser] = useState(users[0]);
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
    imageNumber === "image1" && setImage1(imageUrl);
    imageNumber === "image2" && setImage2(imageUrl);
    imageNumber === "image3" && setImage3(imageUrl);
  };

  const getResult = (randomNumberArray: number[]) => {
    const uniqueNumberArray = uniq(randomNumberArray);
    if (uniqueNumberArray.length === 1) {
      // renderConfetti();
      // winaudio.play();
      setUser({ ...user, credit: user.credit + bet * 10 });
      setResultMessage("YOU WON !");
    } else {
      setUser({ ...user, credit: user.credit - bet });
      setResultMessage("You lost");
    }
  };

  const handleSpin = () => {
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
            disabled={bet < 20}
            className="btn btn-primary"
            onClick={handleBetDecrement}
          >
            -
          </button>
          <button
            disabled={bet >= user.credit - 10}
            className="btn btn-primary"
            onClick={handleBetIncrement}
          >
            +
          </button>
          <button
            disabled={bet === user.credit}
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
            <img src={image1} alt="placeholder" />
          </div>
          <div id="image-2" className="slot-images-size">
            <img src={image2} alt="placeholder" />
          </div>
          <div id="image-3" className="slot-images-size">
            <img src={image3} alt="placeholder" />
          </div>
        </div>
      </div>
      <div className="spin-button">
        <img
          src="./images/game/spinbutton.png"
          alt="Spin Button"
          onClick={handleSpin}
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
      <div id="leaderboard-table"></div>
      <div id="stop-logo">
        <img
          src="./images/game/when-the-fun-stops-stop.jpg"
          alt="When The Fun Stops, Stop"
        />
      </div>

      <style jsx>{`
        h1 {
          font-family: "quite_magicalregular" !important;
          font-size: 90px !important;
        }

        h2 {
          font-family: "quite_magicalregular" !important;
          font-size: 70px !important;
        }

        body {
          font-family: "Trebuchet MS", Helvetica, sans-serif !important;
          /* background-image: url("../images/sloth-theme/flying-sloth.jpg");
  background-repeat: no-repeat; */
          /* background-size: 100% */
        }

        table {
          margin: 0 auto;
          width: 500px !important;
        }

        input,
        select {
          height: 35px;
        }

        h1,
        #bet-header span,
        .credit-span {
          color: lightseagreen;
        }

        div#slot-machine {
          padding: 56px 43px 66px 43px;
          background-image: url(../images/game/redslotmachine2.png);
          background-repeat: no-repeat;
          background-size: 590px auto;
          margin: 27px auto 0;
          width: 590px;
        }

        #slot-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          /* background-color: blue; */
          width: 100%;
          height: 243px;
        }

        .slot-images-size {
          width: 33%;
        }

        .slot-images-size img {
          height: 160px;
        }

        #slot-machine-header div button {
          margin-left: 10px !important;
        }

        #spin-button {
          width: 100px;
          margin: 22px 0 0;
        }

        #bet-amount-input {
          width: 50px;
          margin-right: 10px;
        }

        #bet-header {
          font-size: 26px;
        }

        .text {
          font-size: 30px;
        }

        .text-magical {
          font-family: "quite_magicalregular" !important;
          font-size: 60px;
        }

        .form-container {
          padding: 4% 0 4% 45%;
          flex-direction: column;
          text-align: left;
        }

        .form-container-items {
          margin-top: 15px;
          border-radius: 6px;
        }

        #stop-logo {
          background-image: url("../images/game/Whenthefunstopsstop-color.jpg");
        }

        #stop-logo img {
          height: 100px;
        }
      `}</style>
    </div>
  );
};

export default GameScreen;
