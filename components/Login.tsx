import { useState } from "react";

const Login = ({ findUser }) => {
  const [username, setUsername] = useState("");
  const [themeSelected, setThemeSelected] = useState("");

  const themes = ["sloth", "cat", "duck", "george", "keanu", "south-park"];

  const formatTheme = (theme: string) => {
    const themeWords = theme.split("-");
    const capitalizeString = (word: string) =>
      word.charAt(0).toUpperCase() + word.slice(1);
    return themeWords.map((word) => capitalizeString(word)).join(" ");
  };

  const handleUsersnameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const handleThemeSelected = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setThemeSelected(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    findUser({ username, theme: themeSelected });
  };

  return (
    <div id="login-content" className="center">
      <h1 className="text-center sea-green">Welcome to the Lucky Sloth!</h1>
      <form
        id="create-user-form"
        onSubmit={handleSubmit}
        className="form-container"
      >
        <input
          type="text"
          className="form-container-items"
          placeholder="enter username..."
          onChange={handleUsersnameChange}
          required
        />
        <select
          id="theme-dropdown"
          className="form-container-items"
          onChange={handleThemeSelected}
          required
        >
          <option value="">Select theme...</option>
          {themes.map((theme, index) => (
            <option key={index} value={theme}>
              {formatTheme(theme)}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value="PLAY"
          className="form-container-items btn btn-info"
        />
      </form>
      <img
        src="https://media3.giphy.com/media/BCtjVLKRoFVza/source.gif"
        alt="sloth-gif"
        className="center"
      />
    </div>
  );
};

export default Login;
