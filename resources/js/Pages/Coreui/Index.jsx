import React from 'react';
import AuthenticatedBase from '@/Layouts/AuthenticatedBaseLayout';
import {
    CDropdownDivider,
    CRow,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody
} from '@coreui/react';

export default function Index(props) {
    return (
        <>
            <AuthenticatedBase
                auth={props.auth}
                errors={props.errors}
            >

                <CRow>
                    <CAccordion activeItemKey={2}>
                        <CAccordionItem itemKey={1}>
                            <CAccordionHeader>Accordion Item #1</CAccordionHeader>
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
                            <CAccordionHeader>Accordion Item #2</CAccordionHeader>
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
                            <CAccordionHeader>Accordion Item #3</CAccordionHeader>
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
                </CRow>

                <CRow>
                {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map((color, index) => (
                    <CDropdown variant="btn-group" key={index}>
                    <CDropdownToggle color={color}>{color}</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider />
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                    </CDropdown>
                ))}
                </CRow>
            </AuthenticatedBase>
        </>
    );
}