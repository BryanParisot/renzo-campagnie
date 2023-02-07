import Link from "next/link";
import { FormattedMessage } from "react-intl";

export default function NoData() {
  return (
    <>
      <div className="min-h-full bg-white py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
              <FormattedMessage id="component.no_data.title" />
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  <FormattedMessage id="component.no_data.subtitle" />
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  <FormattedMessage id="component.no_data.description" />
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <FormattedMessage id="component.no_data.button" />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
