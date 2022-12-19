

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

        <>
            <CCard key={activity.id}>
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

                    <CCollapse as="span" visible={visible}>
                        <CListGroupItem>
                             <strong className="mb-1">Código:</strong> {activity.code} <br />
                             <strong className="mb-1">Data de criação:</strong> {new Date(activity.created_at).toLocaleString()} <br />
                            {activity.message && `<strong className="mb-1">Menssagem:</strong> ${activity.message}<br />`}
                        </CListGroupItem>
                    </CCollapse>
                </CListGroup>
            </CCard>
        </>
     );
}

export default ActivityCardItem;