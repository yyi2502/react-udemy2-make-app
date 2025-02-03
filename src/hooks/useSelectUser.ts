import { useCallback, useState } from "react";
import { UserType } from "../types/api/user";

type PropsType = {
  id: number;
  users: Array<UserType>;
};

// 選択したユーザー情報を特定するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>();

  const onSelectUser = useCallback((props: PropsType) => {
    const { id, users } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null);
  }, []);
  return { onSelectUser, selectedUser };
};
