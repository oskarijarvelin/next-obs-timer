import { Box,Heading } from '@chakra-ui/react'
import Moment from 'react-moment'
import moment from 'moment'

export default function Countdown({time}) {
    const secs = moment(time, 'HH:mm:ss').diff(moment(), 'seconds');
    const formatted = moment.utc(secs*1000).format('HH:mm:ss');
    const target = moment( moment().format('DD.MM.YYYY ') + time, 'DD.MM.YYYY HH:mm:ss');

    return (
        <Box p={10} h="100vh" display="flex" alignItems="center"  justifyContent="center" textAlign="center">
            <Heading id="time" fontSize="25vw" color="#FFF">
                {formatted}
            </Heading>

        </Box>
    )
}

Countdown.getInitialProps = async ({ query }) => {
    const {time} = query
    return {time}
}