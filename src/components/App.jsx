import { useState } from "react";
import FeedbackOptions from "../components/FeedbackOptions/FeedbackOptions"
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";



export const App = () => {
  
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const renderFeedback = option => {
    setFeedback((prevState) => ({
  ...prevState,
      [option]: prevState[option] + 1,

}));
};

const countTotalFeedback = () => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  return total;
};

const countPositiveFeedbackPercentage = () => {
  const { good } = feedback;
  const total = countTotalFeedback();
  return Math.round((good * 100) / total) || 0;
}

 const { good, neutral, bad } = feedback;
      const total = countTotalFeedback();
      const percentage = countPositiveFeedbackPercentage();
    
    return (
      
    <>
<Section title="Please leave feedback">
  <FeedbackOptions 
options={Object.keys(feedback)} 
onLeaveFeedback={renderFeedback}/>
</Section>

<Section title="Statistics">
  {total === 0 ?
  <Notification message="There is no feedback"></Notification> 
:
<Statistics 
good={good} 
neutral={neutral} 
bad={bad} 
total={total} 
positivePercentage={percentage}/>
}
</Section>
</>
    )
  
}

