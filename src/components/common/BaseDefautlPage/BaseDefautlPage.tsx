import { Flex as ChakraFlex, Stack as ChakraStack, Text, Image, Spacer, Button, Box } from "@chakra-ui/react";
import React from "react";


interface PageData {
    title: string;
    description: string;
    icon: string
}

function BaseDefaultPage(props: PageData): JSX.Element {
    return (
        <Box pt={"70%"} pb={"50px"} height="100vh" backgroundColor={"#DC9F00"}>
            <ChakraFlex flexDirection={"column"} justifyContent={"space-between"} alignItems="center" height={"100%"}>
                <Image
                    className="upper-image"
                    objectFit='cover'
                    src={props.icon}
                    height={"125px"}
                    width={"125px"}
                />
                <ChakraStack>
                    <Spacer />
                    <Text fontWeight={"700"} fontSize="50px" lineHeight={"59px"} color="white" textAlign={'center'}>{props.title}</Text>
                    <Text fontWeight={"500"} fontSize="20px" lineHeight={"23px"} color="#FCE5AB" textAlign={'center'}>{props.description}</Text>
                </ChakraStack>
                <Spacer />
                <Button bgColor="#FFFFFF" color="#DC9F00" variant='outline' borderRadius='100px' shadow='0px 5px 10px rgba(0, 0, 0, 0.45);' transitionDuration="200ms">Back To Homepage</Button>
            </ChakraFlex>
        </Box>
    );
}

export default BaseDefaultPage;