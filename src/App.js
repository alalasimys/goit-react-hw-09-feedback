import { useState } from "react";

//Components
import Section from "./Components/Feedback/Section";
import FeedbackOptions from "./Components/Feedback/FeedbackOptions";
import Statistics from "./Components/Feedback/Statistics";
import Notification from "./Components/Feedback/Notification";
import "./Components/Feedback/styles.css";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = (name) => {
    switch (name) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;

      default:
        console.warn(`Тип поля - ${name} не обрабатывается`);
    }
  };

  const feedbackOptions = { good, neutral, bad };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.floor((good / countTotalFeedback()) * 100) : 0;
  };

  return (
    <Section>
      <h3>PLEASE LEAVE YOUR FEEDBACK</h3>
      <FeedbackOptions
        options={feedbackOptions}
        onLeaveFeedback={handleChange}
      />
      {!!countTotalFeedback() ? (
        <Statistics
          stats={feedbackOptions}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </Section>
  );
};

export default App;
