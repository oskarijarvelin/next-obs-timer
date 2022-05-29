import React, {useEffect, useMemo, useState} from 'react'
import moment from 'moment'
import styles from '../index.module.css'

export default function Countdown({ time }) {
    const timeInSecs = moment(time, 'HH:mm:ss').diff(moment(), 'seconds');
    const [timeLeft, setTimeLeft] = useState(timeInSecs);

    const remainTime = useMemo(() => {
        const days = Math.floor(timeLeft / 24 / 3600);
        const hours = Math.floor((timeLeft - days * 24 * 3600) / 3600);
        const minutes = Math.floor((timeLeft - days * 24 * 3600 - hours * 3600) / 60);
        const seconds = (timeLeft - days * 24 * 3600 - hours * 3600) % 60;

        return {
            days,
            hours,
            minutes,
            seconds
        }
    }, [timeLeft]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(timeLeft => timeLeft !== 0 ? timeLeft - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div suppressHydrationWarning className={styles.container}>
            {String(remainTime.hours).padStart(2, '0')}:{String(remainTime.minutes).padStart(2, '0')}:{String(remainTime.seconds).padStart(2, '0')}
        </div>
    );
};

;

Countdown.getInitialProps = async ({ query }) => {
    const {time} = query
    return {time}
}