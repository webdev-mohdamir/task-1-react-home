import { AuthProviderType, userProps } from "@/types/auth.type";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

// TODO: Add auth provider
const AuthContextProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [user, setUser] = useState<userProps>({
    name: "",
    email: "",
    image_src: "",
  });

  useEffect(() => {
    setUser({
      name: "Sarthak Kamra",
      email: "jyZiC@example.com",
      image_src: "avatar-1.png",
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
