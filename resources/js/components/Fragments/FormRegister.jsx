import React, { useState } from "react";
import { CircleUser, Lock, Eye, EyeOff, Phone, Mail } from "lucide-react";
import InputLabel from "../Elements/Input/InputLabel";

const FormRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [alert, setAlert] = useState(false);
    const [form, setForm] = useState({
        email: "",
        username: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrorMessage("");
    };

    // Validasi form
    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;

        if (!emailRegex.test(form.email.trim())) {
            setErrorMessage("Invalid email format");
            return false;
        }

        if (!phoneRegex.test(form.phone)) {
            setErrorMessage("Phone number must contain 10-15 digits");
            return false;
        }

        if (form.password.length < 8) {
            setErrorMessage("Password must be at least 8 characters");
            return false;
        }

        if (form.password !== form.confirmPassword) {
            setErrorMessage("Password and Confirm Password must match");
            return false;
        }

        return true;
    };

    return (
        <>
            {/* <Alert
                isOpen={alert}
                action="Register Success"
                message="Register successfully, please login to your account now!"
            /> */}
            <form className="space-y-4">
                {/* Username Input */}
                <div className="relative">
                    <InputLabel
                        icon={<CircleUser className="text-gray-400 w-5 h-5" />}
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Full Name"
                        label="Full Name"
                        onChange={handleChange}
                        value={form.username}
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="relative">
                    <InputLabel
                        icon={<Mail className="text-gray-400 w-5 h-5" />}
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email / Phone"
                        label="Email"
                        onChange={handleChange}
                        value={form.email}
                        required
                    />
                </div>

                {/* Phone Input */}
                <div className="relative">
                    <InputLabel
                        icon={<Phone className="text-gray-400 w-5 h-5" />}
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        label="Phone"
                        onChange={handleChange}
                        value={form.phone}
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
                        value={form.password}
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
                </div>

                {/* Confirm Password */}
                <div className="relative">
                    <InputLabel
                        icon={<Lock className="text-gray-400 w-5 h-5" />}
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        onChange={handleChange}
                        value={form.confirmPassword}
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
                </div>

                {/* Error message */}
          
                    <p className="text-xs md:text-sm text-red-500 font-medium">
                        error message
                    </p>
               

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center font-medium"
                >
                    Sign Up
                </button>

                {/* Divider */}
                <div className="mt-10 flex items-center gap-4">
                    <span className="flex-grow border-t border-gray-300"></span>
                    <p className="text-sm text-gray-500 whitespace-nowrap">
                        or continue with
                    </p>
                    <span className="flex-grow border-t border-gray-300"></span>
                </div>

                {/* Social Register Buttons */}
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
                        Have an account?
                        <a
                            href="/login"
                            className="ml-1 text-blue-600 font-semibold hover:underline"
                        >
                            Login
                        </a>
                    </p>
                </div>
            </form>
        </>
    );
};

export default FormRegister;