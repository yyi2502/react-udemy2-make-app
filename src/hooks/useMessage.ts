import { useCallback } from "react";
import { toaster } from "../components/ui/toaster";

type PropsType = {
  title: string;
  type: "info" | "warning" | "success" | "error";
};

//chakuraUIのtoasterを使ってメッセージを表示させるカスタムフック
export const useMessage = () => {
  const showMessage = useCallback(
    (prpps: PropsType) => {
      const { title, type } = prpps;
      toaster.create({
        title,
        type,
        duration: 2000,
        action: {
          label: "Close",
          onClick: () => console.log("Undaaaao"),
        },
      });
    },
    [toaster]
  );
  return { showMessage };
};
