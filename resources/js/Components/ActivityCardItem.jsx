

import {
    CCard, CCardBody, CCollapse, CListGroup, CListGroupItem, CTooltip, CWidgetStatsF
} from "@coreui/react";

import { cil3d, cilChartPie, cilFolder, cilFolderOpen, cilMoney, cilPlus } from "@coreui/icons";
import CIcon from '@coreui/icons-react';
import { useState } from "react";


const ActivityCardItem = ({ activity }) => {

    const [visible, setVisible] = useState(false);

    console.log("activity", activity)

    return (
        // <CCard key={ activity.id } className="mb-3">
        //     <CCardHeader>
        //         <div className="d-flex justify-content-between w-100">
        //             <div className="info">
        //                 {/* <CBadge color="primary">1</CBadge>  */}
        //                 {/* <strong>#ID { activitity.id } </strong> */}
        //                 Lorem ipsum dolor
        //             </div>
        //             <div className="options">
        //                     {/* <CIcon className="right-0" icon={cilOptions} /> */}

        //                     <CDropdown alignment="end">
        //                         <CDropdownToggle color="transparent" caret={false} className="p-0">
        //                             <CIcon icon={cilOptions}  />
        //                         </CDropdownToggle>
        //                         <CDropdownMenu>
        //                             <CDropdownItem>
        //                                 <CIcon icon={cilPencil} /> Editar
        //                             </CDropdownItem>
        //                             <CDropdownItem>
        //                             <CIcon icon={cilXCircle} /> Excluir
        //                             </CDropdownItem>
        //                         </CDropdownMenu>
        //                     </CDropdown>

        //             </div>
        //         </div>
        //     </CCardHeader>
        //     <CCardBody>
        //         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        //     </CCardBody>
        // </CCard>
        <>
            <CCard>
                <CListGroup flush>
                    <CListGroupItem
                        className="d-flex justify-content-between align-items-start py-2 px-3 pe-2"
                        onClick={() => setVisible(!visible)}
                    >
                        <div>
                            <div className="fs-6 fw-semibold text-primary mb-1">
                                { activity.activity_type }
                            </div>
                            <div className="text-medium-emphasis text-uppercase fw-semibold small">
                                <CTooltip content="Faturado">
                                    <CIcon icon={cilMoney} height={24} />
                                </CTooltip>
                            </div>
                        </div>
                        <div>
                        <CTooltip content="Outras informações">
                            <CIcon icon={cilPlus} height={16} />
                        </CTooltip>
                        </div>
                    </CListGroupItem>

                    {/* TODO: Remover a borda do collapse o estilo tem que ser só o do group item  */}
                    <CCollapse as="span" visible={visible}>
                        <CListGroupItem>
                            <strong>Outra informação:</strong> aqui <br />
                            <strong>Outra informação:</strong> aqui <br />
                        </CListGroupItem>
                    </CCollapse>
                </CListGroup>
            </CCard>
        </>
     );
}

export default ActivityCardItem;