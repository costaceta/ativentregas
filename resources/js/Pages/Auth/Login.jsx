import React, { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestBaseLayout from "@/Layouts/GuestBaseLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { CCol, CContainer, CFormInput, CRow } from "@coreui/react";

// TODO: Remove this
// import '../../../css/app.css';

import logo from '../../../assets/brand/logo-ative.png'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestBaseLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={4}>
                            <div className="d-flex justify-content-center mb-3">
                                <img src={logo} />
                            </div>
                            <div className="card-group">
                                <div className="card p-4">
                                    <div className="card-body">
                                        <form onSubmit={submit}>
                                            <div>
                                                <InputLabel
                                                    forInput="email"
                                                    value="Email"
                                                />

                                                <CFormInput
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="mt-1 block w-full"
                                                    autoComplete="username"
                                                    isFocused={true}
                                                    onChange={
                                                        onHandleChange
                                                    }
                                                />

                                                <InputError
                                                    message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <InputLabel
                                                    forInput="password"
                                                    value="Password"
                                                />

                                                <CFormInput
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="mt-1 block w-full"
                                                    autoComplete="current-password"
                                                    onChange={
                                                        onHandleChange
                                                    }
                                                />

                                                <InputError
                                                    message={errors.password}
                                                    className="mt-2"
                                                />
                                            </div>

                                            {/* <div className="block mt-4">
                                                <label className="flex items-center">
                                                    <Checkbox
                                                        name="remember"
                                                        value={data.remember}
                                                        handleChange={
                                                            onHandleChange
                                                        }
                                                    />
                                                    <span className="ml-2 text-sm text-gray-600">
                                                        Remember me
                                                    </span>
                                                </label>
                                            </div> */}

                                            <div className="flex items-center justify-end mt-4">

                                                <PrimaryButton
                                                    className="ml-4"
                                                    processing={processing}
                                                >
                                                    Acessar
                                                </PrimaryButton>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <div className="card text-white bg-primary py-5">
                                    <div className="card-body text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua.
                                            </p>
                                            <a href="#/register">
                                                <button
                                                    className="btn btn-primary mt-3 active"
                                                    aria-current="page"
                                                    type="button"
                                                    tabIndex="-1"
                                                >
                                                    Register Now!
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        </GuestBaseLayout>
    );
}
