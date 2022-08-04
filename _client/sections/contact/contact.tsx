import { ButtonLoading } from "_client/button-loading";
import { HeroIcon } from "_client/dynamic-hero-icon";
import { API } from "_client/hooks/use-trpc";

import { Wrapper } from "_client/layout/wrapper";
import { GroupInput } from "_client/sections/contact/group-input";
import { SelectInput } from "_client/sections/contact/select-input";
import { BasicInput } from "_client/sections/contact/basic-input";
import { TextareaInput } from "_client/sections/contact/textarea-input";
import { useShopifyData } from ".shopify-cms/hooks/shopify-cms";
import { Richtext } from "_client/typography/richtext";
import { motion } from "framer-motion";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ContactSection } from ".shopify-cms/types/sections";
import { delay } from "utils/delay";
import { scrollToY } from "utils/scroll-to";
import { serializeForm } from "utils/serialize-form";

export const Contact: FC<ContactSection> = ({ id, settings, blocks, type }) => {
  const [{ global }] = useShopifyData();
  const [forceValidate, setForceValidate] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const scrollToRef = useRef<HTMLDivElement>(null);
  const contact = API.useMutation(["form.contact"]);

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();

    setForceValidate(() => true);

    await delay(10);
    const isValid = formRef.current?.querySelectorAll(`[data-form-error="true"]`)?.length === 0;
    if (isValid) {
      contact.mutate({
        email: serializeForm(formRef.current)?.email[0],
        body: JSON.stringify(serializeForm(formRef.current), null, 2),
      });
    }
  }, [contact]);

  useEffect(() => {
    if (contact.data === "success") {
      scrollToY(400, scrollToRef.current.getBoundingClientRect().top - 100 + window.scrollY);
    }
  }, [contact.data]);

  return (
    <Wrapper
      maxWidth="base"
      spacing={settings.spacing}
      spacingTop={settings.spacing_top}
      spacingBottom={settings.spacing_bottom}
    >
      {settings.intro
        ? <header ref={scrollToRef} className="mb-16">
            <h1 className="heading-2xl">{settings.title}</h1>
            <h2 className="heading-lg font-normal">{settings.sub_title}</h2>
          </header>
        : null}
      <main className="relative mt-12 grid-cols-[1fr_320px] gap-12  lg:grid">
        <div className="-mx-4 -mt-4 -mt-16 px-4 pt-4 pb-16 sm:-mx-8 sm:px-8">
          <motion.form
            animate={
              contact.data === "success"
                ? { opacity: 0, y: "-100%", transitionEnd: { display: "none" } }
                : { opacity: 100, y: 0 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            ref={formRef}
            autoComplete="on"
            onSubmit={handleFormSubmit}
            className=" w-full max-w-[720px] rounded-md shadow-2xl dark:border dark:border-gray-700 dark:shadow-none"
          >
            <main className="flex grid-cols-2 flex-col gap-6 rounded-t-md bg-bg p-6 dark:bg-card sm:grid">
              {blocks.map((block) => {
                switch (block.type) {
                  case "separator":
                    return (
                      <hr
                        key={block.id}
                        className="col-span-2 border-t border-gray-200"
                        id={`block--${block.id}`}
                      />
                    );
                  case "basic":
                    return (
                      <BasicInput
                        key={block.id}
                        {...block.settings}
                        blockId={block.id}
                        forceValidate={forceValidate}
                      />
                    );
                  case "textarea":
                    return (
                      <TextareaInput
                        key={block.id}
                        {...block.settings}
                        blockId={block.id}
                        forceValidate={forceValidate}
                      />
                    );
                  case "group":
                    return (
                      <GroupInput
                        key={block.id}
                        {...block.settings}
                        blockId={block.id}
                        forceValidate={forceValidate}
                      />
                    );
                  case "select":
                    return (
                      <SelectInput
                        key={block.id}
                        {...block.settings}
                        blockId={block.id}
                        forceValidate={forceValidate}
                      />
                    );
                }
              })}
            </main>
            <footer className="flex items-center justify-between gap-1 rounded-b-md bg-accent px-6 py-8">
              <Richtext className="text-accent-contrast [&_a]:underline">
                {settings.submit_paragraph}
              </Richtext>
              <button className="button" style={{ "--color-accent": "var(--color-gray-900)" }}>
                Submit
                {contact.isLoading ? <ButtonLoading /> : null}
              </button>
            </footer>
          </motion.form>
          {contact.data === "success"
            ? <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.4 }}
                className="my-16 w-full max-w-[720px] rounded-md bg-white p-6 py-10 shadow-xl"
              >
                <Richtext className="heading-base m-0 text-gray-800">
                  {settings.success_paragraph || "Thank you for your message 🍋"}
                </Richtext>
              </motion.div>
            : null}
        </div>

        <div className="sticky top-16 flex h-fit flex-col gap-12 py-10 md:flex-row lg:flex-col lg:py-16">
          {settings.info
            ? <section className="flex-1">
                <h3 className="heading-lg">{settings.info_title}</h3>
                <Richtext className="paragraph-base prose dark:prose-dark">
                  {settings.info_paragraph}
                </Richtext>
              </section>
            : null}

          {settings.contact
            ? <section className="flex flex-1 flex-col gap-2">
                <h3 className="heading-lg">{settings.contact_title}</h3>
                <div className="flex">
                  <HeroIcon name="LocationMarkerIcon" outline className="mr-4 h-6 w-6" />
                  <Richtext className="paragraph-base">{settings.address}</Richtext>
                </div>
                <div className="flex">
                  <HeroIcon name="MailIcon" outline className="mr-4 h-6 w-6" />
                  <Richtext className="paragraph-base">{settings.email}</Richtext>
                </div>
                <div className="flex">
                  <HeroIcon name="ClockIcon" outline className="mr-4 h-6 w-6" />
                  <Richtext className="paragraph-base">{settings.hours}</Richtext>
                </div>
              </section>
            : null}
        </div>
      </main>
    </Wrapper>
  );
};
