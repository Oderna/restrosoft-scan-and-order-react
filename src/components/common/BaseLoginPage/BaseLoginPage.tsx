import { Image, Flex } from "@chakra-ui/react";
import React from "react";


interface FormHTML {
    form: JSX.Element;
}

function BaseLoginPage(props: FormHTML) : JSX.Element {
    return (
        <div className="bg-background-color h-screen">
        <Flex flexDirection="column" className="h-screen" justifyContent="space-between" >
            <Image
                className="upper-image"
                objectFit='cover'
                src='./Login Background Group (1).png' />
            {props.form}
            <Image
                className="lower-image"
                objectFit='cover'
                src='./background-image.png' />
        </Flex>
        </div>
    );
}

export default BaseLoginPage;