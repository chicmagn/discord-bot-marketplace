import { useEffect } from "react"
import BotCard from "./BotCard";
import { Container, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { bots } from "../common/mock";

const BotList = (props: any) => {
    useEffect(()=>{
    }, []);
    return (
        <Container maxW='full' mb={8} mt={8}>
            <Center>
                <SimpleGrid columns={4} spacing={10}>
                    {[...bots].map((item, index) => (
                        <BotCard key={index} bot={item}/>
                    ))}
                </SimpleGrid>
            </Center>
            
        </Container>
    )
}

export default BotList