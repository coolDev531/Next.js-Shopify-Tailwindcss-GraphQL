import { useRouter } from "next/router";
import { capitalize } from "utils/capitalize";

export const useBreadcrumbs = (): { href: string; last: boolean; title: string }[] => {
  const router = useRouter();

  const asPathWithoutQuery = router.asPath.split(/[?#]/gi)[0];
  const asPathNestedRoutes = asPathWithoutQuery.split("/").filter((v) => v.length > 0);

  const breadcrumbs = asPathNestedRoutes.map((subpath, index) => {
    const href = `/${asPathNestedRoutes.slice(0, index + 1).join("/")}`;
    const title = capitalize(subpath);
    return { href, title, last: index === asPathNestedRoutes.length - 1 };
  });

  return [{ href: "/", title: "Home", last: breadcrumbs.length === 0 }, ...breadcrumbs];
};
