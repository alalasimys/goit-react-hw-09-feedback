import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const FeedbackOptions = ({ onChangeStats }) => {
  return (
    <ButtonGroup color="secondary" aria-label="outlined secondary button group">
      <Button name="good" onClick={(e) => onChangeStats(e.currentTarget.name)}>
        Good
      </Button>
      <Button
        name="neutral"
        onClick={(e) => onChangeStats(e.currentTarget.name)}
      >
        Neutral
      </Button>
      <Button name="bad" onClick={(e) => onChangeStats(e.currentTarget.name)}>
        Bad
      </Button>
    </ButtonGroup>
  );
};

FeedbackOptions.propTypes = {
  onChangeStats: PropTypes.func.isRequired,
};

export default FeedbackOptions;
