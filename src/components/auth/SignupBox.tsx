import { Link } from "react-router-dom";
import RoundedBtn from "../ui/buttons/RoundedBtn";
import RactagnleBtn from "../ui/buttons/RactangleBtn";
import GoogleIcon from "@/assets/images/icons/g_logo.svg";
import FbIcon from "@/assets/images/icons/f_logo.svg";

const SignupBox = () => {
  return (
    <div className="signup_box row">
      <div className="col-lg-6">
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Create Account</h2>

        <form action="post" className="form signup_form mt-4">
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="first_name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="last_name"
            />
          </div>
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
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
        </form>

        <div className="row justify-content-between align-items-center mt-4 ">
          <RoundedBtn
            text="Create Account"
            className="col-6 col-md-12 d-flex justify-content-center p-2 lg"
          />

          <Link
            className="col-6 text-end fw-semibold text-decoration-underline d-block d-md-none"
            to={"/auth/login"}
          >
            or, Sign In
          </Link>
        </div>

        <RactagnleBtn
          text="Sign up with Facebook"
          className="w-100 mt-4 d-flex justify-content-center p-2 lg form_auth_btn"
          icon={<img src={FbIcon} alt="facebook" />}
        />
        <RactagnleBtn
          text="Sign up with Google"
          className="w-100 mt-2 d-flex justify-content-center p-2 lg form_auth_btn"
          icon={<img src={GoogleIcon} alt="google" />}
        />
      </div>

      <div className="col-6 d-none d-lg-flex flex-column gap-3 align-items-end">
        <p className="text-center" style={{ fontSize: "13px" }}>
          Already have an account?{" "}
          <Link to={"/auth/login"} className="highlight-text">
            Sign In
          </Link>
        </p>
        <img src="../src/assets/images/atg_illustration.png" alt="" />

        <p className="text-center" style={{ fontSize: "11px" }}>
          By signing up, you agree to our{" "}
          <Link to={"/"}>Terms &amp; Conditions,</Link>{" "}
          <Link to={"/"}>Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupBox;
