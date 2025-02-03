import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { UserType } from "../types/api/user";

type LoginUserType = (UserType & { isAdmin: boolean }) | null;

export type LoginUserContextType = {
  loginUser: LoginUserType;
  setLoginUser: Dispatch<SetStateAction<LoginUserType>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUserType>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
