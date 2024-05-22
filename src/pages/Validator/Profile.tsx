import { FormProvider, useForm } from "react-hook-form";
import DefaultLayout from "../../layout/DefaultLayout";
import ProfilePicture from "../PageComponents/ProfilePhoto";
import { AutoInput } from "../../components/form/customInput";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
// import { toast } from "react-toastify";
import { Switch } from "../../components/form/Switch";

const Profile: React.FC = () => {
  const methods = useForm<any>();
  const [value] = useState<any>("+2349091137894");
  const user = {
    photo: "",
    first_name: "Ada",
    last_name: "Ujunwa",
    username: "User01",
  };
  const [active, setActive] = useState(false);

  return (
    <DefaultLayout>
      <section className="py-3 md:px-6 px-1 dark:bg-boxdark">
        <div className="flex items-center justify-center gap-3 w-full">
          <ProfilePicture user={user} />
        </div>

        <div className="w-full mt-14 flex justify-center">
          <FormProvider {...methods}>
            <form className="lg:min-w-[500px] md:min-w-[400px] flex flex-col gap-7">
              <AutoInput
                label="First Name"
                name="first_name"
                defaultValue={user?.first_name}
                disabled
              />

              <AutoInput
                label="Last Name"
                name="last_name"
                defaultValue={user?.last_name}
                placeholder="Enter a preferred username"
                disabled
              />

              <AutoInput
                label="Username"
                name="username"
                placeholder="Enter a preferred username"
                defaultValue={user?.username}
                disabled
              />

                  <AutoInput
                    label="Email"
                    name="email"
                    placeholder="Email"
                    disabled
                  />

                <div className="">
                  <label
                    htmlFor="state"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    phone Number
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    placeholder="Enter phone number"
                    disabled
                    value={value}
                    onChange={() => {}}
                  />
                </div>
            </form>
          </FormProvider>
        </div>

        <div className="flex justify-center items-center my-20 ">
          <div>
            <p className="text-lg mb-2">Notification</p>
            <div className="flex gap-3 justify-between items-center rounded-lg border border-[#D9D9D980] px-5 py-6 md:min-w-[400px] lg:min-w-[500px]">
              <div className="">
                <h4 className="text-lg mb-2">Notification Pop up</h4>
                <p className="">
                  Get in-app notification pop up to find out <br /> whats happening
                  when online
                </p>
              </div>
              <div className="">
                <Switch
                  value={active}
                  onChange={() => {
                    if (active === true) {
                      setActive(false);
                    } else {
                      setActive(true);
                    }
                  }}
                  checked={active}
                  className="switch-color"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Profile;
