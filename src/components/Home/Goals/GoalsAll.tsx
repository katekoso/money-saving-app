import { FC, ReactElement, useEffect, useState } from 'react';
import styles from './goals.module.scss';
import Loading from '../../Loading';
import Goal from './Goal/Goal';

const Goals: FC = (): ReactElement => {
    const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [moneyLeft, setMoneyLeft] = useState(0);

    useEffect(() => {
		fetch('') 
				.then(response => {
                if (response.ok) { 
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так...');
                }
            })
            .then((response) => {
                setGoals(response);
		        setLoading(false);
            })
            .catch(() => setError(error));
	}, []); 

    return (
        <div className={styles.goals}>
            <h1>Важные цели</h1>
            <div>
                {
                    loading 
                    ?
                        (<Loading />)
                    : 
                    (
                        goals.map(goal => {
                            return <Goal name={goal.name} moneyLeft={() => setMoneyLeft(goal.total - goal.saved)} key={goal.id}/>
                        })
                    )     
                }
            </div>
        </div>
    );
}        

export default Goals;