import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/buttonIcon/ButtonIcon";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <i className="fa-solid fa-right-from-bracket"></i>
      )}
    </ButtonIcon>
  );
}

export default Logout;
