import { FC, ReactElement } from 'react';
import styles from './goal.module.scss';

type GoalProps = {
    name: string,
    moneyLeft: number
}

const Goal: FC<GoalProps> = ({ name, moneyLeft }): ReactElement => {
    return (
        <div className={styles.goal}>
            <h4>{name}</h4>
            <p className={styles.goal__progress}>Прогресс цели</p>
            <div className={styles.goal__progressBar}>
                <div className={styles.progressBar__content}>
                    <span className={styles.progressBar__text}></span>
                </div>
            </div>
            <div className={styles.goals__bottom}>
              <div className={styles.goals__moneyLeft}>
                <span className={styles.goals__left}>Осталось собрать:</span>
                <span className={styles.goals__amount}>{moneyLeft} тыс</span>
              </div>
              <button className={styles.goals__btn} type="button">&gt;</button>
            </div>
        </div>
    );
}        

export default Goal;