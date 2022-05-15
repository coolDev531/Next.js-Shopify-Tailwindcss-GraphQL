import { Link } from "components/link";
import { FC } from "react";

type TestProps = {};

export const Test: FC<TestProps> = (props) => {
  return (
    <>
      <Link href="/">Home</Link>
      Test
    </>
  );
};

export default Test;
