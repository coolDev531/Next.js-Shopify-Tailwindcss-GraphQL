import { ChevronRightIcon } from "@heroicons/react/solid";
import { useBreadcrumbs } from "_client/hooks/useBreadcrumbs";
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
                  "text-sm text-slate-400 hfa:text-slate-700 hfa:underline dark:hfa:text-slate-200",
                  last && "text-slate-700 dark:text-slate-200"
                )}
              >
                {title}
              </Link>
              {!last ? <ChevronRightIcon className="h-3 text-slate-400" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
