import React from 'react';

import { StatisticsList, StatisticsItem  } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
   return(
    <StatisticsList> 
    <StatisticsItem>Добре: {good}</StatisticsItem>
    <StatisticsItem>Нейтрально: {neutral}</StatisticsItem>
    <StatisticsItem>Погано: {bad}</StatisticsItem>
    <StatisticsItem>Всього: {total}</StatisticsItem>
    <StatisticsItem>Позитивних відгуків: {positivePercentage ? positivePercentage : 0}%</StatisticsItem>
    </StatisticsList>
   );
};




