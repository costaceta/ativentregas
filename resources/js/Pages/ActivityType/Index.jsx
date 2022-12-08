import React, { useState } from "react"
import { Head, Link } from "@inertiajs/inertia-react"

import {
    CRow,
    CNav,
    CNavItem,
    CNavLink,
    CButton,
    CTabContent,
    CTabPane,
    CCol,
    CListGroupItem,
    CListGroup,
    CImage,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody
} from "@coreui/react"

import { cilPencil, cilCalendarCheck, cilPlus } from "@coreui/icons";
import CIcon from '@coreui/icons-react';

import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout"
import PrimaryButton from "@/Components/PrimaryButton"

export default function Index(props) {
    const { activity_types } = props;

    console.log('activity_types', activity_types);

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
    const [isEditing, setIsEditing] = useState(false)

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
                <div className="d-flex w-100 mb-3">
                    <h3>Tipos de atividades</h3>
                    <Link
                        className="btn btn-primary ms-3"
                        type="button"
                        href={ route('activities-types.create') }
                    >
                        Adicionar novo
                        <CIcon className="ms-2" icon={cilPlus} />
                    </Link>
                </div>

                <CListGroup>
                    { activity_types && activity_types.map( ({ id, title }) => (
                        <CListGroupItem key={id}>{title} {id}</CListGroupItem>
                    )) }
                </CListGroup>

            </CRow>

            <CRow className="d-none">
                <CCol lg={4}>
                    {/* Lista de Atividades */}

                    <CListGroup className="flex-column" variant="pills" role="tablist">
                        { activity_types && activity_types.map( ({title, id}) => (
                            <CListGroupItem
                                key={id}
                                component="a"
                                className="p-3"
                                href="javascript:void(0);"
                                active={activeKey === id}
                                onClick={() => {
                                    setActiveKey(id)
                                    setIsEditing(false)
                                }}
                            >
                                <div className="d-flex w-100 justify-content-between mb-3">
                                    <CImage
                                        align="start"
                                        className="mr-3"
                                        rounded
                                        src="http://ativservice.ativrotas.com.br/user_data/tipos_atividades/ativ_icon_default.png"
                                        width={50}
                                        height={50}
                                    />
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{title}</h5>
                                        <small>
                                            <CIcon
                                                icon={cilPencil}
                                                onClick={ (event) => {
                                                    event.stopPropagation()
                                                    setIsEditing(true)
                                                } }
                                            size="xl"/>
                                        </small>
                                    </div>
                                </div>
                                <small>Ord.: 10; Opções: 4</small>
                            </CListGroupItem>
                        )) }
                    </CListGroup>
                </CCol>
                <CCol lg={4}>
                    <CTabContent>
                        { !isEditing ? (
                            activity_types && activity_types.map( ({ id }) => (
                                <CTabPane key={id} role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === id}>
                                    <CListGroup>
                                        <CListGroupItem
                                            component="a"
                                            className="p-3"
                                            href="javascript:void(0);"
                                            active={false}
                                            onClick={() => console.log('click')}
                                        >
                                            <div className="d-flex w-100 justify-content-between mb-3">
                                                <CImage
                                                    align="start"
                                                    className="mr-3"
                                                    rounded
                                                    src="http://ativservice.ativrotas.com.br/user_data/tipos_atividades/ativ_icon_default.png"
                                                    width={50}
                                                    height={50}
                                                />
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">KM INICIAL</h5>
                                                    <small>
                                                        <CIcon
                                                            icon={cilPencil}
                                                            onClick={ () => alert('Editar ' + id) }
                                                        size="xl"/>
                                                    </small>
                                                </div>
                                            </div>
                                            <small>ATIVO</small>
                                        </CListGroupItem>
                                        <CListGroupItem
                                            component="a"
                                            className="p-3"
                                            href="javascript:void(0);"
                                            active={false}
                                            onClick={() => console.log('click')}
                                        >
                                            <div className="d-flex w-100 justify-content-between mb-3">
                                                <CImage
                                                    align="start"
                                                    className="mr-3"
                                                    rounded
                                                    src="http://ativservice.ativrotas.com.br/user_data/tipos_atividades/ativ_icon_default.png"
                                                    width={50}
                                                    height={50}
                                                />
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">KM INICIAL</h5>
                                                    <small>
                                                        <CIcon
                                                            icon={cilPencil}
                                                            onClick={ () => alert('Editar ' + id) }
                                                        size="xl"/>
                                                    </small>
                                                </div>
                                            </div>
                                            <small>ATIVO</small>
                                        </CListGroupItem>

                                    </CListGroup>
                                </CTabPane>
                            ))
                        ) :

                            <>
                                <CAccordion>
                                    <CAccordionItem itemKey={1}>
                                        <CAccordionHeader>CONFIGURAÇÕES PRINCIPAIS</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={2}>
                                        <CAccordionHeader>CAMPOS DA ATIVIDADE</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={3}>
                                        <CAccordionHeader>DISPLAYS</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={4}>
                                        <CAccordionHeader>EFEITOS NO APP</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={5}>
                                        <CAccordionHeader>COMPORTAMENTO NO SISTEMA</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={6}>
                                        <CAccordionHeader>COMPORTAMENTO NO SISTEMA</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={7}>
                                        <CAccordionHeader>PAINEL DE OPERAÇÃO WEB - NÚMEROS</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={8}>
                                        <CAccordionHeader>OUTRAS CONFIGURAÇÕES</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={9}>
                                        <CAccordionHeader>SOLICITAÇÕES PORTAL</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={9}>
                                        <CAccordionHeader>SOLICITAÇÕES PORTAL</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                    <CAccordionItem itemKey={10}>
                                        <CAccordionHeader>CONFIGURAÇÕES IoT</CAccordionHeader>
                                        <CAccordionBody>
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                            does limit overflow.
                                        </CAccordionBody>
                                    </CAccordionItem>
                                </CAccordion>

                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={ () => setIsEditing(false) }
                                >
                                    Sair do modo edição
                                </button>
                            </>
                        }
                    </CTabContent>
                </CCol>

                <CCol lg={4}>
                    <h1>Edição de Opções</h1>
                </CCol>
            </CRow>

        </AuthenticatedBase>
    )
}
