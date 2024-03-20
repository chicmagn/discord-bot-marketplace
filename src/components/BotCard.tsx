import { Card, CardHeader, CardBody, CardFooter, Image, Text, Stack, Heading, Divider, ButtonGroup, Button, HStack, Flex, Tag, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
const BotCard = (props: any) => {
    const navigate = useNavigate();
    const bot = props.bot;

    const gotoDetail = ()=>{
        navigate(`/bots/${bot.idx}`)
    }

    const boxShadowStyle = {
        boxShadow: '2px 2px 4px 2px #5865f2',
    };

    return (
        <Card maxW='xs' variant='outline' bg='discord.900' boxShadow={boxShadowStyle.boxShadow}>
            <CardBody padding='0px'>
                <Image
                    src={bot.bgUrl}
                    alt={bot.name}
                    borderRadius='lg'
                    h='8rem'
                    w='full'
                    objectFit='cover'
                    />
                <Image
                    src={bot.avatarUrl}
                    alt={bot.developer}
                    borderRadius='full'
                    w='3.5rem'
                    h='3.5rem'
                    position='absolute'
                    top='5rem'
                    left='1rem'
                    />
                <Stack spacing='3' p={3}>
                    <Text fontSize='md' fontWeight='500' color='white'>{bot.name}</Text>
                    <HStack>
                        {bot.tags.split(',').map((item: any, index: any)=> (
                            <Tag key={index} bg='discord.100' color='white'>{item}</Tag>
                        ))}
                        
                    </HStack>
                    <Text color='gray.50' fontSize='sm'>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter p={1} >
                <ButtonGroup spacing='1'>
                    <Button variant='ghost' colorScheme='blue' size='sm' onClick={gotoDetail}>
                        View
                    </Button>
                    <Button variant='ghost' colorScheme='blue' size='sm'>
                        Add
                    </Button>
                    <Button variant='ghost' colorScheme='blue' size='sm'>
                        Upvote
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        
    )
}

export default BotCard