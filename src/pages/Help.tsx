import React from "react";
import './Help.scss';
import HelpItem from "../components/HelpItem/HelpItem";
import stepOne from '../images/HelpStepOne.jpg'
import stepTwo from '../images/HelpStepTwo.jpg'
import stepThree from '../images/HelpStepThree.jpg'
import stepFour from '../images/HelpStepFour.jpg'

const HelpPage: React.FC = () => {
  return (
    <ol className="help">
      <HelpItem 
        title="Шаг 1"
        image={stepOne}
        alt="смартфон"
        discription="Войдите на платформу Pay and Save"
      />
      <HelpItem 
        title="Шаг 2"
        image={stepTwo}
        alt="мишень"
        discription="Создайте цель"
      />
      <HelpItem 
        title="Шаг 3"
        image={stepThree}
        alt="деньги в мешках"
        discription="Настройте списание средств"
      />
      <HelpItem 
        title="Шаг 4"
        image={stepFour}
        alt="страла в центре мишени"
        discription="Выполните цель"
      />
    </ol>
  )
};

export default HelpPage;
