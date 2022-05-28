import { Box, Heading } from '@chakra-ui/react'
import Moment from 'react-moment'

export default function Clock() {
    return (
        <Box p={10} h="100vh" display="flex" alignItems="center"  justifyContent="center" textAlign="center">
            <Heading id="time" fontSize="25vw" color="#FFF">
                <Moment interval={1000} format="HH:mm:ss" />
            </Heading>
        </Box>
    )
}