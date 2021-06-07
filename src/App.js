import { Component } from "react";

//Components
import Section from "./Components/Feedback/Section";
import FeedbackOptions from "./Components/Feedback/FeedbackOptions";
import FeedbackStats from "./Components/Feedback/FeedbackStats";
import Notification from "./Components/Feedback/Notification";

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

  getTotal = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  getPositivePercentage = () => {
    const { good } = this.state;
    return good ? Math.floor((good / this.getTotal()) * 100) : 0;
  };

  render() {
    return (
      <Section>
        <FeedbackOptions onChangeStats={this.handleChangeStats} />
        {!!this.getTotal() ? (
          <FeedbackStats
            stats={this.state}
            total={this.getTotal()}
            positive={this.getPositivePercentage()}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </Section>
    );
  }
}

export default App;
