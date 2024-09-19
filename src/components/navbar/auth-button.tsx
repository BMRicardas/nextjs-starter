"use client";

import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {
  minimal?: boolean;
};

export default function AuthButton({ minimal = true }: Props) {
  const { data, status } = useSession();

  console.log({ data });

  if (status === "loading") return <CircularProgress />;

  if (status === "authenticated") {
    if (minimal) {
      return (
        <Button color="success" variant="ghost" onClick={() => signOut()}>
          Sign Out
        </Button>
      );
    } else {
      return (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              showFallback={!data.user?.image}
              src={data.user?.image || ""}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{data.user?.email}</p>
            </DropdownItem>
            <DropdownItem
              key="signout"
              color="danger"
              onClick={() => signOut()}
            >
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
  }

  return (
    <Button color="danger" variant="ghost" onClick={() => signIn("google")}>
      <IconBrandGoogle />
      Sign In
    </Button>
  );
}
