const Leaderboard = ({ users }) => {
  return (
    <div id="leaderboard-table">
      <h2>Leaderboard</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>£{user.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
