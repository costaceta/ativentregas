

import {
    CAvatar,
    CCard, CCardBody, CCollapse, CListGroup, CListGroupItem, CTooltip, CWidgetStatsF
} from "@coreui/react";

import { cil3d, cilBattery3, cilBattery5, cilBatteryFull, cilChartPie, cilFolder, cilFolderOpen, cilMoney, cilPlus, cilWifiSignal4 } from "@coreui/icons";
import CIcon from '@coreui/icons-react';
import { useState } from "react";

import avatar2 from '../../assets/images/avatars/2.jpg'


const EntregadoresCardItem = () => {

    const [visible, setVisible] = useState(false);
    const [activity, setActivity] = useState([
        {
            id: 1,
            name: 'José Roberto da Silva'
        },
        {
            id: 2,
            name: 'Allan Castro'
        },
        {
            id: 3,
            name: 'Roniery Alves'
        }
    ]);

    return (
        <>
         {  activity. map( item => (
            <CCard key={item.id} className="mb-2">
                <CListGroup flush>
                    <CListGroupItem
                        className="d-flex justify-content-between align-items-start py-2 px-3 pe-2"
                    >
                        <div>
                            <div className="fs-6 fw-semibold text-primary mb-1">
                                <CAvatar
                                    className="me-2"
                                    src={avatar2}
                                    size="sm"
                                />
                                {item.name}
                            </div>
                            <div className="text-medium-emphasis text-uppercase fw-semibold small">
                                <CTooltip content="61%">
                                    <CIcon className="me-2" icon={cilBattery3} height={16} />
                                </CTooltip>
                                <CTooltip content="Último sinal: 48 segundos atrás">
                                    <CIcon className="me-2" icon={cilWifiSignal4} height={16} />
                                </CTooltip>
                            </div>
                        </div>
                        <div>
                        <CTooltip content="Outras informações">
                            <CIcon
                                icon={cilPlus}
                                height={16}
                                onClick={() => setVisible(!visible)}
                            />
                        </CTooltip>
                        </div>
                    </CListGroupItem>
                    <CCollapse visible={visible}>
                        <CListGroupItem>
                            <strong>Login:</strong> allanformiga <br />
                            <strong>Tel:</strong> (83) 99652-5975
                        </CListGroupItem>
                    </CCollapse>
                    <CListGroupItem>
                        <em className="fs-6">
                            Sem atividades no momento
                        </em>
                    </CListGroupItem>
                </CListGroup>
            </CCard>
         )) }
        </>
     );
}

export default EntregadoresCardItem;