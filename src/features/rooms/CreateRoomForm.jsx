import { useForm } from "react-hook-form";
import { useCreateRoom } from "./useCreateRoom";
import { useUpdateCabin } from "./useUpdateCabin";
import { useTranslation } from "react-i18next";
import { isOnlySpaces } from "../../utils/helpers";
import {
  MAX_INPUT_LENGTH,
  MIN_INPUT_LENGTH,
  NUMBER_INPUT_REGEX,
} from "../../utils/constants";

import Input from "../../ui/Input";
import Button from "../../ui/Button";

function CreateRoomForm({ roomToEdit = {}, onCloseModal }) {
  const [t] = useTranslation();

  // Create New Cabin Hook
  const { isCreating, createCabin } = useCreateRoom();

  // Edit Cabin Hook
  const { isUpdating, updateCabin } = useUpdateCabin();

  const { id: editId, ...editValues } = roomToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const isWorking = isCreating || isUpdating;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession) {
      updateCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        },
      );
    } else {
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        },
      );
    }
  }

  const { errors } = formState;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[10px] text-textColor"
    >
      <Input
        placeholder={t("general.name")}
        disabled={isWorking}
        error={errors?.name?.message}
        {...register("name", {
          required: t("general.nameRequired"),
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || t("general.onlySpaces"),
          },

          minLength: {
            value: MIN_INPUT_LENGTH,
            message: t("general.minLength"),
          },
          maxLength: {
            value: MAX_INPUT_LENGTH,
            message: t("general.maxLength"),
          },
        })}
      />

      <Input
        placeholder={t("general.maxCapacity")}
        disabled={isWorking}
        error={errors?.maxCapacity?.message}
        {...register("maxCapacity", {
          required: t("general.maxCapacityRequired"),
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || t("general.onlySpaces"),
          },

          pattern: {
            value: NUMBER_INPUT_REGEX,
            message: t("general.numbersOnly"),
          },

          maxLength: {
            value: MAX_INPUT_LENGTH,
            message: t("general.maxLength"),
          },
        })}
      />

      <Input
        placeholder={t("general.regularPrice")}
        disabled={isWorking}
        error={errors?.regularPrice?.message}
        {...register("regularPrice", {
          required: t("general.regularPriceyRequired"),
          min: { value: 1, message: t("general.regularPriceyRequired") },
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || t("general.onlySpaces"),
          },

          pattern: {
            value: NUMBER_INPUT_REGEX,
            message: t("general.numbersOnly"),
          },

          maxLength: {
            value: MAX_INPUT_LENGTH,
            message: t("general.maxLength"),
          },
        })}
      />

      <Input
        placeholder={t("general.discount")}
        disabled={isWorking}
        error={errors?.discount?.message}
        {...register("discount", {
          required: t("general.discountRequired"),
          validate: (value) =>
            value <= getValues().regularPrice ||
            t("general.discountMustBeLower"),

          pattern: {
            value: NUMBER_INPUT_REGEX,
            message: t("general.numbersOnly"),
          },

          maxLength: {
            value: MAX_INPUT_LENGTH,
            message: t("general.maxLength"),
          },
        })}
      />

      <div className="relative w-full">
        <div>
          <label
            htmlFor={t("general.description")}
            className="mb-[3px] block px-[10px] text-start"
          >
            {t("general.description")}
            {errors?.description?.message && (
              <span className="text-red-500"> *</span>
            )}
          </label>
          <div className="relative">
            <textarea
              disabled={isWorking}
              placeholder={t("general.description")}
              className="form-input h-[100px] resize-none"
              id={t("general.description")}
              name={"description"}
              {...register("description", {
                required: isEditSession
                  ? false
                  : t("general.descriptionRequired"),
              })}
            />
          </div>
        </div>

        {errors?.description?.message && (
          <div className="mt-[3px] p-[2px] text-start text-sm text-red-400">
            {errors?.description?.message}
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between rounded-md bg-colorGrey p-[10px]">
          <label>{t("general.image")}</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            {...register("image", {
              required: isEditSession ? false : t("general.imageRequired"),
            })}
          />
        </div>

        {errors?.image?.message && (
          <div className="mt-[3px] p-[2px] text-start text-sm text-red-400">
            {errors?.image?.message}
          </div>
        )}
      </div>

      <div className="mt-[20px] flex w-[40%] flex-col gap-[10px] self-end">
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create New Cabin"}
        </Button>
      </div>
    </form>
  );
}

export default CreateRoomForm;
