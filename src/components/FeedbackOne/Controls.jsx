import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Feedback.styled';

export const Controls = ({ onGood, onNeutral, onBad }) => (
  <div>
    <Button type="button" onClick={onGood}>
      Добре
    </Button>
    <Button type="button" onClick={onNeutral}>
      Нейтрально
    </Button>
    <Button type="button" onClick={onBad}>
      Погано
    </Button>
  </div>
);


Controls.propTypes = {
    onGood: PropTypes.func.isRequired,
    onNeutral: PropTypes.func.isRequired,
    onBad: PropTypes.func.isRequired,
}