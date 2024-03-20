import { SimpleGrid, VStack, Text, Box } from "@chakra-ui/react"
const Footer = () => {
    return (
        <Box className='footer' maxW='full' h='5rem' bg='discord.600' p={10}>
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
        </Box>
    )

}

export default Footer