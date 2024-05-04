import { Link } from "react-router-dom";
import RoundedBtn from "../ui/buttons/RoundedBtn";
import RactagnleBtn from "../ui/buttons/RactangleBtn";
import GoogleIcon from "@/assets/images/icons/g_logo.svg";
import FbIcon from "@/assets/images/icons/f_logo.svg";

const LoginBox = () => {
  return (
    <div className="login_box row justify-content-between">
      <div className="col-lg-6">
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Sign In</h2>

        <form action="post" className="form login_form mt-4">
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
        </form>

        <RoundedBtn
          text="Sign In"
          className="w-100 mt-4 d-flex justify-content-center p-2 lg"
        />

        <RactagnleBtn
          text="Sign In with Facebook"
          className="w-100 mt-4 d-flex justify-content-center p-2 lg form_auth_btn"
          icon={<img src={FbIcon} alt="facebook" />}
        />
        <RactagnleBtn
          text="Sign In with Google"
          className="w-100 mt-2 d-flex justify-content-center p-2 lg form_auth_btn"
          icon={<img src={GoogleIcon} alt="google" />}
        />

        <Link
          to="/auth/forgot"
          className="text-center mt-4 d-block"
          style={{ fontSize: "12px", color: "#000", fontWeight: "bold" }}
        >
          Forgot Password ?
        </Link>
      </div>

      <div className="col-6 d-none d-lg-flex flex-column gap-3 align-items-end">
        <p className="text-center" style={{ fontSize: "13px" }}>
          Don’t have an account yet?{" "}
          <Link to={"/auth/signup"} className="highlight-text">
            Create new for free!
          </Link>
        </p>
        <img src="../src/assets/images/atg_illustration.png" alt="" />
      </div>
    </div>
  );
};

export default LoginBox;
