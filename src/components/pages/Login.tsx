import { Box, Flex, Heading, Input, Separator, Stack } from "@chakra-ui/react";

import { ChangeEvent, FC, memo, useState } from "react";
import PrimaryButton from "../atoms/button/PrimaryButton";
import useAuth from "../../hooks/useAuth";

const Login: FC = memo(() => {
  const { login } = useAuth();

  const [userId, setUserId] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    value !== "" ? setIsDisabled(false) : setIsDisabled(true);
    setUserId(value);
  };

  const onClickLoginButton = () => {
    login(userId);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Separator my={4} />
        <Stack px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onCliCkFunc={onClickLoginButton}
            isDisabled={isDisabled}
          >
            login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
export default Login;
