import { useUser } from "../../features/authentication/useUser";

const UserAvatar = () => {
  const { user } = useUser();
  const { userName, avatar } = user;

  return (
    <div className={"flex items-center gap-[10px]"}>
      <img
        className={"h-[35px] w-[35px] rounded-full bg-cover rtl:scale-x-[-1]"}
        src={avatar || "/default-user.jpg"}
        alt="userImage"
      />
      <span className="font-semibold">{userName}</span>
    </div>
  );
};

export default UserAvatar;
