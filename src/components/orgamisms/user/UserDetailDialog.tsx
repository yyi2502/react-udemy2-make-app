import {
  ChangeEvent,
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  Fieldset,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Field } from "../../ui/field";
import { UserType } from "../../../types/api/user";

type PropsType = {
  user: UserType | null;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isAdmin?: boolean;
};

export const UserDetailDialog: FC<PropsType> = memo((props) => {
  const { user, open, setOpen, isAdmin = false } = props;

  const [userName, setUserName] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setUserFullName(user?.name ?? "");
    setEmail(user?.email ?? "");
  }, [user]);

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const onChangeUserFullName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserFullName(event.target.value);
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <DialogRoot
      motionPreset="slide-in-bottom"
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ユーザー詳細</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Fieldset.Root size="lg" maxW="md">
            <Stack mx={4}>
              <Fieldset.Content spaceY={2}>
                <Field label="名前">
                  <Input
                    name="userName"
                    value={userName}
                    readOnly={!isAdmin}
                    onChange={onChangeUserName}
                  />
                </Field>

                <Field label="フルネーム">
                  <Input
                    name="fullName"
                    value={userFullName}
                    readOnly={!isAdmin}
                    onChange={onChangeUserFullName}
                  />
                </Field>

                <Field label="Email">
                  <Input
                    name="email"
                    type="email"
                    value={email}
                    readOnly={!isAdmin}
                    onChange={onChangeEmail}
                  />
                </Field>
              </Fieldset.Content>
            </Stack>
          </Fieldset.Root>
        </DialogBody>
        {isAdmin && (
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">閉じる</Button>
            </DialogActionTrigger>
            <Button>更新</Button>
          </DialogFooter>
        )}
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
});
