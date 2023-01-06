import { CToast, CToastBody, CToastClose, CToaster, CToastHeader } from "@coreui/react";
import { usePage } from "@inertiajs/inertia-react";

const FlashMessage = () => {
    const { flash: { message } } = usePage().props

    console.log("message", message)

    return (
        <>
            { message && (
                <CToaster placement="top-end">
                    <CToast
                        autohide={true}
                        visible={true}
                        color="success"
                        className="text-white align-items-center"
                    >
                        <div className="d-flex">
                            <CToastBody>{ message }</CToastBody>
                            <CToastClose className="me-2 m-auto" white />
                        </div>
                    </CToast>
                </CToaster>
            )}
        </>
    );
}

export default FlashMessage;