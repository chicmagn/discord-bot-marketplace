import { useEffect } from "react"
import BotCard from "./BotCard";
import { Container, Center, SimpleGrid } from "@chakra-ui/react";
import { bots } from "../common/mock";

const BotList = () => {
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