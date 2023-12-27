import { FC, ReactElement, useEffect, useState } from 'react';
import styles from './target.module.scss';
import TargetCard from './TargetCard/TargetCard';

export interface IData {
    title: string
    img: string
    status: boolean
    finalDate: string
    progress: number
    total: number
}
const data: IData = {
    title: 'одежда в школу',
    img: 'https://mylitta.ru/uploads/posts/2022-08/shkola-3.jpg',
    status: true,
    finalDate: '28.08.2024',
    progress: 95,
    total: 100
}

const Target: FC = (): ReactElement => {
    return <div className={styles.target}>
        <TargetCard {...data} />
        <TargetCard {...data} />
        <TargetCard {...data} />
        <TargetCard {...data} />
    </div>
}

export default Target;