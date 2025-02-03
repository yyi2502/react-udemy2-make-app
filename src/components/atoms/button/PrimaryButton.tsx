import { FC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type PropsType = {
  children: ReactNode;
  onCliCkFunc: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
};
const PrimaryButton: FC<PropsType> = memo((props) => {
  const {
    children,
    onCliCkFunc,
    isDisabled = false,
    isLoading = false,
  } = props;
  return (
    <Button
      bg="gray.500"
      _hover={{ opacity: 0.7 }}
      onClick={onCliCkFunc}
      disabled={isDisabled}
      loading={isLoading}
    >
      {children}
    </Button>
  );
});
export default PrimaryButton;
