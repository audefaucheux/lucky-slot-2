import Link from "next/link";
import Head from "next/head";

const App = () => {
  const user = {
    username: "Aude",
    credit: 100,
  };

  const slothImageCollection = {
    "Sloth-Theme": [
      "images/sloth-theme/javascript-ninja-sloth.png",
      "images/sloth-theme/ninja-sloth.png",
      "images/sloth-theme/red-ninja-sloth.png",
    ],
    "Cat-Theme": [
      "images/cat-theme/flying-cat.jpg",
      "images/cat-theme/mexican-cat.jpg",
      "images/cat-theme/scared-cat.jpg",
    ],
    "Duck-Theme": [
      "images/rubber-duck-theme/cloud-duck.jpg",
      "images/rubber-duck-theme/polka-dots-duck.jpg",
      "images/rubber-duck-theme/watermelon-duck.jpg",
    ],
    "George-Theme": [
      "images/george-theme/angry-george.jpg",
      "images/george-theme/happy-george.jpg",
      "images/george-theme/silly-george.jpg",
    ],
    "Flatiron-Theme": [
      "images/flatiron-theme/charly.png",
      "images/flatiron-theme/ian.png",
      "images/flatiron-theme/daniel.png",
    ],
    "Harry-Potter-Theme": [
      "images/harry-potter-theme/harrypotter.png",
      "images/harry-potter-theme/harrypotter2.png",
      "images/harry-potter-theme/harrypotter3.png",
    ],
    "Keanu-Theme": [
      "images/keanu-theme/angry-keanu.jpg",
      "images/keanu-theme/bill-and-ted-keanu.png",
      "images/keanu-theme/matrix-keanu.png",
    ],
    "South-Park-Theme": [
      "images/south-park-theme/ButtersStotch.png",
      "images/south-park-theme/cartman.png",
      "images/south-park-theme/Jimmy.png",
    ],
    "Zombie-Theme": [
      "images/zombie-theme/zombie1.jpg",
      "images/zombie-theme/zombie2.jpg",
      "images/zombie-theme/zombie3.jpg",
    ],
  };

  const getRandomNumber = (): number => Math.floor(Math.random() * 3);

  const spinResults = (): number[] => [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <div id="welcome" className="text-center"></div>
      <div id="form" className="text-center"></div>
      <div id="game-screen" className="text-center">
        <div id="slot-machine-header">
          <h2 data-user-id="0">
            Hi {user.username}. Your current credit is
            <span className="credit-span"> £{user.credit}</span>
          </h2>
        </div>
        <div id="slot-machine">
          <div id="slot-image-container">
            <div id="image-1" className="slot-images-size">
              <img
                src="./images/game/question-bear_dribbble.png"
                alt="placeholder"
              />
            </div>
            <div id="image-2" className="slot-images-size">
              <img
                src="./images/game/question-bear_dribbble.png"
                alt="placeholder"
              />
            </div>
            <div id="image-3" className="slot-images-size">
              <img
                src="./images/game/question-bear_dribbble.png"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
        <div id="spin-button">
          <img src="./images/game/spinbutton.png" alt="Spin Button" />
        </div>
        <div id="game-result-message" className="text">
          ⬆️⬆️⬆️ <span className="text-magical">Spin to play !!</span> ⬆️⬆️⬆️
        </div>
        <br />
        <div id="back-to-login">
          <button className="btn btn-danger">EXIT</button>
        </div>
        <br />
        <div id="leaderboard-table"></div>
        <div id="stop-logo">
          <img
            src="./images/game/when-the-fun-stops-stop.jpg"
            alt="When The Fun Stops, Stop"
          />
        </div>
      </div>
      <Link href="/login">Login page</Link>
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

        .spin-button {
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

export default App;
