import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Container } from './Feedback.styled';

export class Feedback extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleStat = ({ currentTarget: { name } }) => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  // handleGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // handleNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // handleBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, val) => acc + val, 0);
  countPositiveFeedbackPercentage = () =>
    Math.floor((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const countTotal = this.countTotalFeedback(this.props);
    const positiveFeedback = this.countPositiveFeedbackPercentage(this.props);
    const onLeaveFeedback = this.hendleStat;

    return (
      <Container>
        <Section title="Будь ласка, залиште відгук" />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={onLeaveFeedback}
        />
        <Section />
        <Section title="Статистика" />
        {countTotal ? (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotal}
              positivePercentage={positiveFeedback}
            />
          </>
        ) : (
          <Notification message="Зворотного зв'язку немає" />
        )}
      </Container>
    );
  }
}
