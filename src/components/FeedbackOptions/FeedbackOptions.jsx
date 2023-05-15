import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, Button, } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {Object.keys(options).map((item, i) => (
        <Button key={i + 1} type="button" onClick={onLeaveFeedback} name={item}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Button>
      ))}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.object,
}

// (
//   <ButtonContainer>
//     <Button type="button" onClick={onGood}>
//       Добре
//     </Button>
//     <Button type="button" onClick={onNeutral}>
//       Нейтрально
//     </Button>
//     <Button type="button" onClick={onBad}>
//       Погано
//     </Button>
//   </ButtonContainer>
// );
