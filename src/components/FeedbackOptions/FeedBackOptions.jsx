import { BtnWraper, Btn } from "./FeedbackOptions.styled";


export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
      <BtnWraper>
        {options.map(value => (
          <Btn key={value} onClick={() => onLeaveFeedback(value)}>
            {value}
          </Btn>
        ))}
      </BtnWraper>
    );
  };