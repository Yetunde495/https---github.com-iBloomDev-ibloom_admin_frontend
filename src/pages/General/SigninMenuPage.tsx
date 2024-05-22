import LogoImg from "../../assets/logo/ibloom5-final 1.png";
import bgShape1 from "../../assets/images/IMAGE.png";
import bgShape2 from "../../assets/images/IMAGE-2.png";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-white">
      <span
        className="absolute right-0 top-0 w-[250px] h-[300px]"
        style={{ backgroundImage: `url(${bgShape1})` }}
      ></span>

      <div className="flex justify-center items-center flex-col min-h-screen w-full h-full">
        <img src={LogoImg} />
        <h4 className="text-center text-xl font-bold mb-8">Login as a?</h4>
        <div className="flex w-full gap-4 justify-center items-center">
          <div className="">
            <button
              className="px-6 py-8 text-lg text-[#01126C] border border-[#01126C] hover:bg-[#01126C] bg-white hover:text-white rounded-md outline-none"
              onClick={() => navigate("/admin-signin")}
            >
              Administrator
            </button>
          </div>
          <div className="">
            <button
              className="px-6 py-8 text-lg ml-9 text-white bg-[#01126C] hover:opacity-95 rounded-md outline-none"
              onClick={() => navigate("/validator-confirmation")}
            >
              Validator
            </button>
          </div>
        </div>
      </div>
      <span
        className="absolute bottom-0 left-0 w-[350px] h-[400px]"
        style={{ backgroundImage: `url(${bgShape2})` }}
      ></span>
    </section>
  );
};

export default Signin;
