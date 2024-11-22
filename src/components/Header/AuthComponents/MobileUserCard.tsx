"use client";
import {
  NoUserInfo,
  UserInfo,
} from "@workos-inc/authkit-nextjs/dist/esm/interfaces";
import Image from "next/image";
import { LogoutForm } from "./LogoutButton";

const MobileUserCard = ({
  userInfo,
}: Readonly<{
  userInfo: UserInfo | NoUserInfo;
}>) => {
  return (
    <div className="flex flex-nowrap gap-2 w-full">
      <div>
        <Image
          alt="user avatar"
          src={
            userInfo.user?.profilePictureUrl
              ? userInfo.user.profilePictureUrl
              : "/users/avatar-placeholder.png"
          }
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

    <div className="flex flex-col">
      <p className="m-0 font-semibold text-base whitespace-nowrap">
        Hello, {userInfo.user?.firstName}
      </p>
      <LogoutForm/>
    </div>
    </div>
  );
};

export default MobileUserCard;


