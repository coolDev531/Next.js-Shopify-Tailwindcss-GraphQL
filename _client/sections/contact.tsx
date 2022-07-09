import HeroIcon from "_client/dynamic-hero-icon";
import { Wrapper } from "_client/layout/wrapper";
import { useShopifyData } from "_client/stores/shopify-data-store";
import { Button } from "_client/typography/button";
import { Paragraph } from "_client/typography/paragraph";
import clsx from "clsx";
import { FC, Fragment, ReactNode, useCallback, useState } from "react";
import { IoIosClock, IoIosMail, IoIosPin } from "react-icons/io";
import { FaMapPin } from "react-icons/fa";
import { divWrapper } from "react-universal-interface/lib/createEnhancer";
import { ContactBlocks, ContactSection } from "types/sections";
import { Listbox, Transition } from "@headlessui/react";

export type BasicInputProps = Extract<ContactBlocks, { type: "basic" }>["settings"] & {
  blockId: ContactBlocks["id"];
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
}) => {
  const [error, setError] = useState(false);
  return (
    <label className={clsx("relative", size === "full" && "col-span-2")}>
      <div className="mb-1.5 flex h-5 text-sm text-gray-700">
        {title}
        {required
          ? <span className="ml-1 text-red-600" aria-hidden>
              *
            </span>
          : null}
      </div>
      <input
        name={autocomplete === "off" ? title : autocomplete}
        type={type}
        autoComplete={autocomplete === "off" ? "off" : "on"}
        placeholder={placeholder}
        required={required}
        className="w-full rounded border border-gray-200 py-2 px-3 text-sm text-gray-600 placeholder-gray-400/60 transition-all fa:border-gray-900 f:ring-transparent h:border-gray-400 f:h:border-gray-900"
      />
      {error
        ? <div className="ml-2 mt-1 flex items-center text-[13px] text-red-600 text-gray-700">
            <HeroIcon name="ExclamationCircleIcon" outline className="mr-1 h-4 w-4" />{" "}
            <span className="font-medium">Error:</span>
            {error_message}
          </div>
        : null}
    </label>
  );
};

export type TextareaInputProps = Extract<ContactBlocks, { type: "textarea" }>["settings"] & {
  blockId: ContactBlocks["id"];
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
}) => {
  const [error, setError] = useState(false);
  return (
    <label className="relative" style={{ gridColumn: size === "half" ? "" : "span 2" }}>
      <div className="mb-1.5 flex h-5 text-sm text-gray-700">
        {title}
        {required
          ? <span className="ml-1 text-red-600" aria-hidden>
              *
            </span>
          : null}
      </div>
      <textarea
        name={autocomplete === "off" ? title : autocomplete}
        rows={lines}
        autoComplete={autocomplete === "off" ? "off" : "on"}
        placeholder={placeholder}
        required={required}
        className="w-full rounded border border-gray-200 py-2 px-3 text-sm text-gray-600 placeholder-gray-400/60 transition-colors fa:border-gray-900 f:ring-transparent h:border-gray-400 f:h:border-gray-900"
      />
      {error
        ? <div className="ml-2 mt-1 flex items-center text-[13px] text-red-600 text-gray-700">
            <HeroIcon name="ExclamationCircleIcon" outline className="mr-1 h-4 w-4" />{" "}
            <span className="font-medium">Error:</span>
            {error_message}
          </div>
        : null}
    </label>
  );
};

export type AdvancedInputProps = Extract<ContactBlocks, { type: "group" }>["settings"] & {
  blockId: ContactBlocks["id"];
};

