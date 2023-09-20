import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedBackOptions";
import { Statistics } from "./Statistic/Statistic";
import { Section } from "./Section/Section";
import { Notification } from "./Notification";


export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

onLeaveFeedback = (feedbackType) => {
  this.setState((prevState) => ({
    ...prevState,
    [feedbackType]: prevState[feedbackType] + 1,
  }));
};

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    if (totalFeedback === 0) {
      return 0;
    }
    return (good / totalFeedback) * 100;
  }
  render() {
    return (
    <>
    <Section title="Please leave feedback">
    <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={Object.keys(this.state)}/>
    </Section>
    <Section title="Statistics">
    {this.totalFeedback()  > 0 ? (
    <Statistics items={this.state} 
                countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
    /> 
    ) : (
      <Notification message="There is no feedback" />
    )}
    </Section>
    </>
  );}
}