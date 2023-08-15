import styles from "./UserAvatar.module.css";
import { useUser } from "../../features/authentication/useUser";

const UserAvatar = () => {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className={styles["user-avatar"]}>
      <img
        className={styles.avatar}
        src={avatar || "/public/default-user.jpg"}
        alt="userImage"
      />
      <span>{fullName}</span>
    </div>
  );
};

export default UserAvatar;
