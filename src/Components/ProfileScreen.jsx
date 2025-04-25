import React from "react";

const ProfileScreen = () => {
  return (
    <div className="h-screen bg-gray-200 p-6" >

      <div className="mx-auto h-full flex flex-col gap-4 w-full max-w-sm  border-gray-300 border-2">

        <div className=" bg-white p-6">
          <h2 className="text-sm font-medium text-gray-700">Account Settings</h2>
        </div>

        <div className="flex flex-col text-left  p-5 pt-10">
          <div className="flex items-start  text-left gap-4 mb-4">

            <div className="relative">
              <img
                src="https://imgs.search.brave.com/3z2lpCCWvaXwGfTEbFh_MOrw2O073t_UvUMGUeYAP28/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1zbWls/ZXktd29tYW5fMjMt/MjE0ODgyNzE4MS5q/cGc_c2VtdD1haXNf/aHlicmlk"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />

              <i class="ri-camera-fill absolute bottom-0 right-[-10px] text-white p-1 bg-[#6C25FF] rounded-full text-xs"></i>
            </div>

            <div className="">
              <h3 className="text-sm font-semibold text-gray-900">Marry Doe</h3>
              <p className="text-xs text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>


          <p className="text-sm  text-gray-600 mt-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
