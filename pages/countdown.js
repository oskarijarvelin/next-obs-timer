import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import styles from '../index.module.css'

export default function Countdown({time}) {
    const secs = moment(time, 'HH:mm:ss').diff(moment(), 'seconds');
    const [hour, setHour] = useState(moment.utc(secs*1000).format('HH:mm:ss'));

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(moment.utc(secs*1000).format('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(interval);
    }, [secs]);

    return (
        <div suppressHydrationWarning className={styles.container}>
            {hour}
        </div>
    )
}

Countdown.getInitialProps = async ({ query }) => {
    const {time} = query
    return {time}
}