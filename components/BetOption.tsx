const BetOption = ({ bet, setBet, user }) => {
  const handleBetDecrement = () => setBet(bet - 10);
  const handleBetIncrement = () => setBet(bet + 10);

  return (
    <div id="bet-container">
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
  );
};

export default BetOption;
