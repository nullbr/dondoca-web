import { useState, useEffect } from "react";
import { Global } from "../../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { t, setScrollY } = Global();

  useEffect(() => {
    document.title = t("defaults.login") + " - " + t("defaults.pageTitle");
    setScrollY(115);
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = Global();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/#home");
      goTop();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <section className="header-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign In
          </h1>
        </div>
        {/* form  */}
        <div className="page-padding py-[10rem] flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            {error ? (
              <p className="text-white bg-signature-gold font-bold text-[1.6rem] px-10 py-5 text-center mb-10">
                Wrong email or password
              </p>
            ) : null}
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-signature-gold "
              placeholder="gymate@gymail.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label className="text-[2rem] text-white mb-3 font-medium outline-signature-gold outline-2">
              Password
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-signature-gold "
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              type="submit"
              className="bg-signature-gold text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign In
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">New to Gymate?</p>
              <Link
                to="/signup"
                className="text-signature-gold font-bold text-[1.5rem]"
              >
                Sign Up
              </Link>
            </div>
            <p className="text-[#ffffffbc] text-[1.4rem] mt-3">
              <span className="text-signature-gold">Test Account</span> -
              gymate@gymail.com <span className="text-signature-gold"> / </span>
              testpassword123
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;