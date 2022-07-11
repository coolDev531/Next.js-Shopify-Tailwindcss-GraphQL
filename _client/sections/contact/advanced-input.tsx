import { Listbox, Transition } from "@headlessui/react";
import HeroIcon from "_client/dynamic-hero-icon";
import clsx from "clsx";
import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";
import { ContactBlocks } from "types/sections";
import validate from "validator";

export type AdvancedInputProps = Extract<ContactBlocks, { type: "group" }>["settings"] & {
  blockId: ContactBlocks["id"];
  forceValidate?: boolean;
};
export const AdvancedInput: FC<AdvancedInputProps> = ({
  blockId,
  title,
  required,
  type,
  options,
  size,
  error_message,
  forceValidate,
}) => {
  const [error, setError] = useState(false);
  const optionsArray = options.split("||").map((option) => option.trim());
  const [selected, setSelected] = useState(["Please Select"]);

  const inputRef = useRef<HTMLInputElement>(null);

  const validateInput = useCallback(() => {
    if (required) {
      setError(validate.isEmpty(inputRef.current.value));
    }
    if (!error_message) return;

    switch (type) {
      case "select":
        setError(selected[0] === "Please Select");
        break;
    }
  }, [error_message, required, selected, type]);

  useEffect(() => {
    if (forceValidate) {
      validateInput();
    }
    if (!forceValidate) {
      setError(false);
    }
  }, [forceValidate, validateInput]);

  return (
    <label className={clsx("relative", size === "full" && "col-span-2")}>
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
                <div className="relative flex grid-cols-2 flex-wrap justify-items-stretch gap-y-4 gap-x-6 sm:grid">
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
          select: (
            <>
              <Listbox
                value={selected[0]}
                onChange={(val) => {
                  setSelected([val]);
                  setError(false);
                }}
              >
                {({ open }) => (
                  <>
                    <div className="relative mt-1">
                      <Listbox.Button
                        className={clsx(
                          "form-input cursor-default",
                          open &&
                            "border-gray-900 h:border-gray-900 dark:border-gray-400 dark:h:border-gray-400",
                          selected[0] === "Please Select" &&
                            "text-gray-400/60 dark:text-gray-500/60"
                        )}
                        onBlur={validateInput}
                      >
                        <span className="block truncate">{selected[0]}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <HeroIcon
                            name="SelectorIcon"
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hfva:ring-transparent sm:text-sm">
                          <Listbox.Option
                            className="hidden"
                            tabIndex={-1}
                            disabled
                            value="Please Select"
                          >
                            {({ selected, active }) => <></>}
                          </Listbox.Option>
                          {optionsArray.map((opt) => (
                            <Listbox.Option
                              key={`option-${blockId}-${opt}`}
                              className={({ active }) =>
                                clsx(
                                  active ? "bg-accent" : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-8 pr-4"
                                )
                              }
                              value={opt}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={clsx(
                                      selected ? "font-semibold" : "font-normal",
                                      active && "text-white",
                                      "block truncate"
                                    )}
                                  >
                                    {opt}
                                  </span>

                                  {selected
                                    ? <span
                                        className={clsx(
                                          active ? "text-white" : "text-accent",
                                          "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                        )}
                                      >
                                        <HeroIcon
                                          name="CheckIcon"
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
              <input
                data-form-error={error}
                ref={inputRef}
                hidden
                className="hidden"
                name={title}
                required={required}
                value={selected[0] === "Please Select" ? "" : selected[0]}
                readOnly
              />
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
