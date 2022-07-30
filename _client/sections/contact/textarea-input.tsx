import { HeroIcon } from "_client/dynamic-hero-icon";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ContactBlocks } from ".shopify-cms/types/sections";
import validate from "validator";

export type TextareaInputProps = Extract<ContactBlocks, { type: "textarea" }>["settings"] & {
  blockId: ContactBlocks["id"];
  forceValidate?: boolean;
};
export const TextareaInput: FC<TextareaInputProps> = ({
  blockId,
  title,
  required,
  placeholder,
  autocomplete,
  size,
  lines,
  error_message,
  forceValidate,
}) => {
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const validateInput = useCallback(() => {
    if (required) {
      setError(validate.isEmpty(inputRef.current.value));
    }
  }, [required]);

  useEffect(() => {
    if (forceValidate) {
      validateInput();
    }
    if (!forceValidate) {
      setError(false);
    }
  }, [forceValidate, validateInput]);

  return (
    <label
      className="relative"
      style={{ gridColumn: size === "half" ? "" : "span 2" }}
      id={`block--${blockId}`}
    >
      <div className="form-label">
        {title}
        {required
          ? <span className="ml-1 text-red-600 dark:text-red-400" aria-hidden>
              *
            </span>
          : null}
      </div>
      <textarea
        ref={inputRef}
        name={autocomplete === "off" ? title : autocomplete}
        rows={lines}
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
            {error_message || "Please enter a valid value."}
          </div>
        : null}
    </label>
  );
};
