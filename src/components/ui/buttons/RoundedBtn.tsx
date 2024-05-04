import { ButtonProps } from "@/types/button.type";
import Button from "react-bootstrap/Button";

const RoundedBtn = ({
  text,
  variant = "primary",
  onClick,
  size = "lg",
  className,
  icon,
  iconDirection = "left",
}: ButtonProps) => {
  return (
    <Button
      className={`${className} custom_btn rounded-pill`}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {icon && iconDirection === "left" && (
        <span className="btn_icon">{icon}</span>
      )}

      <span className="btn_text text-center">{text}</span>

      {icon && iconDirection === "right" && (
        <span className="btn_icon">{icon}</span>
      )}
    </Button>
  );
};

export default RoundedBtn;
