import { useUser } from "../../features/authentication/useUser";

const UserAvatar = () => {
  const { user } = useUser();
  const { fullName, avatar } = user?.user_metadata;

  return (
    <div className={"flex items-center gap-[10px]"}>
      <img
        className={"h-[35px] w-[35px] rounded-full rtl:scale-x-[-1]"}
        src={avatar || "/default-user.jpg"}
        alt="userImage"
      />
      <span className="font-semibold">{fullName}</span>
    </div>
  );
};

export default UserAvatar;
