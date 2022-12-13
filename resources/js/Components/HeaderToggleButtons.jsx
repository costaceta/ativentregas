import React, { useState } from "react";

import CIcon from '@coreui/icons-react';
import { cilAlignCenter, cilAlignLeft, cilAlignRight, cilList, cilLocationPin, cilMap, cilShieldAlt } from '@coreui/icons';

import { CButtonGroup, CButton, CTooltip } from "@coreui/react";
import { useDispatch } from "react-redux";

const LayoutToggleButtons = () => {
    const dispatch = useDispatch();

    const [btnLeft, setBtnLeft] = useState(true);
    const [btnCenter, setBtnCenter] = useState(true);
    const [btnRight, setBtnRight] = useState(true);

    const handleClickBtnLeft = (event) => {
        event.preventDefault();

        setBtnLeft(!btnLeft);
        dispatch({ type: 'set', showDashboardLeft: !btnLeft })
    }
    const handleClickBtnCenter = (event) => {
        event.preventDefault();

        setBtnCenter(!btnCenter);
        dispatch({ type: 'set', showDashboardCenter: !btnCenter })
    }
    const handleClickBtnRight = (event) => {
        event.preventDefault();
        setBtnRight(!btnRight);
        dispatch({ type: 'set', showDashboardRight: !btnRight })
    }

    return (
        <div className="d-flex justify-content-end w-100">
            <CButtonGroup role="group" aria-label="Basic example">
                <CTooltip
                    content="Esconder barra de atividades"
                    placement="bottom"
                >

                    <CButton
                        onClick={handleClickBtnLeft}
                        color="primary"
                        size="sm"
                        active={btnLeft}
                    >
                        <CIcon icon={cilAlignLeft} />
                    </CButton>
                </CTooltip>
                <CTooltip
                    content="Esconder mapa"
                    placement="bottom"
                >
                    <CButton
                        onClick={handleClickBtnCenter}
                        color="primary"
                        size="sm"
                        active={btnCenter}
                    >
                        <CIcon icon={cilAlignCenter} />
                    </CButton>
                </CTooltip>
                <CTooltip
                     content="Esconder entregadores"
                     placement="bottom"
                >
                    <CButton
                        onClick={handleClickBtnRight}
                        color="primary"
                        size="sm"
                        active={btnRight}
                    >
                        <CIcon icon={cilAlignRight} />
                    </CButton>
                </CTooltip>
            </CButtonGroup>
        </div>
    )
}

export default LayoutToggleButtons;