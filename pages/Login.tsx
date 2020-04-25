// import "../styles/global.css";

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
    <>
      <h1>Welcome to the Lucky Sloth!</h1>
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
    </>
  );
};

export default Login;
