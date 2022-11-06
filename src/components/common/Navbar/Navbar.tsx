import { Flex, Spacer, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface NavbarProps {
    title: String;
}

export const Navbar = (props: NavbarProps) => {
    return (
            <Flex align='center' marginX='5px' marginTop='5px' padding='.3em' borderRadius='10px' bg='#DC9F00'>
                <Box>
                    <Image
                        className="upper-image"
                        objectFit='cover'
                        src='./logo.svg' />
                </Box>
                <Spacer />
                <Box>
                    <Text color='#FFFFFF'>{props.title}</Text>
                </Box>
                <Spacer />
                <Box>
                    <Image
                        className="upper-image"
                        objectFit='cover'
                        src='./profile-icon.svg' />
                </Box>
            </Flex>
    );
}