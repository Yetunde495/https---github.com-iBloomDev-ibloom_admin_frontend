import { useState } from "react";
import FieldInput from "../../components/form/Input";
import Button from "../../components/button";
import bgShape1 from "../../assets/images/IMAGE.png";
import bgShape2 from "../../assets/images/IMAGE-2.png";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modal";

const ConfirmationFlow: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<any>({
    name: "",
    last_number: "",
  });

  const [formView, setFormView] = useState(false);
  const [requestModal, setRequestModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      setSuccess(true)
      setRequestModal(true);
    } catch (error) {
      console.log("add alert error", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center relative bg-white">
      <span
        className="absolute right-0 top-0 w-[250px] h-[300px]"
        style={{ backgroundImage: `url(${bgShape1})` }}
      ></span>

      {formView ? (
        <div className="flex flex-col items-center w-full z-9999 rounded-3xl py-8 px-6 relative">
          <h1 className="text-3xl mb-4 font-bold text-center">
            Provide the correct information
          </h1>
          <div className="mb-8 w-full lg:px-[15%]">
            <div className="flex gap-0 items-center">
              <span
                className={`w-4 h-4 flex items-center text-white justify-center rounded-full bg-primary`}
              ></span>
              <span
                className={` h-1 w-full  ${
                  activeStep === 1 ? "bg-primary" : "bg-[#EBEBEB]"
                } `}
              ></span>
              <span
                className={`w-4 h-4 flex items-center text-white justify-center rounded-full ${
                  activeStep === 1 ? "bg-primary" : "bg-[#EBEBEB]"
                }`}
              ></span>
            </div>
          </div>

          <div className="md:max-w-[500px] lg:max-w-[650px] w-full py-8">
            {activeStep === 0 ? (
              <div>
                <FieldInput
                  label="What is your full name?"
                  placeholder="Enter full name"
                  defaultValue={data?.name}
                  id=""
                  onChange={(val) => setData((s: any) => ({ ...s, name: val }))}
                />

                <div className="flex justify-end my-10">
                  <Button
                    onClick={() => setActiveStep(activeStep + 1)}
                    rounded={false}
                    disabled={data.name === ""}
                  >
                    Next
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <FieldInput
                    label="What is the last 4 digit of your phone number?"
                    inputType="number"
                    placeholder="Enter full name"
                    defaultValue={data?.last_number}
                    id=""
                    onChange={(val) =>
                      setData((s: any) => ({ ...s, last_number: val }))
                    }
                  />
                </div>

                <div className="flex justify-between my-8">
                  <Button
                    onClick={() => setActiveStep(activeStep - 1)}
                    rounded={false}
                  >
                    Previous
                  </Button>
                  <button
                    className="bg-success text-white py-2.5 px-9 rounded-md hover:opacity-95 disabled:bg-success/65"
                    disabled={loading}
                    onClick={() => onSubmit()}
                  >
                    {loading ? "Loading" : "Finish"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center md:max-w-[55%] lg:max-w-[75%] w-full px-6">
          <h1 className="text-3xl mb-4 font-bold text-center">
            Let's Answer Few questions to verify your identity to avoid giving
            login details to the wrong validator
          </h1>
          <div className="flex flex-col gap-8 items-center justify-center md:max-w-[50%] w-full px-6">
            <button className="w-full py-3 px-8 rounded-full text-primary border border-primary hover:bg-primary hover:text-white bg-white"
             onClick={() => navigate(`/validator-signin`)}
            >
              Continue Later
            </button>
            <Button width="full" onClick={() => setFormView(true)}>
              Get Started
            </Button>
          </div>
        </div>
      )}
      <span
        className="absolute bottom-0 left-0 w-[350px] h-[400px]"
        style={{ backgroundImage: `url(${bgShape2})` }}
      ></span>
      <Modal show={requestModal} onHide={() => setRequestModal(false)}>
        {success ? (
          <div>
            <h1 className="text-2xl font-semibold text-center">
              Here is your Login Details
            </h1>
            <p className="mt-1 mb-8 text-center">Keep this information safe</p>

            <h3 className="text-xl mb-2">Username: Carlywest123</h3>
            <h3 className="text-xl mb-8">Passcode: 2345776</h3>

            <Button width="full" onClick={() => navigate(`/validator-signin`)}>
              Continue
            </Button>
          </div>
        ) : (
          <div className="">
            <h1 className="text-2xl font-semibold text-center">Oops!!</h1>
            <p className="mt-1 mb-8 text-center">
              The Informations provided for this child does not <br /> match our
              database, Kindly Contact the admin for <br /> assistance{" "}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ConfirmationFlow;
