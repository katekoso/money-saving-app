import { FC, ReactElement } from 'react';
import styles from './greeting.module.scss';
import greetingImage from './greeting-image.svg'

type GreetingProps = {
    name: string,
}

const Greeting: FC<GreetingProps> = ({ name }): ReactElement => {
    return (
        <div className={styles.greeting}>
            <h1>Привет</h1>
            <h1>{name}</h1>
            <object
                data={greetingImage}
                type="image/svg+xml"
                className={styles.greeting__image}
          ></object>
        </div>
    );
}

export default Greeting;