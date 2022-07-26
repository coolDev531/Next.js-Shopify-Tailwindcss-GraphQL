import { ChevronRightIcon } from "@heroicons/react/solid";
import { useBreadcrumbs } from "_client/hooks/use-breadcrumbs";
import { Link } from "_client/link";
import clsx from "clsx";

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav className="mb-4" aria-label="breadcrumb">
      <ol className="flex gap-2">
        {breadcrumbs.map(({ href, title, last }) => {
          return (
            <li key={href + title} className="flex items-center gap-1">
              <Link
                href={href}
                className={clsx(
                  "text-sm text-gray-400 hfa:text-gray-700 hfa:underline dark:hfa:text-gray-300",
                  last && "text-gray-700 dark:text-gray-300"
                )}
              >
                {title}
              </Link>
              {!last ? <ChevronRightIcon className="h-3 text-gray-400" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
