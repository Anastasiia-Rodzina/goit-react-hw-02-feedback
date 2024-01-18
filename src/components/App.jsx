import { Component } from "react";
import FeedbackOptions from "../components/FeedbackOptions/FeedbackOptions"
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

renderFeedback = option => {
  this.setState((prevState) => ({
   [option]: prevState[option] + 1,
}));
};

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;
  return total;
};

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const total = this.countTotalFeedback();
  return Math.round((good * 100) / total) || 0;
}

  render (){
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    
    return (
    <>
<Section title="Please leave feedback">
  <FeedbackOptions 
options={Object.keys(this.state)} 
onLeaveFeedback={this.renderFeedback}/>
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
}