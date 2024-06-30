import { useUser } from "../../features/authentication/useUser";

const UserAvatar = () => {
  const { user } = useUser();
  const { fullName, avatar } = user?.user_metadata;

  return (
    <div className={"flex items-center gap-[10px]"}>
      <img
        className={"h-[45px] w-[45px] rounded-full"}
        src={avatar || "/default-user.jpg"}
        alt="userImage"
      />
      <span className="font-semibold">{fullName}</span>
    </div>
  );
};

export default UserAvatar;
