import React from "react";
import { Link } from "react-router-dom";

function LandingScreen() {
    return (
        <div className="h-screen bg-gray-200 p-6">
            <div className=" mx-auto max-w-sm text-center h-full  p-6  flex flex-col justify-end  border-gray-300 border-2">
                <div className="text-left">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Welcome to PopX
                    </h1>
                    <p className="text-md text-gray-500 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </div>

                <div className="flex items-center justify-center flex-col gap-2">
                    <Link to='/signup' className="w-full bg-[#6C25FF] text-white font-semibold py-3 rounded-md">
                        Create Account
                    </Link>
                    <Link to='/login' className="w-full bg-[#CEBAFB] text-gray-900 font-semibold py-3 rounded-md">
                        Already Registered? Login
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default LandingScreen;
