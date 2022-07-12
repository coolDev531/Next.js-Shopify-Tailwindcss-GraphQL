import HeroIcon from "_client/dynamic-hero-icon";
import clsx from "clsx";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ContactBlocks } from "types/sections";
import validate from "validator";

export type GroupInputProps = Extract<ContactBlocks, { type: "group" }>["settings"] & {
  blockId: ContactBlocks["id"];
  forceValidate?: boolean;
};

export const GroupInput: FC<GroupInputProps> = ({
  blockId,
  title,
  required,
  type,
  options,
  error_message,
  forceValidate,
}) => {
  const [error, setError] = useState(false);
  const optionsArray = options.split("||").map((option) => option.trim());

  const inputRef = useRef<HTMLInputElement>(null);

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
    <label className={clsx("relative", "col-span-2")}>
      <div className="form-label">
        {title}
        {required
          ? <span className="ml-1 text-red-600 dark:text-red-400" aria-hidden>
              *
            </span>
          : null}
      </div>
      {
        {
          radio: (
            <>
              <div>radio</div>
            </>
          ),
          checkbox: (
            <>
              <fieldset className="">
                <legend className="sr-only">{title}</legend>
                <div className=" relative flex grid-cols-2 flex-wrap justify-items-stretch gap-y-4 gap-x-6 sm:grid">
                  {optionsArray.map((option) => (
                    <label key={`option-${blockId}-${option}`} className="flex">
                      <input
                        name={`${title}`}
                        value={option}
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-accent focus:ring-sky-400"
                      />
                      <div className="ml-2 whitespace-nowrap sm:ml-4 xs:text-sm xs:tracking-tight">
                        {option}
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>
            </>
          ),
        }[type]
      }
      {error
        ? <div className="ml-2 mt-1 flex items-center text-[13px] text-red-600 dark:text-red-400">
            <HeroIcon name="ExclamationCircleIcon" outline className="mr-1 h-4 w-4" />{" "}
            <span className="mr-0.5 font-medium">Error: </span>
            {error_message || "Please enter a valid value."}
          </div>
        : null}
    </label>
  );
};
