import { themes } from "../Helpers/SlothImageCollection.data";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div id="welcome" className="text-center">
        <h1>Welcome to the Lucky Sloth!</h1>
      </div>
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
            {/* <input
              type="submit"
              value="PLAY"
              className="form-container-items btn btn-info"
            /> */}
            <Link href="/">
              <a>PLAY</a>
            </Link>
          </div>
        </form>
        <img
          src="https://media3.giphy.com/media/BCtjVLKRoFVza/source.gif"
          alt="sloth-gif"
        />
      </div>
    </>
  );
};

export default Login;
