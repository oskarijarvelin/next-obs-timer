import Moment from 'react-moment'
import moment from 'moment'
import styles from '../index.module.css'

export default function Countdown({time}) {
    const secs = moment(time, 'HH:mm:ss').diff(moment(), 'seconds');
    const formatted = moment.utc(secs*1000).format('HH:mm:ss');
    const target = moment( moment().format('DD.MM.YYYY ') + time, 'DD.MM.YYYY HH:mm:ss');

    return (
        <div suppressHydrationWarning className={styles.container}>
            {formatted}
        </div>
    )
}

Countdown.getInitialProps = async ({ query }) => {
    const {time} = query
    return {time}
}