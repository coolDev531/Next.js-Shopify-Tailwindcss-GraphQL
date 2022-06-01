import BlockHeading from "_client/sections/block-heading";
import { BlockHero } from "_client/sections/block-hero";
import { BlockImageText } from "_client/sections/block-image-text";
import { StatsGraph } from "_client/sections/stats-graph";
import { Story } from "_client/sections/story";
import { Fragment } from "react";
import { Sections } from "types/sections";

export const renderSection = (section: Sections) => {
  switch (section.type) {
    case "footer":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "header":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "heading":
      return (
        <Fragment key={section.id}>
          <BlockHeading {...section} />
        </Fragment>
      );
    case "hero":
      return (
        <Fragment key={section.id}>
          <BlockHero {...section} />
        </Fragment>
      );
    case "image-text":
      return (
        <Fragment key={section.id}>
          <BlockImageText {...section} />
        </Fragment>
      );
    case "stats-graph":
      return (
        <Fragment key={section.id}>
          <StatsGraph {...section} />
        </Fragment>
      );
    case "story":
      return (
        <Fragment key={section.id}>
          <Story {...section} />
        </Fragment>
      );
    case "template-404":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "template-article":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "template-blog":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "template-cart":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "collection":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "template-list-collections":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "template-page":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "template-password":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "template-product":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "template-search":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
  }
};
