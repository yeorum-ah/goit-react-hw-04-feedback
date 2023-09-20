import { StatsList, StatsNum } from "./Statistic.styled";

export const Statistics = ({items, countPositiveFeedbackPercentage}) => {
    return (
        <div>
             <StatsList>
        <li>Good: <StatsNum>{items.good}</StatsNum></li>
        <li>Neutral: <StatsNum>{items.neutral}</StatsNum></li>
        <li>Bad: <StatsNum>{items.bad}</StatsNum></li>
        <li>Positive Feedback Percentage: <StatsNum>{Math.round(countPositiveFeedbackPercentage())}%</StatsNum> </li>
      </StatsList>
        </div>
    );
};