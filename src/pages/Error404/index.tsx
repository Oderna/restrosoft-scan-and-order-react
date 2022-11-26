import React from "react";
import BaseDefaultPage from "../../components/common/BaseDefautlPage/BaseDefautlPage";

function Error404() {
    return (
        <BaseDefaultPage
        title="Oops !!"
        description="There seems to be some problem !"
        icon='./images/error-404.svg'
        button_text="Return Home"
        button_redirect_url="/landing"
        />
    );
}

export default Error404;