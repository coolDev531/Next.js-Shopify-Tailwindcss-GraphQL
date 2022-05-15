import { Link } from "components/link";
import { FC } from "react";

type IndexProps = {};

export const Index: FC<IndexProps> = (props) => {
  return (
    <>
      <Link prefetch={false} href="/test">
        test
      </Link>
      <div className="bg-red-200">wow!</div>
    </>
  );
};

export default Index;
