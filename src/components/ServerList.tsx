import { useEffect } from "react"
import ServerCard from "./ServerCard";
import { Container, Center, SimpleGrid, Text } from "@chakra-ui/react";

const ServerList = (props: any) => {
    const bots = new Array(8);
    useEffect(()=>{
    }, []);
    return (
        <Container maxW='full' mb={8} mt={8}>
            <Center>
                <SimpleGrid columns={4} spacing={10}>
                    {[...bots].map((item, index) => (
                        <ServerCard key={index} id={index}/>
                    ))}
                </SimpleGrid>
            </Center>
            
        </Container>
    )
}

export default ServerList