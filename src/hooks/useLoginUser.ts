import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginUserProvider";

// useContextを使ってログインユーザーデータへアクセスできるようにしたカスタムフック
export const useLoginUser = () =>
  useContext<LoginUserContextType>(LoginUserContext);
