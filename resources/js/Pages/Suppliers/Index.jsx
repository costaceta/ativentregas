import React from "react"

import AuthenticatedBase from "@/Layouts/AuthenticatedBaseLayout";
import { Head } from "@inertiajs/inertia-react";
import { CRow } from "@coreui/react";

const Index = () => {
    return (
        <AuthenticatedBase>
            <Head title="Atividades frequentes" />
            <h3>Atividades frequentes</h3>

            AQUI VAI A TABELA!
        </AuthenticatedBase>
    )
}

export default Index;