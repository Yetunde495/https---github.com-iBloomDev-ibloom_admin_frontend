/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import StreakImg from "../../assets/images/streak.png";
import ImgPlaceholder from "../../assets/images/Image.png";
import { InputField, Select } from "../../components/form";
import Accordion from "../../components/Accordion";
const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    gender: "",
  });

  const handleInputChange = (fieldName: any, value: any) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
    console.log("Form submitted:", formData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleGenderSelectChange = (selectedValue: any) => {
    setFormData({
      ...formData,
      gender: selectedValue,
    });
    // console.log(selectedValue);
  };

  return (
    <DefaultLayout>
      <div className="px-10 pb-20">
        <h1 className="text-xl font-bold dark:text-slate-200 mt-5">Profile</h1>

        <div className="flex gap-5 max-w-[1100px] mt-14">
          <img src={ImgPlaceholder} className="rounded-full h-14 w-14" />
          <div>
            <h3 className="font-bold">Tina Jones</h3>
            <div className="flex rounded-full items-center  py-1">
              <img src={StreakImg} className="pr-1 h-5 w-6" />
              <p className="dark:text-slate-200 text-xs ">Genius Scholar</p>
            </div>
          </div>
          <div className="ml-2">
            <button className="bg-[#ebecfa] text-primary text-lg rounded-xl p-3">
              Upload Profile Picture
            </button>
          </div>
        </div>
        <div className=" flex flex-col w- gap-10 mt-15 w-5/6">
          <div className="flex gap-15">
            <div className="w-1/2">
              <InputField
                value={formData.name}
                onChange={(value) => handleInputChange("name", value)}
                id="name"
                name="name"
                isRequired={true}
                label="First and Last Name"
              />
            </div>
            <div className="w-1/2">
              <InputField
                value={formData.email}
                onChange={(value) => handleInputChange("email", value)}
                id="email"
                name="email"
                isRequired={true}
                label="Email"
              />
            </div>
          </div>

          <div className="flex gap-15 ">
            <div className="w-1/2">
              <InputField
                value={formData.location}
                onChange={(value) => handleInputChange("location", value)}
                id="location"
                name="location"
                isRequired={true}
                label="Location"
              />
            </div>
            <div className="w-1/2">
              <Select
                label="Gender"
                value={formData.gender}
                onChange={handleGenderSelectChange}
                id=""
                name="gender"
                classNames=""
                isRequired={false}
                disabled={false}
                placeholder=""
                defaultValue={false}
                selectProps=""
              >
                <option value="placeholder" selected hidden>
                  Select gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </Select>
            </div>
          </div>
        </div>
        <div className="w-5/6 mt-20 border-t border-zinc-200  pt-15">
          <h1 className="font-bold dark:text-slate-200 mt-5">Other Settings</h1>
          <div>
            <Accordion
              items={[
                {
                  title: (
                    <div>
                      <p className="font-bold text-sm">Change Mail</p>
                      <p className="text-xs text-zinc-300">
                        Click to change your mail
                      </p>
                    </div>
                  ),
                  content: "",
                },
                {
                  title: (
                    <div>
                      <p className="font-bold text-sm">Change Password</p>
                      <p className="text-xs text-zinc-300">
                        Click to change your password
                      </p>
                    </div>
                  ),
                  content: "",
                },
              ]}
            />
          </div>

          <div className="flex justify-end mt-10">
            <button className="flex items-end justify-center bg-primary text-white rounded-lg px-4 py-3">
              Save
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
