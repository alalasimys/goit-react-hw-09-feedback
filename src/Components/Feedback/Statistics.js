import PropTypes from "prop-types";

const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <div className="Statistics">
      {Object.entries(stats).map((entry) => (
        <p key={entry[0]}>
          <span className="StateName">{entry[0]}:</span> {entry[1]}
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
