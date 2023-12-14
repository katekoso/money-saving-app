import "./Navigation.scss";
import { useState } from "react";
import { Link } from 'react-router-dom';
import plus from '../../images/Plus.svg'
import logoHomeDef from '../../images/HomeDefault.svg'
import logoHomeAct from '../../images/HomeHover.svg'
import logoTargetDef from '../../images/TargetDefault.svg'
import logoTargetAct from '../../images/TargetHover.svg'
import logoSettingDef from '../../images/SettingDefault.svg'
import logoSettingAct from '../../images/SettingHover.svg'
import logoHelpDef from '../../images/HelpDefault.svg'
import logoHelpAct from '../../images/HelpHover.svg'
import logOut from '../../images/Logout.svg'

const NavigationComponent: React.FC = () => {

const [isActivHome, setIsActivHome] = useState(true);
const [isActivTarget, setIsActivTarget] = useState(false);
const [isActivSetting, setIsActivSetting] = useState(false);
const [isActivHelp, setIsActivHelp] = useState(false);

const handlLogoNewTarget = () => {
  setIsActivHome(false);
  setIsActivTarget(false);
  setIsActivSetting(false);
  setIsActivHelp(false);
}

const handlLogoHome = () => {
  setIsActivHome(true);
  setIsActivTarget(false);
  setIsActivSetting(false);
  setIsActivHelp(false);
}

const handlLogoTarget = () => {
  setIsActivHome(false);
  setIsActivTarget(true);
  setIsActivSetting(false);
  setIsActivHelp(false);
}

const handlLogoSetting = () => {
  setIsActivHome(false);
  setIsActivTarget(false);
  setIsActivSetting(true);
  setIsActivHelp(false);
}

const handlLogoHelp = () => {
  setIsActivHome(false);
  setIsActivTarget(false);
  setIsActivSetting(false);
  setIsActivHelp(true);
}

const handlLogoNewLogOut = () => {
  setIsActivHome(false);
  setIsActivTarget(false);
  setIsActivSetting(false);
  setIsActivHelp(false);
}

  return (
    <div className="navigation">
      <div className="navigation__logo"></div>
      <nav>
        <ul className="navigation_ul">
          <li>
            <Link to="/newtarget"
              onClick={handlLogoNewTarget}>
              <img
                src={plus}
                alt='лого добавления цели'
                className="navigation__icon navigation__icon_name_plus"
              />
            </Link>
          </li>
          <li>
            <Link to="/"
              onClick={handlLogoHome}>
              <img
                src={`${isActivHome ? logoHomeAct : logoHomeDef}`}
                alt='лого главной страницы'
                className="navigation__ikon"
              />
            </Link>
          </li>
          <li>
            <Link to="/target"
              onClick={handlLogoTarget}>
              <img
                src={`${isActivTarget ? logoTargetAct : logoTargetDef}`}
                alt='лого страницы целей'
                className="navigation__ikon"
              />
            </Link>
          </li>
          <li>
            <Link to="/settings"
              onClick={handlLogoSetting}>
              <img
                src={`${isActivSetting ? logoSettingAct : logoSettingDef}`}
                alt='лого настроек'
                className="navigation__ikon navigation__icon_name_setting"
              />
            </Link>
          </li>
          <li>
            <Link to="/help"
              onClick={handlLogoHelp}>
              <img
                src={`${isActivHelp ? logoHelpAct : logoHelpDef}`}
                alt='лого помощь'
                className="navigation__ikon"
              />
            </Link>
          </li>
          <li>
            <Link to="/login"
              onClick={handlLogoNewLogOut}>
              <img
                src={logOut}
                alt='разлогиниться'
                className="navigation__ikon"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationComponent;
