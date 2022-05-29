import { FC } from "react";
import { HeroSection } from "types/hero";

type CollectionProps = {
  collection: HeroSection;
};

export const Collection: FC<CollectionProps> = ({ collection }) => {
  return <>{collection.settings}</>;
};

export default Collection;
