import React from "react"

import { CRow, CNav, CNavItem, CNavLink, CTabContent, CTabPane, CCol } from "@coreui/react"
import { Head } from "@inertiajs/inertia-react"
import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout"
import PrimaryButton from "@/Components/PrimaryButton"
import { useState } from "react"

export default function Index(props) {
    const [ativityTypes, setAtivityTypes] = useState([
        {
            title: 'Tipo de atividade 0',
            content: `Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic
            lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork
            tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica.
            DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
            mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.
            Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown.
            Pitchfork sustainable tofu synth chambray yr.`
        }
    ]);
    const [activeKey, setActiveKey] = useState(0)

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Event', event)

        setAtivityTypes([...ativityTypes, {
            title: 'Novo Tipo de atividade',
            content: 'Lorem ipusum'
        }])
    }

    return (
        <AuthenticatedBase
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Tipos de atividades" />

            <CRow>
                <div className="d-grid gap-2 d-md-flex justify-between">
                    <h3>Tipos de atividades</h3>
                    <PrimaryButton
                        type="button"
                        onClick={ (e) => handleClick(e) }
                    >
                        Criar tipo atividade
                    </PrimaryButton>
                </div>

                <CCol lg={4}>
                    <CNav className="flex-column" variant="pills" role="tablist">
                        { ativityTypes && ativityTypes.map( (ativityType, index) => (
                            <CNavItem key={index}>
                                <CNavLink
                                    href="javascript:void(0);"
                                    active={activeKey === index}
                                    onClick={() => setActiveKey(index)}
                                >
                                    { ativityType.title }
                                </CNavLink>
                            </CNavItem>
                        )) }
                    </CNav>
                </CCol>

                <CCol lg={8}>
                    <CTabContent>
                        { ativityTypes && ativityTypes.map( (ativityType, index) => (
                            <CTabPane key={index} role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === index}>
                              { ativityType.content }
                            </CTabPane>
                        )) }
                    </CTabContent>
                </CCol>
            </CRow>

        </AuthenticatedBase>
    )
}
