const TopBanner = ({ user, setUser }) => {
  return (
    <div id="top-banner">
      <img src="./images/game/sloth-logo.png" alt="" />
      <div id="current-user">
        <div className="text">{user.username} | </div>
        <button className="btn btn-danger" onClick={() => setUser({})}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
