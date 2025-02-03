import { Dispatch, FC, memo, SetStateAction } from "react";
import { Button, DrawerActionTrigger } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  DrawerCloseTrigger,
} from "../ui/drawer";
import { MenuIconButton } from "../atoms/button/MenuIconButton";

type PropsType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

const MenuDrawer: FC<PropsType> = memo((props) => {
  const { open, setOpen, onClickHome, onClickUserManagement, onClickSetting } =
    props;
  return (
    <DrawerRoot size="xs" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <MenuIconButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <DrawerActionTrigger asChild>
            <Button
              w="100%"
              bg="gray.100"
              _hover={{ bg: "blue.200" }}
              color="gray.800"
              onClick={onClickHome}
            >
              TOP
            </Button>
          </DrawerActionTrigger>
          <DrawerActionTrigger asChild>
            <Button
              w="100%"
              bg="gray.100"
              color="gray.800"
              _hover={{ bg: "blue.200" }}
              onClick={onClickUserManagement}
            >
              ユーザー一覧
            </Button>
          </DrawerActionTrigger>
          <DrawerActionTrigger asChild>
            <Button
              w="100%"
              bg="gray.100"
              color="gray.800"
              _hover={{ bg: "blue.200" }}
              onClick={onClickSetting}
            >
              設定
            </Button>
          </DrawerActionTrigger>
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
});
export default MenuDrawer;
