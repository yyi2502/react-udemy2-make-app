import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserType } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

// ログイン画面の認証用カスタムフック
const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true);
        const response = await axios.get<UserType>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const isAdmin = response.data.id === 10 ? true : false; // id:10を管理者として設定
        setLoginUser({ ...response.data, isAdmin });
        showMessage({ title: "ログイン成功！", type: "success" });
        navigate("home");
      } catch {
        showMessage({ title: "IDが間違っています", type: "error" });
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate, showMessage, setLoginUser]
  );
  return { login, isLoading };
};
export default useAuth;
