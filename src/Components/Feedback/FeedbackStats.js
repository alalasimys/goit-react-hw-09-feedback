import PropTypes from "prop-types";

const FeedbackStats = ({ stats: { good, neutral, bad }, total, positive }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positive}%</p>
    </>
  );
};

FeedbackStats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default FeedbackStats;
