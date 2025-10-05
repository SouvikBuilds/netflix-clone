import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase.js";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="login_spinner w-full h-screen flex items-center">
      <img src={netflix_spinner} alt="" className="w-[60px] m-auto" />
    </div>
  ) : (
    <div className="login text-white min-h-screen bg-[linear-gradient(#0000007e,#0000007e),url(./background_banner.jpg)] bg-cover bg-center rounded-md py-[20px] px-[4%] sm:px-[8%] flex flex-col">
      <img
        src={logo}
        alt="Not Found"
        className="login-logo w-[100px] sm:w-[150px]"
      />
      <div className="login-form w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-[4px] p-[30px] sm:p-[60px] m-auto">
        <h1 className="text-[28px] sm:text-[32px] text-white font-[500] mb-[20px] sm:mb-[28px] text-center sm:text-left">
          {signState}
        </h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name..."
              className="w-full h-[50px] bg-[#333] text-white mb-[12px] px-5 py-4 outline-none rounded-[4px] text-[15px] font-[500] placeholder:text-[16px] placeholder:font-[500]"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
            className="w-full h-[50px] bg-[#333] text-white mb-[12px] px-5 py-4 outline-none rounded-[4px] text-[15px] font-[500] placeholder:text-[16px] placeholder:font-[500]"
          />
          <input
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
            className="w-full h-[50px] bg-[#333] text-white mb-[12px] px-5 py-4 outline-none rounded-[4px] text-[15px] font-[500] placeholder:text-[16px] placeholder:font-[500]"
          />
          <button
            type="submit"
            className="w-[100%] outline-0 p-[16px] bg-[#e50914] text-white rounded-[4px] text-[16px] font-[500] mt-[20px] cursor-pointer active:bg-[#bb0710] transition-all duration-200"
            onClick={user_auth}
          >
            {signState}
          </button>
          <div className="form-help flex flex-col sm:flex-row items-start sm:items-center justify-between text-[#b3b3b3] text-[13px] mt-5 gap-2 sm:gap-0">
            <div className="remember flex items-center gap-[5px] cursor-pointer">
              <input
                type="checkbox"
                name=""
                id="remember"
                className="w-[18px] h-[18px] cursor-pointer"
              />
              <label htmlFor="remember" className="cursor-pointer">
                Remember Me
              </label>
            </div>
            <p className="hover:underline cursor-pointer">Need Help?</p>
          </div>
        </form>
        <div className="form-switch mt-[30px] sm:mt-[40px]">
          {signState === "Sign In" ? (
            <p className="text-[#b3b3b3] text-[14px] sm:text-[16px]">
              New To Netflix?{" "}
              <span
                className="ml-[6px] text-[#fff] font-500 cursor-pointer"
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p className="text-[#b3b3b3] text-[14px] sm:text-[16px]">
              Already Have Account?{" "}
              <span
                className="ml-[6px] text-[#fff] font-500 cursor-pointer"
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign in Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
