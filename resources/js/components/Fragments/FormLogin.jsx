import React, { useState } from "react";
import { CircleUser, Lock, Eye, EyeOff } from "lucide-react";
import InputLabel from "../Elements/Input/InputLabel";
import { useForm } from "@inertiajs/react";

const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
        setErrorMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login", {
            onSuccess: () => {},
            onError: (errors) => {
                setErrorMessage("Login failed. Please check your input.");
            },
        });
    };

    return (
        <>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="relative">
                    <InputLabel
                        icon={<CircleUser className="text-gray-400 w-5 h-5" />}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email / Phone"
                        label="Email"
                        onChange={handleChange}
                        required
                    />
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
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
                    >
                        {showPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                    </button>
                </div>

                <p className="text-xs md:text-sm text-red-500 font-medium">
                    Error message
                </p>

                {/* Forgot Password */}
                <div className="flex justify-between">
                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            className="mr-2"
                        ></input>
                        <label
                            htmlFor="rememberMe"
                            className="text-sm text-gray-600"
                        >
                            Remember Me
                        </label>
                    </div>

                    <a
                        href="#"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Forgot Password?
                    </a>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center font-medium"
                >
                    Login
                </button>

                {/* Divider */}
                <div className="mt-10 flex items-center gap-4">
                    <span className="flex-grow border-t border-gray-300"></span>
                    <p className="text-sm text-gray-500 whitespace-nowrap">
                        or continue with
                    </p>
                    <span className="flex-grow border-t border-gray-300"></span>
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-4">
                    <button
                        type="button"
                        className="w-full bg-white border border-gray-300 py-3 rounded-lg hover:bg-slate-50 flex items-center justify-center gap-3"
                    >
                        <img
                            src="/assets/img/icon/google.png"
                            alt="Google Icon"
                            className="h-6 w-6"
                        />
                        <span className="text-sm md:text-base font-medium">
                            Google
                        </span>
                    </button>
                </div>

                {/* Sign Up Option */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don{"'"}t have an account?{" "}
                        <a
                            href="/register"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Sign Up
                        </a>
                    </p>
                </div>
            </form>
        </>
    );
};

export default FormLogin;
