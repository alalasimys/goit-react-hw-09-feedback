import PropTypes from "prop-types";

const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <div className="Statistics">
      {Object.entries(stats).map(([first, second]) => (
        <p key={first}>
          <span className="StateName">{first}:</span> {second}
        </p>
      ))}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
