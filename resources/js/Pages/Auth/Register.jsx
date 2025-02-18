import React from "react";
import SideContent from "../../components/Layouts/SideContent/SideContent";
import FormRegister from "../../components/Fragments/FormRegister";

const Register = () => {
    return (
        <>
            <div className="h-screen max-w-full flex mx-auto md:flex items-center justify-center bg-white">
                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 bg-white h-full flex items-center justify-center p-8 md:p-12">
                    <div className="w-full max-w-md">
                        <div className="w-full mb-8">
                            <h1 className="text-3xl mb-3 font-bold text-gray-800 text-center">
                                Create Your Account
                            </h1>
                            <p className="md:hidden text-gray-600 text-center font-medium">
                                Join us now and find your experience
                            </p>
                        </div>

                        <FormRegister />
                    </div>
                </div>

                {/* Right Side Content */}
                <SideContent
                    rounded="rounded-l-3xl"
                    title="Find Your Experience "
                    subHeading="Join Us Now & get your wish!"
                />
            </div>
        </>
    );
};

export default Register;