import { Component } from "react";

//Components
import Section from "./Components/Feedback/Section";
import FeedbackOptions from "./Components/Feedback/FeedbackOptions";
import Statistics from "./Components/Feedback/Statistics";
import Notification from "./Components/Feedback/Notification";
import "./Components/Feedback/styles.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeStats = (name) => {
    this.setState((prev) => ({
      [name]: prev[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good ? Math.floor((good / this.countTotalFeedback()) * 100) : 0;
  };

  render() {
    return (
      <Section>
        <h3>PLEASE LEAVE YOUR FEEDBACK</h3>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleChangeStats}
        />
        {!!this.countTotalFeedback() ? (
          <Statistics
            stats={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </Section>
    );
  }
}

export default App;
