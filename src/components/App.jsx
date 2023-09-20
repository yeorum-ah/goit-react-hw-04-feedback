import React, { useState, useEffect } from 'react';
import { FeedbackOptions } from "./FeedbackOptions/FeedBackOptions";
import { Statistics } from "./Statistic/Statistic";
import { Section } from "./Section/Section";
import { Notification } from "./Notification";


 export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {

    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const onLeaveFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = totalFeedback();
    if (total === 0) {
      return 0;
    }
    return (good / total) * 100;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={Object.keys(feedback)} />
      </Section>
      <Section title="Statistics">
        {totalFeedback() > 0 ? (
          <Statistics
            items={feedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
