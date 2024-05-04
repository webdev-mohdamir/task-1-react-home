import { Button } from "react-bootstrap";

export type IconBtnProps = {
  icon: JSX.Element;
  className?: string;
  parentClassName?: string;
  onclick?: () => void;
  children?: JSX.Element;
  text?: string;
};

const IconBtn = ({
  icon,
  className,
  children,
  onclick,
  text,
  parentClassName,
}: IconBtnProps) => {
  return (
    <div
      className={`${parentClassName} position-relative col-3 d-flex justify-content-end align-items-start`}
    >
      <Button className={`icon_btn ${className}`} onClick={onclick}>
        {icon}
        {text && (
          <span className="ms-2 d-inline d-sm-none text-dark">{text}</span>
        )}
      </Button>
      {children}
    </div>
  );
};

export default IconBtn;
