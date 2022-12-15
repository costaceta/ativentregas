import {
    CCard,
    CCardHeader,
    CCardBody,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CDropdownItem,
} from "@coreui/react";

import { cilCalendarCheck, cilChevronRight, cilOptions, cilPlus, cilSearch } from "@coreui/icons";
import CIcon from '@coreui/icons-react';

const ActivityCardItem = ({ activity }) => {
    return (
        <CCard key={ activity.id } className="mb-3">
            <CCardHeader>
                <div className="d-flex justify-content-between w-100">
                    <div className="info">
                        {/* <CBadge color="primary">1</CBadge>  */}
                        {/* <strong>#ID { activitity.id } </strong> */}
                        Lorem ipsum dolor
                    </div>
                    <div className="options">
                            <CIcon className="right-0" icon={cilOptions} />

                    {/* <CDropdown variant="btn-group">
                        <CDropdownToggle color="secondary">
                            here
                        </CDropdownToggle>

                        <CDropdownMenu>
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                            <CDropdownDivider/>
                            <CDropdownItem href="#">Separated link</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown> */}

                    </div>
                </div>
            </CCardHeader>
            <CCardBody>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </CCardBody>
        </CCard>
     );
}

export default ActivityCardItem;