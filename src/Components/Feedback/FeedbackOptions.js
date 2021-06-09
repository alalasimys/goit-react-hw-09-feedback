import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup aria-label="outlined  button group">
      {Object.keys(options).map((key) => (
        <Button
          key={key}
          name={key}
          onClick={(e) => onLeaveFeedback(e.currentTarget.name)}
        >
          {key}
        </Button>
      ))}
    </ButtonGroup>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
