import Link from "next/link";

/* This example requires Tailwind CSS v3.0+ */
export default function CallToAction({ title, subtitle, button, link }) {
  return (
    <div className="mt-10 bg-yellow-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          {title}
          <br />
          {subtitle}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href={link}
            className="rounded bg-primary px-2 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-600"
          >
            {button} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
