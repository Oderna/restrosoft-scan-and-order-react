import { Button, Input, Stack, Grid, GridItem, Link } from "@chakra-ui/react";
import React from "react";
import BaseLoginPage from "../components/common/BaseLoginPage/BaseLoginPage";

function Form() {
    return (
        <Stack spacing={25} align="center">
                <Grid
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={4}
                    >
                    <GridItem colSpan={3}>
                        <Input type="text" placeholder="First Name*" borderRadius="100px" bgColor="#FFA700" shadow="inset 0px -5px 10px rgba(0, 0, 0, 0.45)" border="0px" height="56px" width="10em" _focusVisible={{
                            outline: "none",
                        }} />
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Input type="text" placeholder="Last Name*" borderRadius="100px" bgColor="#FFA700" shadow="inset 0px -5px 10px rgba(0, 0, 0, 0.45)" border="0px" height="56px" width="10em" _focusVisible={{
                            outline: "none",
                        }} />
                    </GridItem>
                    <GridItem colSpan={6}>
                        <Input type="email" placeholder="Email Address*" borderRadius="100px" bgColor="#FFA700" shadow="inset 0px -5px 10px rgba(0, 0, 0, 0.45)" border="0px" height="56px" width="21em" _focusVisible={{
                            outline: "none",
                        }} />
                    </GridItem>
                    <GridItem colSpan={6}>
                        <Input type="date" placeholder="Date of Birth" borderRadius="100px" bgColor="#FFA700" shadow="inset 0px -5px 10px rgba(0, 0, 0, 0.45)" border="0px" height="56px" width="21em" _focusVisible={{
                            outline: "none",
                        }} />
                    </GridItem>
                </Grid>
                <Link href="/landing">
                <Button bgColor="#FFFFFF" color="#DC9F00" width="111px" variant='outline' borderRadius='100px' shadow='0px 5px 10px rgba(0, 0, 0, 0.45);' transitionDuration="200ms">Register</Button>
                </Link>
            </Stack>
    );
}

function Register() {
    return (
        <>
        <BaseLoginPage form={<Form />} />
        </>
    );
}

export default Register;