export const AdvancedInput: FC<AdvancedInputProps> = ({
  blockId,
  title,
  required,
  type,
  options,
  size,
  error_message,
}) => {
  const [error, setError] = useState(false);
  const optionsArray = options.split("||").map((option) => option.trim());
  const [selected, setSelected] = useState("Please Select");

  return (
    <label className={clsx("relative", size === "full" && "col-span-2")}>
      <div className="mb-1.5 flex h-5 text-sm text-gray-700">
        {title}
        {required
          ? <span className="ml-1 text-red-600" aria-hidden>
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
                <div className="relative grid grid-cols-2 gap-y-4 gap-x-6">
                  {optionsArray.map((option) => (
                    <label key={`option-${blockId}-${option}`} className="flex h-5 items-center">
                      <input
                        name={title}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-sky-400"
                      />
                      <div className="ml-4">{option}</div>
                    </label>
                  ))}
                </div>
              </fieldset>
            </>
          ),
          select: (
            <>
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative mt-1">
                      <Listbox.Button
                        className={clsx(
                          "relative w-full cursor-default rounded border  bg-white py-2 pr-10 pl-3 text-left text-sm text-gray-600 transition-all hfva:outline-none hfva:ring-transparent fa:border-gray-900 h:border-gray-400 f:h:border-gray-900",
                          open ? "border-gray-900 h:border-gray-900" : "border-gray-200",
                          selected === "Please Select" ? "text-gray-400/60" : "text-gray-600"
                        )}
                      >
                        <span className="block truncate">{selected}</span>
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
                hidden
                className="hidden"
                name={title}
                required={required}
                value={selected}
                readOnly
              />
            </>
          ),
        }[type]
      }
      {error
        ? <div className="ml-2 mt-1 flex items-center text-[13px] text-red-600 text-gray-700">
            <HeroIcon name="ExclamationCircleIcon" outline className="mr-1 h-4 w-4" />{" "}
            <span className="font-medium">Error:</span>
            {error_message}
          </div>
        : null}
    </label>
  );
};

export const Contact: FC<ContactSection> = ({ id, settings, blocks, type }) => {
  const [{ global }] = useShopifyData();

  const handleFormSubmit = useCallback(() => {}, []);
  return (
    <Wrapper maxWidth="base" paddingY="base">
      <header>
        <h1 className="heading-2xl">{settings.title}</h1>
        <h2 className="heading-lg font-normal">{settings.sub_title}</h2>
      </header>
      <main className="relative mt-12 grid grid-cols-[1fr_320px] gap-12">
        <form
          autoComplete="on"
          className="overflow-hidden rounded-md shadow-2xl"
          onSubmit={handleFormSubmit}
          method="POST"
          action="/api/contact"
        >
          <main className="grid grid-cols-2 gap-6 bg-white p-6">
            {blocks.map((block) => {
              switch (block.type) {
                case "separator":
                  return <hr key={block.id} className="col-span-2 border-t border-gray-200" />;
                case "basic":
                  return <BasicInput key={block.id} {...block.settings} blockId={block.id} />;
                case "textarea":
                  return <TextareaInput key={block.id} {...block.settings} blockId={block.id} />;
                case "group":
                  return <AdvancedInput key={block.id} {...block.settings} blockId={block.id} />;
              }
            })}
          </main>
          <footer className="flex items-center justify-between bg-accent px-6 py-10 text-white">
            <Paragraph className="text-white [&_a]:underline">
              {settings.submit_paragraph}
            </Paragraph>
            <button
              className="button"
              style={{ "--color-button-bg": global.settings?.color_accent?.rgb }}
            >
              Submit
            </button>
          </footer>
        </form>
        <div className="sticky top-16 flex h-fit flex-col gap-12 py-16">
          <section>
            <h3 className="heading-lg">{settings.info_title}</h3>
            <Paragraph size="base">{settings.info_paragraph}</Paragraph>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="heading-lg">{settings.contact_title}</h3>
            <div className="flex">
              <HeroIcon name="LocationMarkerIcon" outline className="mr-4 h-6 w-6" />
              <Paragraph size="base">{settings.address}</Paragraph>
            </div>
            <div className="flex">
              <HeroIcon name="MailIcon" outline className="mr-4 h-6 w-6" />
              <Paragraph size="base">{settings.email}</Paragraph>
            </div>
            <div className="flex">
              <HeroIcon name="ClockIcon" outline className="mr-4 h-6 w-6" />
              <Paragraph size="base">{settings.hours}</Paragraph>
            </div>
          </section>
        </div>
      </main>
    </Wrapper>
  );
};
