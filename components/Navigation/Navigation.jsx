import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { data_navigation } from "./dataNavigation";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = ({ button, link }) => {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                  {data_navigation.map((i) => (
                    <Link
                      key={i.id}
                      href={i.path}
                      className={
                        router.pathname == i.path
                          ? "inline-flex items-center border-b-2  border-secondary px-1 pt-1 text-sm font-medium text-gray-900"
                          : "inline-flex items-center border-b-2  px-0.5 pt-1 text-[12px] font-medium text-gray-600"
                      }
                    >
                      {i.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                {" "}
                <Link
                  href={link}
                  className="inline-flex items-center rounded-md border border-transparent bg-primary bg-opacity-80 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {button}{" "}
                </Link>{" "}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

              {data_navigation.map((i) => (
                <Disclosure.Button
                  key={i.id}
                  as="a"
                  href={i.path}
                  className={
                    router.pathname == i.path
                      ? " block border-l-4 border-secondary bg-gray-100 py-2 pl-3 pr-4 text-base font-medium text-primary"
                      : "block border-l-4 border-yellow-200 bg-gray-50 py-2 pl-3 pr-4 text-base font-medium text-primary"
                  }
                >
                  {i.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
