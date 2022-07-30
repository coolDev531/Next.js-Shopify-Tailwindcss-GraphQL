import { HeroIcon } from "_client/dynamic-hero-icon";
import clsx from "clsx";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ContactBlocks } from ".shopify-cms/types/sections";
import validate from "validator";

export type BasicInputProps = Extract<ContactBlocks, { type: "basic" }>["settings"] & {
  blockId: ContactBlocks["id"];
  forceValidate?: boolean;
};
export const BasicInput: FC<BasicInputProps> = ({
  blockId,
  title,
  required,
  type,
  placeholder,
  autocomplete,
  size,
  error_message,
  forceValidate,
}) => {
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateInput = useCallback(() => {
    if (required) {
      setError(validate.isEmpty(inputRef.current.value));
    }
    if (!error_message) return;

    switch (type) {
      case "email":
        setError(!validate.isEmail(inputRef.current.value));
        break;
      case "number":
        setError(!validate.isNumeric(inputRef.current.value));
        break;
      case "tel":
        setError(!validate.isMobilePhone(inputRef.current.value));
        break;
      case "url":
        setError(!validate.isURL(inputRef.current.value));
        break;
    }
  }, [error_message, required, type]);

  useEffect(() => {
    if (forceValidate) {
      validateInput();
    }
    if (!forceValidate) {
      setError(false);
    }
  }, [forceValidate, validateInput]);

  return (
    <label className={clsx("relative", size === "full" && "col-span-2")} id={`block--${blockId}`}>
      <div className="form-label">
        {title}
        {required
          ? <span className="ml-1 text-red-600 dark:text-red-400" aria-hidden>
              *
            </span>
          : null}
      </div>
      <input
        data-form-error={error}
        ref={inputRef}
        name={autocomplete === "off" ? title : autocomplete}
        type={type}
        autoComplete={autocomplete === "off" ? "off" : "on"}
        placeholder={placeholder}
        required={required}
        className="form-input"
        onBlur={validateInput}
        onChange={() => {
          setError(false);
        }}
      />
      {error
        ? <div className="ml-2 mt-1 flex items-center text-[13px] text-red-600 dark:text-red-400">
            <HeroIcon name="ExclamationCircleIcon" outline className="mr-1 h-4 w-4" />{" "}
            <span className="font-medium">Error:</span>
            {error_message ?? "Please enter a valid value."}
          </div>
        : null}
    </label>
  );
};
