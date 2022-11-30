/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import './index.css';
import { Stack, Box, Text, Flex, Spacer, Image, HStack, Container as ChakraContainer, Button as ChakraButton, Circle } from "@chakra-ui/react";
import Avatar from 'react-avatar';
import {Card as BootstrapCard , Button as BootstrapButton} from 'react-bootstrap';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { MenuItemProvider, useMenuItem } from "../../../pages/LandingPage/MenuItemContext";

// function ItemCard() {
//     return (
//         <ChakraContainer p={'0px'} h={'194px'} bg='rgba(220, 159, 0, 0.15)' border={'1px solid #ECEDED'} borderRadius={'15px'}>
//             <Stack>
//                 <Image
//                     className="upper-image"
//                     objectFit='cover'
//                     src='./menu-item.svg' />
//             </Stack>
//             <Box textAlign={'center'}>
//                 <Text color={'#DC9F00'}>french fries</Text>
//             </Box>
//             <Box>
//                 <Flex mx={'9px'}>
//                     <Text color={'#DC9F00'}>Category:</Text>
//                     <Spacer />
//                     <Avatar name="Wim Mostmans" size="23" />
//                 </Flex>
//             </Box>
//         </ChakraContainer>
//     )
// }

export function ItemCard({ category, name } : { category: string, name: string }) {
    return (
        <BootstrapCard style={{ width: '100%', background: 'rgba(220, 159, 0, 0.15)' }}>
            <BootstrapCard.Img variant="top" src="./menu-item.svg" />
            <BootstrapCard.Body className="item-card-body">
                <BootstrapCard.Title style={{
                    padding: '2px'
                }}>{name}</BootstrapCard.Title>
                <BootstrapCard.Text>
                <Flex mx={'9px'}>
                    <Text color={'#DC9F00'}>Category: {category}</Text>
                    <Spacer />
                    <Avatar name={name} size="23" />
                </Flex>
                </BootstrapCard.Text>
            </BootstrapCard.Body>
        </BootstrapCard>
    )
}

// function ItemAddedCard() {
//     return (
//         <ChakraContainer p={'0px'} h={'194px'} bg='rgba(220, 159, 0, 0.15)' border={'1px solid #ECEDED'} borderRadius={'15px'}>
//             <ChakraContainer m={"0px"}>
//                     <Image
//                         className="upper-image"
//                         objectFit='cover'
//                         src='./menu-item.svg'
//                         filter='grayscale(80%);' 
//                         // blur='10px'
//                         // brightness='40%'
//                     />
//                     <Box
//                         margin={"0px !important"}
//                         h={"40px"}
//                         w={"81px"}
//                         backgroundColor="#DC9F00"
//                         position="relative"
//                         top="-80px"
//                         right="-50px"
//                     >
//                     </Box>
//             </ChakraContainer>
//             <Box textAlign={'center'}>
//                 <Text color={'#DC9F00'}>french fries</Text>
//             </Box>
//             <Box>
//                 <Flex mx={'9px'}>
//                     <Text color={'#DC9F00'}>Category:</Text>
//                     <Spacer />
//                     <Avatar name="Wim Mostmans" size="23" />
//                 </Flex>
//             </Box>
//         </ChakraContainer>
//     )
// }

export function ItemAddedCard({ category, name, index, setData } : { category: string, name: string, index: number, setData: Function}) {

    const [orderCount, setOrderCount] = useState(0)

    return (
        <BootstrapCard style={{ width: '100%', background: 'rgba(220, 159, 0, 0.15)' }}>
            <BootstrapCard.Img className="item-added-card-img" variant="top" src="./menu-item.svg"/>
            <BootstrapCard.ImgOverlay>
            <Image
                className="upper-image"
                objectFit='cover'
                src='./add-btn.svg'
                position="relative"
                top="25px"
                left="40px"
            />
            </BootstrapCard.ImgOverlay>
            <BootstrapCard.Body className="item-card-body">
                <BootstrapCard.Title>{name}</BootstrapCard.Title>
                <BootstrapCard.Text>
                    <Flex
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        align={"center"}
                        px="25px"
                    >
                        <ChakraButton onClick={() => setOrderCount(orderCount+1)}><HiOutlinePlusCircle size={"20px"} /></ChakraButton>
                        <Text fontWeight={"600"} fontSize="25px">{orderCount}</Text>
                        <ChakraButton onClick={() => orderCount>0 && setOrderCount(orderCount-1)}><HiOutlineMinusCircle size={"20px"}/></ChakraButton>
                    </Flex>
                </BootstrapCard.Text>
            </BootstrapCard.Body>
        </BootstrapCard>
    )
}