import { Container, Text } from "@chakra-ui/react"
import BotList from "../components/BotList"
const BotListPage =()=> {
    return (
        <Container maxW='full'>
            <Text fontSize='4xl' color='white'>Top Bots</Text>
            <BotList search={'top'}/>
        </Container>
    )
}

export default BotListPage