import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type PropsType = {
  id: number;
  imgURL: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<PropsType> = memo((props) => {
  const { id, imgURL, userName, fullName, onClick } = props;
  return (
    <Box
      bg="gray.200"
      width="260px"
      height="260px"
      borderRadius="20px"
      shadow="md"
      p={4}
      _hover={{ opacity: 0.8, cursor: "pointer" }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imgURL}
          alt={userName}
          m="auto"
        />
        <Text fontSize="large" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="md" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
