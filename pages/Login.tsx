const Login = () => {
  const themes: string[] = [
    "Sloth Theme",
    "Cat Theme",
    "Duck Theme",
    "Flatiron Theme",
    "George Theme",
    "Harry Potter Theme",
    "Keanu Theme",
    "South Park Theme",
    "Zombie Theme",
  ];

  return (
    <div id="welcome" className="text-center">
      <div id="form" className="text-center"></div>
      <div className="form-container">
        <form id="create-user-form">
          <input
            type="text"
            className="form-container-items"
            placeholder="enter username..."
          />
          <div className="form-container-items">
            <select id="theme-dropdown" className="form-container-items">
              {themes.map((theme, index) => (
                <option key={index} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>
          <div className="form-container-items">
            <input
              type="submit"
              value="PLAY"
              className="form-container-items btn btn-info"
            />
          </div>
        </form>
        <img
          src="https://media3.giphy.com/media/BCtjVLKRoFVza/source.gif"
          alt="sloth-gif"
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

export default Login;
