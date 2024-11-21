import { RiArrowRightSLine } from "@remixicon/react";
import { signOut, withAuth } from "@workos-inc/authkit-nextjs"
import Image from "next/image";

const UserCard = async () => {

    const { user } = await withAuth();

    return (
        <>
            <div className="flex flex-nowrap gap-2">
                <div className="flex flex-col">
                    <p className="m-0 font-semibold text-base">Hello, {user?.firstName}</p>
                    <form
                        action={async () => {
                            "use server";
                            await signOut();
                        }}
                        className="flex justify-end">
                        <button className="flex flex-nowrap gap-1 items-center justify-end">
                            <p className="m-0 font-thin text-xs">Log out</p>
                            <RiArrowRightSLine size={16} />
                        </button>
                    </form>
                </div>
                <div>
                    <Image
                        alt="user avatar"
                        src={user?.profilePictureUrl ? user.profilePictureUrl : "/users/avatar-placeholder.png"}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
            </div>
        </>
    )
}

export default UserCard