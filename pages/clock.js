import Moment from 'react-moment'
import styles from '../index.module.css'

export default function Clock() {
    return (
        <div suppressHydrationWarning className={styles.container}>
            <Moment interval={1000} format="HH:mm:ss" suppressHydrationWarning />
        </div>
    )
}
