import { useContext } from 'react'
import AppContext from '../context'
import { Box, Stack, Button, Text, Heading } from '@chakra-ui/react'
import Moment from 'react-moment'

export default function Index() {
    const { time, setTime, stop, setStop } = useContext(AppContext);

    const start = (event) => {
        setTime( new Date() );
        setStop( !stop );
    }

    const reset = (event) => {
        setTime( new Date() );
    }

    return (
        <Box p={10} h="100vh" display="flex" alignItems="center"  justifyContent="center" textAlign="center">
            <Heading fontSize="25vw" color="#FFF">
                <Moment interval={1000} format="HH:mm:ss" />
            </Heading>
        </Box>
    )
}