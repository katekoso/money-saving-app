import { FC, ReactElement } from 'react';
import Greeting from './Greeting/Greeting'
import styles from './home.module.scss';

const Home: FC = (): ReactElement => {
    return (
      <>
        <Greeting />
      </>  
    );
}    

export default Home;