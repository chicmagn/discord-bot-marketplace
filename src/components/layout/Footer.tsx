import { Container, SimpleGrid, VStack, Text } from "@chakra-ui/react"
const Footer = () => {
    return (
        <Container className='footer' maxW='8xl' h='5rem' bg='discord.900' p={10}>
            <SimpleGrid columns={4}>
                <VStack>
                    <Text color='white'>Resources</Text>
                </VStack>
                <VStack>
                    <Text color='white'>Community</Text>
                </VStack>
                <VStack>
                    <Text color='white'>Policies</Text>
                </VStack>
                <VStack>
                    <Text color='white'>Contact</Text>
                </VStack>
            </SimpleGrid>
        </Container>
    )

}

export default Footer