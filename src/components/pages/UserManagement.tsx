import { FC, memo, useCallback, useEffect, useState } from "react";
import { Center, Flex, HStack, Spinner } from "@chakra-ui/react";
import { UserCard } from "../orgamisms/user/UserCard";
import { UserDetailDialog } from "../orgamisms/user/UserDetailDialog";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

const UserManagement: FC = memo(() => {
  const { getAllUsers, isLoading, users } = useGetAllUsers();
  const { onSelectUser, selectedUser = null } = useSelectUser();
  const { loginUser } = useLoginUser();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getAllUsers();
  }, []);

  const onClickUserCard = useCallback(
    (id: number) => {
      onSelectUser({ id, users });
      setOpen(true);
    },
    [users, onSelectUser]
  );

  return (
    <>
      <UserDetailDialog
        user={selectedUser}
        open={open}
        setOpen={setOpen}
        isAdmin={loginUser?.isAdmin}
      />
      {isLoading ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <HStack wrap="wrap" p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <Flex align="flex-start" key={user.id} mx="auto" py={3}>
              <UserCard
                key={user.id}
                id={user.id}
                imgURL="https://picsum.photos/800"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUserCard}
              />
            </Flex>
          ))}
        </HStack>
      )}
    </>
  );
});
export default UserManagement;
