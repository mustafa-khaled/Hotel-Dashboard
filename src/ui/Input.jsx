import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";

const Input = React.forwardRef(
  (
    { type = "text", placeholder, name, value, onChange, error, disabled },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    return (
      <div className="relative w-full">
        <div className="relative">
          <input
            disabled={disabled}
            ref={ref}
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            className="input"
            id={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />

          {type === "password" && (
            <button
              type="button"
              className="text-gray absolute top-[50%] translate-y-[-50%] ltr:right-[10px] rtl:left-[10px]"
              onClick={toggleShowPassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
            </button>
          )}
        </div>

        <label
          htmlFor={placeholder}
          className="bg-bgColor absolute top-[-15px] p-[3px] text-sm ltr:left-[15px] rtl:right-[15px]"
        >
          {placeholder} {error && <span className="text-red-500"> *</span>}
        </label>

        {error && (
          <div className="mt-[3px] p-[2px] text-sm text-red-400">{error}</div>
        )}
      </div>
    );
  },
);

export default Input;
