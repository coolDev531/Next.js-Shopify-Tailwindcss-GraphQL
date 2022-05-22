import { FC } from "react";
import { CollectionSection } from "types/Collection";

type CollectionProps = {
  collection: CollectionSection;
};

export const Collection: FC<CollectionProps> = ({ collection }) => {
  return <>{collection.settings.product}</>;
};

export default Collection;
