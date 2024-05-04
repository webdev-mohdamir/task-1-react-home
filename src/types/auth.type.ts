// Auth context and provider
export type AuthProviderType = {
  children: React.ReactNode;
};

export type userProps = {
  name: string;
  email: string;
  image_src: string;
};

export type AuthContextType = {
  user: userProps;
};
