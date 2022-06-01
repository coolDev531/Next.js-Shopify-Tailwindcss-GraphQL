import { Hero } from "_client/sections/hero";
import { Fragment } from "react";
import { Sections } from "types/sections";

export const renderSection = (section: Sections) => {
  switch (section.type) {
    case "Footer":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Header":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Hero":
      return (
        <Fragment key={section.id}>
          <Hero {...section} />
        </Fragment>
      );
    case "Template 404":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Template article":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Template blog":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Template cart":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Collection":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Template list collections":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Template page":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Template password":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Template Product":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
    case "Template search":
      return (
        <Fragment key={section.id}>
          <div>Section to be developed: {section.type}</div>
        </Fragment>
      );
  }
};
