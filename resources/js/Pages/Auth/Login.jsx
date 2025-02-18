import React from "react";
import SideContent from "../../components/Layouts/SideContent/SideContent";
import FormLogin from "../../components/Fragments/FormLogin";

const Login = () => {
    return (
        <>
            <div className="h-screen max-w-full flex mx-auto md:flex items-center justify-center bg-white">
                <SideContent
                    rounded="rounded-r-3xl"
                    title="Welcome Back!"
                    subHeading="Elevate your marketplace experience"
                />

                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 bg-white h-full flex items-center justify-center p-8 md:p-12">
                    <div className="w-full max-w-md">
                        <div className="w-full mb-8">
                            <h1 className="text-3xl mb-3 font-bold text-gray-800 text-center">
                                Login to Your Account
                            </h1>
                            <p className="md:hidden text-gray-600 text-center font-medium">
                                Welcome back, please login to your account.
                            </p>
                        </div>

                        <FormLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;