import { useState } from "react";
import AuthPopup from "@/components/ui/popups/AuthPopup";

const Auth = () => {
  const [showAuth, setShowAuth] = useState(true);

  const hanldeCloseAuthPopup = () => {
    setShowAuth(!showAuth);

    window.location.href = "/";
  };

  return <AuthPopup show={showAuth} onHide={() => hanldeCloseAuthPopup()} />;
};

export default Auth;
