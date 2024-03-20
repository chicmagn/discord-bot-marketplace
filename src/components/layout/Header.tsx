import { Link } from 'react-router-dom';
import { Container, HStack, Flex, Image, Spacer, Text} from "@chakra-ui/react";
import discordLogo from '/discord.svg'
import communeLogo from '/logo.svg'
import githubLogo from '/github.svg'
const Header = ()=> {

    return (
        <Container className='header' maxW='full' h='5.5rem' bg='discord.700' p='1.5rem' boxShadow='base'>
            <Flex>
                <HStack>
                    <Image src={communeLogo} w='2rem' h='2rem'></Image>
                    <Image src={discordLogo} w='2rem' h='2rem'></Image>
                    <Text fontSize='3xl' color='white'>ComDisBots</Text>
                </HStack>
                <Spacer></Spacer>
                <HStack spacing='1.5rem' >
                    <Link to='/home'><Text color='white'>Home</Text></Link>
                    <Link to='/bots'><Text color='white'>Bots</Text></Link>
                    <Link to='/servers'><Text color='white'>Servers</Text></Link>
                    <Link to='/emojis'><Text color='white'>Emojis</Text></Link>
                    <Link to='/addserver'><Text color='white'>Add Your Server</Text></Link>
                    <Link to='/addbot'><Text color='white'>Add Your Bot</Text></Link>
                    <Link to='https://github.com/chicmagn/discord-bot-marketplace'><HStack><Image src={githubLogo} w='1rem' h='1rem'/><Text color='white'>Source Code</Text></HStack></Link>
                    <Link to='https://discordapp.com/users'><Text color='white'>Login with Discord</Text></Link>
                    <Spacer></Spacer>
                </HStack>
            </Flex>
        
        </Container>
    )
}

export default Header;