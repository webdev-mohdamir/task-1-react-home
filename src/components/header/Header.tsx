import { MoveLeft } from "lucide-react";

const Header = ({ postImg }: { postImg: string }) => {
  return (
    <header className="header header-bg">
      <div className="gray-overlay"></div>
      <img className="post-img" src={postImg} alt="" />

      <div className="header_content">
        <h1>Computer Engineering</h1>
        <span className="fw-light">142,765 Computer Engineers follow this</span>
      </div>

      <MoveLeft
        color="#fff"
        className="position-absolute d-block d-md-none"
        style={{ left: "2%", top: "4%", cursor: "pointer" }}
      />
    </header>
  );
};

export default Header;
