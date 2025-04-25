import React from "react";
import { Link } from "react-router-dom";

function LoginScreen() {
    return (
        <div className="flex flex-col h-screen   p-6">
            <div className="max-w-sm bg-gray-200 mx-auto p-6 border-2 border-gray-300 h-full">
                <div className="text-left mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    Signin to your <br /> PopX account
                </h1>
                <p className="text-md text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                </div>

                <div className="mb-4 relative">
                    <label className="block absolute bg-gray-200 px-1 text-xs font-medium text-purple-700 top-[-9px] left-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full border border-gray-400 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-6 relative">
                    <label className="block absolute bg-gray-200 px-1 text-xs font-medium text-purple-700 top-[-9px] left-2">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full border border-gray-400 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <Link
                    to="/profile"
                    className="w-full block text-center bg-gray-400 text-white font-semibold py-3 rounded-md  active:bg-violet-400 "
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default LoginScreen;
