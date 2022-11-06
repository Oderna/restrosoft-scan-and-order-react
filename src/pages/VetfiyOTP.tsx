import { Button, Input, Stack, Link } from "@chakra-ui/react";
import React from "react";
import BaseLoginPage from "../components/common/BaseLoginPage/BaseLoginPage";

function Form() {
    return (
        <div className="flex justify-center items-center">
            <Stack align="center">
                <Input type="number" placeholder="OTP" margin='1em' borderRadius="100px" bgColor="#FFA700" shadow="inset 0px -5px 10px rgba(0, 0, 0, 0.45)" border="0px" height="56px" width="248px" _focusVisible={{
                    outline: "none",
                }} />
                <Link href="/register">
                    <Button bgColor="#FFFFFF" color="#DC9F00" width="111px" variant='outline' borderRadius='100px' shadow='0px 5px 10px rgba(0, 0, 0, 0.45);'>Submit</Button>
                </Link>
                <Link href="/login" color='#FFFFFF' fontSize="12px" fontWeight="500">Resend OTP</Link>
            </Stack>
        </div>
    );
}

function VerifyOTP() {
    return (
        <>
            <BaseLoginPage form={<Form />} />
        </>
    );
}

export default VerifyOTP;