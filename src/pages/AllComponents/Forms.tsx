import { useNavigate } from "react-router-dom";
import React from "react";
import { Header, Section } from "../../components/container";
import { FormProvider, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import MultiSelect, { Option } from "../../components/MultiSelect";
import  { AutoInput } from "../../components/form/customInput";
import {
  Button,
  FormGroup,
  // InputField,
  Textarea,
  InputWithIcon,
  PasswordInput,
} from "../../components/form";
import Select from "../../components/form/customSelect";
import SuccessModal from "../../components/modal/Success";
import { BsEnvelopeAt } from "react-icons/bs";

type FormData = {
  first_name: string;
  middle_name: string;
  gender: string;
  password: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  state_of_residence: string;
  city: string;
  street: string;
  category: Array<string>;
};

export default function FormExample() {
  const [startDate, setStartDate] = React.useState(new Date());
  const navigate = useNavigate();

  const [togglePassword, setTogglePassword] = React.useState(false);

  const [success] = React.useState(false);
  const [isLoading] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null);
  const methods = useForm<FormData>();

  const categoryOptions: Option[] = [
    { value: "UI/UX", label: "UI/UX" },
    { value: "Social Media Management", label: "Social Media Management" },
    { value: "AI & Robotics", label: "AI & Robotics" },
    { value: "Mech Engineering", label: "Mech Engineering" },
    { value: "Accounting", label: "Accounting" },
  ];

  const onSubmit = (data: FormData) => {
    //   setIsLoading(true)
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; // Exit the function if there are errors
    }
    const newData = { ...data, selectedCategory };
    console.log(newData);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Section>
              <Header variant="h2">Example Form</Header>
              {/* Select and Password Form field */}
              <FormGroup>
                <Select
                  label="Gender"
                  name="gender"
                  rules={{ required: "Please select a gender" }}
                >
                  <option value="">Select a gender...</option>
                  <option>MALE</option>
                  <option>FEMALE</option>
                  <option value="UNSPECIFIED_GENDER">Others</option>
                </Select>

                <PasswordInput
                  label="Password"
                  name="password"
                  placeholder="Password"
                  togglePassword={togglePassword}
                  onTogglePassword={setTogglePassword}
                  rules={{ required: "Password is required" }}
                />
              </FormGroup>
              {/*  Required and Optional Name */}
              <FormGroup>
                <AutoInput
                  label="Required Field"
                  name="first_name"
                  placeholder="First Name"
                  rules={{
                    required: "First Name is required",
                    pattern: {
                      value: /^(?!^[0-9]+$)[\s\S]+$/,
                      message: "Invalid name. Name must contain letters",
                    },
                  }}
                />
                <AutoInput
                  label="Optional Field"
                  name="middle_name"
                  placeholder="Last Name"
                  rules={{
                    required: false,
                    pattern: {
                      value: /^(?!^[0-9]+$)[\s\S]+$/,
                      message: "Invalid name. Name must contain letters",
                    },
                  }}
                />
              </FormGroup>

              {/*  DatePicker and Multiselect*/}
              <FormGroup>
                <div className="w-full">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="w-full">
                      <label className="text-sm">Select Category</label>
                      <MultiSelect
                        options={categoryOptions}
                        onChange={(newSelectedOptions: Option[]) => {
                          const selectedValues = newSelectedOptions.map(
                            (option) => option.value
                          );
                          setSelectedCategory(selectedValues);
                        }}
                      />
                    </div>

                    <div className="w-full">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Date of Birth
                      </label>
                      <ReactDatePicker
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        maxDate={new Date()}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        className={`z-999999 w-full rounded border border-stroke bg-gray py-3 px-4.5 
             text-black focus:border-primary focus-visible:outline-none dark:border-strokedark 
             dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                      />
                    </div>
                  </div>
                </div>
              </FormGroup>

              {/* Email and Phone Number */}
              <FormGroup>
                <AutoInput
                  label="Email"
                  name="email"
                  placeholder="employee@gmail.com"
                  rules={{
                    required: false,
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  }}
                />
                <AutoInput
                  label="Phone Number"
                  name="phone_number"
                  placeholder="+23480123456789"
                  rules={{
                    required: false,
                    pattern: {
                      value: /^\+?\d{11,14}$/,
                      message: "Invalid phone number",
                    },
                  }}
                />
              </FormGroup>

              {/*  state and city of residence */}
              <FormGroup>
               
                <AutoInput
                  label="City"
                  name="city"
                  placeholder="city"
                  rules={{ required: false }}
                />
              </FormGroup>

              {/* Form fields with Icons */}
              <FormGroup>
                <InputWithIcon
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  }}
                  leftIcon={true}
                  icon={<BsEnvelopeAt className="text-gray-400" />}
                />

                <InputWithIcon
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  }}
                  rightIcon={true}
                  icon={<BsEnvelopeAt className="text-gray-400" />}
                />
              </FormGroup>

              <Textarea
                label="Address"
                name="street"
                placeholder="Enter employee's address"
                rules={{
                  required: "Employee's address is required",
                  pattern: {
                    value: /^(?!^[0-9]+$)[\s\S]+$/,
                    message: "Invalid address. Address must contain letters",
                  },
                }}
              />
            </Section>

            <Section>
              <Button
                classNames="w-25"
                variant="primary"
                type="submit"
                onClick={() => {}}
                //   disabled={isLoading}
                isLoading={isLoading}
                isLoadingText="Loading..."
              >
                Submit
              </Button>
            </Section>
        </form>
      </FormProvider>
      <SuccessModal
        show={success}
        onProceed={() => navigate(-1)}
        size="md:w-[400px] w-[350px]"
        title="Successful"
        desc="User was added successfully"
      ></SuccessModal>
    </div>
  );
}
