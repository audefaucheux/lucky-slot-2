const SpinButton = ({ user, handleSpin }) => {
  return (
    <button onClick={handleSpin} className="spin-button">
      SPIN
    </button>
  );
};

export default SpinButton;
