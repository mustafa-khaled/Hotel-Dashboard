import { useTranslation } from "react-i18next";
import Button from "./Button";

function ConfirmMessage({ onConfirm, message, disabled, onCloseModal }) {
  const [t] = useTranslation();

  return (
    <div className="ga-[1.2rem] flex flex-col p-[20px] text-textColor">
      <p className="mb-[1.2rem]">{message}</p>

      <div className="flex justify-end gap-[1.2rem]">
        <Button disabled={disabled} onClick={onConfirm}>
          {t("general.yes")}
        </Button>
        <Button variation="secondary" onClick={onCloseModal}>
          {t("general.cancel")}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmMessage;
