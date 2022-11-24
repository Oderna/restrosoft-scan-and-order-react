import React from "react";
import { Stack, Grid, GridItem, Box, Text, Flex, Spacer, Image, HStack, Container as ChakraContainer, Button as ChakraButton, Circle } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons" //https://chakra-ui.com/docs/components/icon/usage
import { MdContentCopy, MdShoppingCart } from 'react-icons/md' //https://react-icons.github.io/react-icons/search?q=copy
import Avatar from 'react-avatar';
import { Navbar as ChakraNavbar } from "../components/common/Navbar/Navbar";

function TableInformation() {
    return (
        <Grid
            templateColumns='repeat(6, 1fr)'
            gap={2}
        >
            <GridItem h="96px" colSpan={2}>
                <Box h='inherit' marginLeft='0.5em' paddingY='1em' bg='#DC9F00' borderRadius='10px'>
                    <Stack align={'center'}>
                        <Text color='white'>Table : 1</Text>
                        <Text color='white'>Guest : 2</Text>
                    </Stack>
                </Box>
            </GridItem>
            <GridItem h="96px" colSpan={4}>
                <Box paddingTop='0.5em' bg='#DC9F00' marginRight='.5em' borderRadius='10px'>
                    <Stack spacing={0} align="center" className="item-centre">
                        <Text color='white'>Invite friends using</Text>
                        <Flex align={'center'}>
                            <Box w="133px" h="37px" bg='white' borderRadius='10px' marginRight='15px' filter={'drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));'}>
                                <HStack justifyContent={'center'} align={'center'}>
                                    <Text color={'#FFA700'} fontStyle="itialic" fontSize={'26px'} fontWeight='300'>123456</Text>
                                    <Icon as={MdContentCopy} color={'#c0bcbc'} />
                                </HStack>
                            </Box>
                            <Spacer />
                            <Text color='white'>OR</Text>
                            <Spacer />
                            <Box>
                                <Image
                                    className="upper-image"
                                    objectFit='cover'
                                    src='./qrcode-icon.svg' />
                            </Box>
                        </Flex>
                    </Stack>
                </Box>
            </GridItem>
        </Grid>
    );
}

function ScrollerCategories() {
    return (
        // Need to remove the  scroller line 
        // POC Requirement for Carousel
        <Box h="44px" backgroundColor={'rgba(255, 167, 0, 0.1)'} boxShadow='0px 1px 9px rgba(0, 0, 0, 0.3)'>
            <HStack align={'center'} justifyContent='center' pt={'0.6em'} overflowX='scroll' overflowY={'hidden'} whiteSpace='nowrap'>
                <Box bg={'#FFA700'} borderRadius='6px' mixBlendMode={'normal'} filter='drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.4))' px={'9px'} py={'5px'} >
                    <Text color={'white'} fontSize={'10px'}>Starter</Text>
                </Box>
                <Box bg={'white'} borderRadius='6px' border={'0.5px solid #FFA700'} mixBlendMode={'normal'} px={'9px'} py={'5px'}>
                    <Text color={'#FFA700'} fontSize={'10px'}>Breverages</Text>
                </Box>
                <Box bg={'white'} borderRadius='6px' border={'0.5px solid #FFA700'} mixBlendMode={'normal'} px={'9px'} py={'5px'}>
                    <Text color={'#FFA700'} fontSize={'10px'}>Main Course</Text>
                </Box>
                <Box bg={'white'} borderRadius='6px' border={'0.5px solid #FFA700'} mixBlendMode={'normal'} px={'9px'} py={'5px'}>
                    <Text color={'#FFA700'} fontSize={'10px'}>Desserts</Text>
                </Box>
                <Box bg={'white'} borderRadius='6px' border={'0.5px solid #FFA700'} mixBlendMode={'normal'} px={'9px'} py={'5px'}>
                    <Text color={'#FFA700'} fontSize={'10px'}>Desserts</Text>
                </Box>
            </HStack>
        </Box>
    )
}

function ItemCard() {
    return (
        <ChakraContainer p={'0px'} h={'194px'} bg='rgba(220, 159, 0, 0.15)' border={'1px solid #ECEDED'} borderRadius={'15px'}>
            <Stack>
                <Image
                    className="upper-image"
                    objectFit='cover'
                    src='./menu-item.svg' />
            </Stack>
            <Box textAlign={'center'}>
                <Text color={'#DC9F00'}>french fries</Text>
            </Box>
            <Box>
                <Flex mx={'9px'}>
                    <Text color={'#DC9F00'}>Category:</Text>
                    <Spacer />
                    <Avatar name="Wim Mostmans" size="23" />
                </Flex>
            </Box>
        </ChakraContainer>
    )
}

function InfiniteScrollerMenu() {
    return (
        //Need To Implement Infinite Scrolling
        <Box px={'4px'}>
            <Stack>
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    gap={2}
                >
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    gap={3}
                >
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    gap={3}
                >
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    gap={3}
                >
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns='repeat(2, 1fr)'
                    gap={3}
                >
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                    <GridItem>
                        <ItemCard />
                    </GridItem>
                </Grid>
            </Stack>
        </Box>
    )
}

function CartButton() {
    return (
        <Box float={"left"} position={'fixed'} right={'0'} bottom={'0'} mr='15px'>
            <ChakraButton bg={'#DC9F00'} boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)' borderRadius={'5px'}>
                <Icon as={MdShoppingCart} color={'white'} mr='8px' />
                <Text color={'white'}>Go To Cart</Text>
            </ChakraButton>
            <Circle size={"20px"} bg="red" position={"relative"} top="-48px" left={"-8px"}>
                <Text color={"white"} fontSize="15px">1</Text>
            </Circle>
        </Box>
    )
}

function LandingPage() {
    return (
        <div>
            <Stack spacing={2}>
                <Stack spacing={2} position={"sticky"} top="0" bg={'white'} width='100%' zIndex={"1"}>
                    {/* Need to use Sticky Navbar */}
                    <ChakraNavbar title='Alibaba Resturant' />
                    <TableInformation />
                    <ScrollerCategories />
                </Stack>
                <InfiniteScrollerMenu />
            </Stack>
            <CartButton />
        </div>
    );
}

export default LandingPage;