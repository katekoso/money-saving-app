import { FC, ReactElement, useEffect, useState } from 'react';
import styles from './targetCard.module.scss';
import { IData } from '../Target';

const TargetCard: FC<IData> = (props): ReactElement => {
    return <div className={styles.card}>
        <div className={styles.card__header}>
            <h1 className={styles.card__title}>{props.title}</h1>
            <a href='/' className={styles.card__link}>next</a>
        </div>

    </div>
}

export default TargetCard;