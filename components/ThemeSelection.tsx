const ThemeSelection = ({ themeSelected, setThemeSelected }) => {
  const themes = ["sloth", "cat", "duck", "george", "keanu", "south-park"];

  const formatTheme = (theme: string) => {
    const themeWords = theme.split("-");
    const capitalizeString = (word: string) =>
      word.charAt(0).toUpperCase() + word.slice(1);
    return themeWords.map((word) => capitalizeString(word)).join(" ");
  };
  const handleThemeSelected = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setThemeSelected(event.target.value);

  return (
    <>
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
    </>
  );
};

export default ThemeSelection;
