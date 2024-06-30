import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/spinnerMini/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <div
      disabled={isLoading}
      onClick={logout}
      className="bg-colorGrey hover:text-colorBrand flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full"
    >
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <i className="fa-solid fa-right-from-bracket"></i>
      )}
    </div>
  );
}

export default Logout;
