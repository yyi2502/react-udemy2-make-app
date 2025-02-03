import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login";
import Home from "../components/pages/Home";
import UserManagement from "../components/pages/UserManagement";
import Setting from "../components/pages/Setting";
import Page404 from "../components/pages/Page404";
import HeaderLayout from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

const Router: FC = memo(() => {
  return (
    <>
      <LoginUserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home">
            <Route
              index={true}
              element={
                <HeaderLayout>
                  <Home />
                </HeaderLayout>
              }
            />
            <Route
              path="/home/user_management"
              element={
                <HeaderLayout>
                  <UserManagement />
                </HeaderLayout>
              }
            />
            <Route
              path="/home/setting"
              element={
                <HeaderLayout>
                  <Setting />
                </HeaderLayout>
              }
            />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </LoginUserProvider>
    </>
  );
});
export default Router;
