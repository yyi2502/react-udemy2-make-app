import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";
import axios from "axios";
import { UserType } from "../types/api/user";

// 全ユーザーデータを取得するカスタムフック
export const useGetAllUsers = () => {
  const { showMessage } = useMessage();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<UserType>>([]);

  const getAllUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<Array<UserType>>(
        `https://jsonplaceholder.typicode.com/users/`
      );
      setUsers(response.data);
    } catch {
      showMessage({
        title: "ユーザー一覧を読み込めませんでした",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { getAllUsers, isLoading, users };
};
