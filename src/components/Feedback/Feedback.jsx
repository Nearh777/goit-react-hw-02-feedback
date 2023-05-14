import React from 'react';
import PropTypes from 'prop-types';
import { Controls } from './Controls';
import { Container } from './Feedback.styled';

export class Feedback extends React.Component {
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

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => Object.values(this.state).reduce((acc, val) => acc + val, 0);
    
  countPositiveFeedbackPercentage = () => Math.fround((this.state.good / this.countTotalFeedback()) * 100);

  // countTotalFeedback = () => {
  //   this.setState(() => ({
  //     total: Object.values(this.state).reduce((acc, val) => acc + val, 0),
  //   }));
  // };

  render() {
    return (
      <Container>
        <h2>Будь ласка, залиште відгук</h2>
        <Controls
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
        <h3>Статистика</h3>
        <p>Добре: {this.state.good}</p>
        <p>Нейтрально: {this.state.neutral}</p>
        <p>Погано: {this.state.bad}</p>
        <p>Всього: {this.countTotalFeedback(this.props)}</p>
        <p>Позитивних відгуків: {this.countPositiveFeedbackPercentage(this.props).toFixed(2)} %</p>
      </Container>
    );
  }
}
