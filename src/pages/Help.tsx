import React from "react";
import './Help.scss';
import stepOne from '../images/HelpStepOne.jpg'
import stepTwo from '../images/HelpStepTwo.jpg'
import stepThree from '../images/HelpStepThree.jpg'
import stepFour from '../images/HelpStepFour.jpg'

const HelpPage: React.FC = () => {
  return (
    <ol className="help">
      <li className="help__item">
        <h2 className="help__title">Шаг 1</h2>
        <img src={stepOne} alt="смартфон" />
        <p className="help__discription">Войдите на платформу Pay and Save</p>
      </li>
      <li className="help__item">
        <h2 className="help__title">Шаг 2</h2>
        <img src={stepTwo} alt="мишень" />
        <p className="help__discription">Создайте цель</p>
      </li>
      <li className="help__item">
        <h2 className="help__title">Шаг 3</h2>
        <img src={stepThree} alt="деньги в мешках" />
        <p className="help__discription">Настройте списание средств</p>
      </li>
      <li className="help__item">
        <h2 className="help__title">Шаг 4</h2>
        <img src={stepFour} alt="страла в центре мишени" />
        <p className="help__discription">Выполните цель</p>
      </li>
    </ol>
  )
};

export default HelpPage;
