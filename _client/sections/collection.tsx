import { FC } from "react";
import { collection } from "_models";

type CollectionProps = {
  collection: typeof collection;
};

export const Collection: FC<CollectionProps> = ({ collection }) => {
  return <>{collection}</>;
};

export default Collection;
