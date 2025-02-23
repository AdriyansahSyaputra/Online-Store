import React, { useState, useEffect } from "react";
import { CircleUser, Lock, Eye, EyeOff, Mail } from "lucide-react";
import InputLabel from "../Elements/Input/InputLabel";
import Alert from "./Alert";
import { useForm } from "@inertiajs/react";

const FormRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [alert, setAlert] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
        setErrorMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register", {
            onSuccess: () => {
                setAlert(true);
            },
            onError: (errors) => {
                setErrorMessage(
                    "Registration failed. Please check your input."
                );
            },
        });
    };

    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <>
            <Alert
                isOpen={alert}
                action="Register Success"
                message="Register successfully, please login to your account now!"
            />
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="relative">
                    <InputLabel
                        icon={<CircleUser className="text-gray-400 w-5 h-5" />}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        label="Name"
                        onChange={handleChange}
                        value={data.name}
                        required
                    />
                    {errors.name && (
                        <p className="text-xs md:text-sm text-red-500 font-medium">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Username Input */}
                <div className="relative">
                    <InputLabel
                        icon={<CircleUser className="text-gray-400 w-5 h-5" />}
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        label="Username"
                        onChange={handleChange}
                        value={data.username}
                        required
                    />
                    {errors.username && (
                        <p className="text-xs md:text-sm text-red-500 font-medium">
                            {errors.username}
                        </p>
                    )}
                </div>

                {/* Email Input */}
                <div className="relative">
                    <InputLabel
                        icon={<Mail className="text-gray-400 w-5 h-5" />}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        label="Email"
                        onChange={handleChange}
                        value={data.email}
                        required
                    />
                    {errors.email && (
                        <p className="text-xs md:text-sm text-red-500 font-medium">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Password Input */}
                <div className="relative">
                    <InputLabel
                        icon={<Lock className="text-gray-400 w-5 h-5" />}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Password"
                        label="Password"
                        onChange={handleChange}
                        value={data.password}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
                    >
                        {showPassword ? (
                            <Eye size={20} />
                        ) : (
                            <EyeOff size={20} />
                        )}
                    </button>
                    {errors.password && (
                        <p className="text-xs md:text-sm text-red-500 font-medium">
                            {errors.password}
                        </p>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="relative">
                    <InputLabel
                        icon={<Lock className="text-gray-400 w-5 h-5" />}
                        type={showConfirmPassword ? "text" : "password"}
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        onChange={handleChange}
                        value={data.password_confirmation}
                        required
                    />
                    <button
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
                    >
                        {showConfirmPassword ? (
                            <Eye size={20} />
                        ) : (
                            <EyeOff size={20} />
                        )}
                    </button>
                    {errors.password_confirmation && (
                        <p className="text-xs md:text-sm text-red-500 font-medium">
                            {errors.password_confirmation}
                        </p>
                    )}
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center font-medium"
                    disabled={processing}
                >
                    {processing ? "Processing..." : "Sign Up"}
                </button>
            </form>
        </>
    );
};

export default FormRegister;