import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import {
    AppSidebar,
    AppHeader,
    AppContent,
    AppFooter
} from '@/Components/index';
export default function GuestBaseLayout({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div>
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                {/* <AppHeader /> */}
                <div className="body flex-grow-1 px-3">
                    <AppContent children={children} />
                </div>
                {/* <AppFooter /> */}
            </div>
        </div>
    );
}
