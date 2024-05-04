import NavbarBrand from "react-bootstrap/NavbarBrand";
import BootNavbar from "react-bootstrap/Navbar";
import RoundedSearchBar from "../ui/search-box/RoundedSearchBar";
import downDownIcon from "@/assets/images/icons/baseline-arrow_drop_down-24px.svg";
import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";
import AuthorBox from "../posts/Authorbox";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <>
      <BootNavbar
        expand="lg"
        bg="white"
        className="justify-content-between d-none d-lg-flex"
      >
        <NavbarBrand href="/">
          <img src="/logo.svg" alt="ATG World Logo" />
        </NavbarBrand>

        <RoundedSearchBar />

        <div className="authBox">
          {(!user.name && (
            <Link
              to="/auth/signup"
              className="fw-medium"
              style={{ cursor: "pointer" }}
            >
              Create account.{" "}
              <span className="highlight-text">It&#39;s free!</span>
              <img src={downDownIcon} alt="down arrow" />
            </Link>
          )) || (
            <div
              className="user_credentials d-flex gap-2"
              style={{ cursor: "pointer" }}
            >
              <AuthorBox name={user?.name} image_src={user?.image_src} />
              <img src={downDownIcon} alt="down arrow" />
            </div>
          )}
        </div>
      </BootNavbar>
    </>
  );
};

export default Navbar;
