import { FC, memo, ReactNode } from "react";
import Header from "../orgamisms/layout/Header";

type PropsType = {
  children: ReactNode;
};
const HeaderLayout: FC<PropsType> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
export default HeaderLayout;
