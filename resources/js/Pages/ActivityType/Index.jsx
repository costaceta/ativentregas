import { Head } from "@inertiajs/inertia-react";
import { useState } from "react";

import {
    CAlert,
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CImage,
    CListGroup,
    CListGroupItem,
    CRow,
    CTabContent,
    CTabPane
} from "@coreui/react";

import { cilDelete, cilOptions, cilPencil } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";
import CreateOption from "./Partials/CreateOption";
import CreateType from "./Partials/CreateType";

export default function Index(props) {
    const { activity_types } = props;

    const [activeKey, setActiveKey] = useState(0);
    const [createTypeModalVisible, setCreateTypeModalVisible] = useState(false);
    const [createOptionModalVisible, setCreateOptionModalVisible] = useState(false);
    const [currentTypeId, setCurrentTypeId] = useState(0);

    return (
        <AuthenticatedBase auth={props.auth} errors={props.errors}>
            <Head title="Tipos de atividades" />

            <CRow>
                {/* TIPOS DE ATIVIDADE  */}
                <CCol lg={4}>
                    <CCard>
                        <CCardHeader>
                            <div className="d-flex align-items-center justify-content-between w-100">
                                <h5 className="mb-0">Tipos de atividades</h5>
                                <CButton
                                    className="ms-3"
                                    size="sm"
                                    onClick={() => setCreateTypeModalVisible(!createTypeModalVisible)}
                                >
                                    Adicionar
                                </CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody>
                            <div
                                className="overflow-auto"
                                style={{ maxHeight: "600px" }}
                            >
                                <CListGroup
                                    className="flex-column"
                                    variant="pills"
                                    role="tablist"
                                >
                                    {activity_types &&
                                        activity_types.map(
                                            ({ title, id, order, options }) => (
                                                <CListGroupItem
                                                    key={id}
                                                    component="a"
                                                    className="p-3"
                                                    href="javascript:void(0);"
                                                    active={activeKey === id}
                                                    onClick={() => {
                                                        setActiveKey(id);
                                                    }}
                                                >
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <CImage
                                                            align="start"
                                                            className="me-2"
                                                            rounded
                                                            src="http://ativservice.ativrotas.com.br/user_data/tipos_atividades/ativ_icon_default.png"
                                                            width={48}
                                                            height={48}
                                                        />
                                                        <div className="d-flex w-100 justify-content-between">
                                                            <div>
                                                                <h5 className="mb-1">
                                                                    {title}
                                                                </h5>
                                                                <small>
                                                                    Ord.: {order} / Opções:{" "}
                                                                    {options.length}
                                                                </small>
                                                            </div>
                                                            <small>
                                                                <CIcon
                                                                    icon={
                                                                        cilPencil
                                                                    }
                                                                    onClick={(
                                                                        event
                                                                    ) => {
                                                                        event.stopPropagation();
                                                                        alert('Edit ' + id)
                                                                    }}
                                                                    size="xl"
                                                                />

                                                            {/* <CDropdown alignment="end">
                                                                <CDropdownToggle color="transparent" caret={false} className="p-0">
                                                                    <CIcon icon={cilOptions}  />
                                                                </CDropdownToggle>
                                                                <CDropdownMenu>
                                                                    <CDropdownItem> <CIcon icon={cilPencil}  /> Editar</CDropdownItem>
                                                                    <CDropdownItem><CIcon icon={cilDelete}  /> Deletar</CDropdownItem>
                                                                </CDropdownMenu>
                                                            </CDropdown> */}
                                                            </small>
                                                        </div>
                                                    </div>

                                                </CListGroupItem>
                                            )
                                        )}
                                </CListGroup>
                            </div>
                        </CCardBody>
                    </CCard>
                    {/* Create type  */}
                    <CreateType
                        createTypeModalVisible={createTypeModalVisible}
                        setCreateTypeModalVisible={setCreateTypeModalVisible}
                    />
                </CCol>
                {/* OPÇÕES DE ATIVIDADE */}
                <CCol lg={8}>
                    <CTabContent>
                        {
                            activity_types &&
                            activity_types.map(({ id, title, options }) => (
                                <>
                                    <CTabPane
                                        key={id}
                                        role="tabpanel"
                                        aria-labelledby="contact-tab"
                                        visible={activeKey === id}
                                    >
                                        <CCard>
                                            <CCardHeader>
                                                <div className="d-flex align-items-center justify-content-between w-100">
                                                    <h5 className="mb-0">
                                                        <small>
                                                            Opções do tipo:
                                                        </small>{" "}
                                                        <strong>{title}</strong>
                                                    </h5>
                                                    <CButton
                                                        className="ms-3"
                                                        size="sm"
                                                        onClick={() => {
                                                                setCreateOptionModalVisible(!createOptionModalVisible)
                                                            }
                                                        }
                                                    >
                                                        Adicionar
                                                    </CButton>
                                                </div>
                                            </CCardHeader>
                                            <CCardBody>
                                                <CListGroup>
                                                    {options.length > 0 ? (
                                                        options.map((option) => (
                                                            <CListGroupItem
                                                                component="a"
                                                                className="p-3"
                                                                href="javascript:void(0);"
                                                                active={false}
                                                            >
                                                                <div className="d-flex w-100 justify-content-between">
                                                                    <CImage
                                                                        align="start"
                                                                        className="me-2"
                                                                        rounded
                                                                        src="http://ativservice.ativrotas.com.br/user_data/tipos_atividades/ativ_icon_default.png"
                                                                        width={40}
                                                                        height={40}
                                                                    />
                                                                    <div className="d-flex w-100  align-items-center justify-content-between">
                                                                        <h5 className="mb-0">
                                                                            { option.title } <CBadge color="success" shape="rounded-pill">Ativo</CBadge>
                                                                        </h5>
                                                                        <small>
                                                                            <CIcon
                                                                                icon={
                                                                                    cilPencil
                                                                                }
                                                                                onClick={() =>
                                                                                    alert(
                                                                                        "Editar " +
                                                                                            option.id
                                                                                    )
                                                                                }
                                                                                size="xl"
                                                                            />
                                                                        </small>
                                                                    </div>
                                                                </div>

                                                            </CListGroupItem>
                                                        ))
                                                    ) : (
                                                        <CAlert color="warning">
                                                            O tipo de atividade:{" "}
                                                            <strong>{title}</strong>{" "}
                                                            não tem opções
                                                            cadastradas!
                                                        </CAlert>
                                                    )}
                                                </CListGroup>
                                            </CCardBody>
                                        </CCard>
                                    </CTabPane>

                                </>
                            ))
                        }
                    </CTabContent>
                    <CreateOption
                        createOptionModalVisible={createOptionModalVisible}
                        setCreateOptionModalVisible={setCreateOptionModalVisible}
                        typeID={activeKey}
                    />
                </CCol>
            </CRow>
        </AuthenticatedBase>
    );
}
