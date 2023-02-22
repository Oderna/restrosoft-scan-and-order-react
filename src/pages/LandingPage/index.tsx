import React from "react";
import { Stack, Grid, GridItem, Box, Text, Flex, Spacer, Image, HStack, Container as ChakraContainer, Button as ChakraButton, Circle } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons" //https://chakra-ui.com/docs/components/icon/usage
import { MdContentCopy, MdShoppingCart } from 'react-icons/md' //https://react-icons.github.io/react-icons/search?q=copy
import Avatar from 'react-avatar';
import { Navbar as ChakraNavbar } from "../../components/common/Navbar/Navbar";
import QRCode from "react-qr-code";
import { ScrollerMenu } from "../../components/common/ScrollerMenu";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    // ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { buttonTheme, modalTheme } from "./theme";
import { useTheme, Theme } from '../../context/ThemeContext';

export const theme = extendTheme({
  components: { ChakraButton: buttonTheme, Modal: modalTheme },
})

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
                <Box paddingTop='0.5em' bg='#DC9F00' marginRight='.5em' borderRadius='10px' height="100%">
                    <Stack spacing={0} align="center" className="item-centre">
                        <Text color='white'>Invite friends using</Text>
                        <Flex align={'center'} pt={"6px"}>
                            <Box w="133px" h="37px" bg='white' borderRadius='10px' marginRight='15px' filter={'drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));'}>
                                <HStack justifyContent={'center'} align={'center'}>
                                    <Text color={'#FFA700'} fontStyle="itialic" fontSize={'26px'} fontWeight='300'>123456</Text>
                                    <Icon as={MdContentCopy} color={'#c0bcbc'} />
                                </HStack>
                            </Box>
                            <Spacer />
                            <Text color='white'>OR</Text>
                            <Spacer />
                            <QRModal />
                        </Flex>
                    </Stack>
                </Box>
            </GridItem>
        </Grid>
    );
}

function QRModal(){
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider theme={theme}>
        <ChakraButton
            padding={"0px"}
            background="transperant"
            _hover={{
                background:"transperant",
            }}

            // on clicking this is triggered
            _active={{
                bg: 'transperant',
                transform: 'scale(0.98)',
                borderColor: '#2477b3',
            }} 
            onClick={onOpen}
        >
                <Image
                    className="upper-image"
                    objectFit='cover'
                    src='./qrcode-icon.svg' />
        </ChakraButton>

        <Modal size={"xs"} onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
            <ModalBody>
            <Box p={"15px"}  backgroundColor="white" borderRadius={"10px"}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value="google.com"
                    viewBox={`0 0 256 256`}
                    fgColor="#DC9F00"
                />
            </Box>
            </ModalBody>
            <ModalFooter justifyContent={"center"}>
                <Text 
                    color="white"
                    textAlign={"center"}
                    fontWeight="600"
                    fontSize={"22px"}
                    lineHeight="26px"
                >
                    SCAN TO JOIN
                </Text>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </ChakraProvider>
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
                    <Avatar name="Wim Mostmans" size="23" round={true} />
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
    const { theme, setTheme } = useTheme();
    console.log(theme);
    return (
        <div>
            <Stack spacing={2}>
                <Stack spacing={2} position={"sticky"} top="0" bg={'white'} width='100%' zIndex={"1"}>
                    {/* Need to use Sticky Navbar */}
                    <ChakraNavbar title='Alibaba Resturant' />
                    <TableInformation />
                    <ScrollerMenu />
                </Stack>
                <InfiniteScrollerMenu />
            </Stack>
            <CartButton />
        </div>
    );
}

export default LandingPage;