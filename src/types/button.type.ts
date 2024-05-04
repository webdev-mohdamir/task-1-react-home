export type ButtonProps = {
  text: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick?: () => void;
  size?: "sm" | "lg";
  className?: string;
  icon?: JSX.Element;
  iconDirection?: "left" | "right";
};
