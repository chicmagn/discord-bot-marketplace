import { Center, Container, Image, VStack, Text, InputGroup, InputLeftElement, Input, InputRightElement, CheckboxIcon, HStack, Tag, Box } from "@chakra-ui/react"
import discordLogo from '/discord.svg'
import { botCategoryList } from "../common/mock"
import BotList from "../components/BotList"
import ServerList from "../components/ServerList"
const Home = () => {
    return (
        <Box maxW='full' className="homePage" p='1.5rem' >
            <VStack>
                <Center p={8}>
                    <VStack spacing='2rem'>
                        <Image src={discordLogo} w='5rem' h='5rem'></Image>
                        <Text fontSize='4xl' color='white'>Get your next best bot for your server!</Text>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                >
                                🔎
                            </InputLeftElement>
                            <Input placeholder='Search for your bots, discord, emojis' color='white'/>
                            <InputRightElement>
                                <CheckboxIcon color='green.500' />
                            </InputRightElement>
                        </InputGroup>
                    </VStack>
                </Center>
                <HStack mb={8}>
                    {botCategoryList.map((element, index) => (
                       <Tag variant='solid' fontSize='xl' color='white' bg='discord.100' key={index}>{element}</Tag>
                    ))}
                </HStack>
                <Text fontSize='4xl' color='white'>Top Bots</Text>
                <BotList search={'top'}/>
                <Text fontSize='4xl' color='white'>New Bots</Text>
                <BotList search={'top'}/>
                <Text fontSize='4xl' color='white'>Largest Servers</Text>
                <ServerList search={'top'}/>
            </VStack>
        </Box>
    )
}

export default Home