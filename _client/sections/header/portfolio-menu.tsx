import { Link } from "_client/link";
import { Heading } from "_client/typography/heading";
import Image from "next/image";
import NextLink from "next/link";

export function PortfolioMenu() {
  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-4 py-16 sm:px-8">
      <Link
        href="/work/lunatag"
        className="group relative aspect-1 h-[257px] overflow-hidden rounded-lg"
      >
        <>
          <Image
            objectFit="cover"
            layout="fill"
            priority
            src="/images/code-2.jpg"
            alt="placeholder"
            className="group-hover:opacity-75"
          />
          <div className="absolute inset-x-0 bottom-0 bg-white/70 py-4 px-3">
            <h3 className="mb-0.5 text-sm font-medium text-slate-900">Lunatag App</h3>
            <p className="text-sm text-slate-700">See more</p>
          </div>
        </>
      </Link>
      <Link
        href="/work/kids-living"
        className="group relative aspect-1 h-[257px] overflow-hidden rounded-lg"
      >
        <>
          <Image
            objectFit="cover"
            layout="fill"
            priority
            src="/images/vercel.jpg"
            alt="placeholder"
            className="group-hover:opacity-75"
          />
          <div className="absolute inset-x-0 bottom-0 bg-white/70 py-4 px-3">
            <h3 className="mb-0.5 text-sm font-medium text-slate-900">Kids Living</h3>
            <p className="text-sm text-slate-700">See more</p>
          </div>
        </>
      </Link>
      <div>
        <Heading heading="h4">Case Studies</Heading>
        <ul className="mt-4 flex flex-col gap-3">
          <li>
            <Link href="#" className="-m-1 flex rounded p-1 text-slate-500 hfa:text-slate-600">
              Kids Living
            </Link>
          </li>
          <li>
            <Link href="#" className="-m-1 flex rounded p-1 text-slate-500 hfa:text-slate-600">
              Kids Living
            </Link>
          </li>
          <li>
            <Link href="#" className="-m-1 flex rounded p-1 text-slate-500 hfa:text-slate-600">
              Kids Living
            </Link>
          </li>
          <li>
            <Link href="#" className="-m-1 flex rounded p-1 text-slate-500 hfa:text-slate-600">
              Kids Living
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
