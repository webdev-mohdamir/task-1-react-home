import { ButtonProps } from "@/types/button.type";
import Button from "react-bootstrap/Button";

const RactagnleBtn = ({
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
      className={`${className} custom_btn d-flex justify-content-center align-items-center gap-2`}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {icon && iconDirection === "left" && (
        <span className="btn_icon">{icon}</span>
      )}

      {text}

      {icon && iconDirection === "right" && (
        <span className="btn_icon">{icon}</span>
      )}
    </Button>
  );
};

export default RactagnleBtn;
