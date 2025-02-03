import { Icon } from "@chakra-ui/react";
import { FC, memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const MenuIconButton: FC = memo((props) => {
  return (
    <Icon
      as={GiHamburgerMenu}
      w={6}
      h={6}
      cursor="pointer"
      display={{ base: "block", md: "none" }}
      {...props}
    />
  );
});
