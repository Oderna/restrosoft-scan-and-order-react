import React from "react";
import BaseDefaultPage from "../../components/common/BaseDefautlPage/BaseDefautlPage";

function Greeting() {
    return (
        <BaseDefaultPage
        title="Thank You!!"
        description="Your order was placed successfully. Enjoy you meal and have a good day!"
        icon='./images/greeting.svg'
        button_text="Back To Homepage"
        button_redirect_url='/landing'
        />
    );
}

export default Greeting;