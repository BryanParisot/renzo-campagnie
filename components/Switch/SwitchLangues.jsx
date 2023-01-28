import Image from "next/image";
import { useRouter } from "next/router";
import france from "../../public/france.png";
import anglais from "../../public/anglais.png";
import { useState } from "react";

const SwitchLangues = () => {
  const router = useRouter();

  const handleLocaleChange = (value) => {
    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="fixed right-6 bottom-24 z-20 inline-block text-left">
      {" "}
      <span className="inline-flex w-40 justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        {" "}
        {router.locale === "fr" ? (
          <Image className="mr-2" alt="e" src={france} width={30} height={30} />
        ) : (
          <Image
            className="mr-2"
            alt="e"
            src={anglais}
            width={30}
            height={30}
          />
        )}{" "}
        {router.locale === "fr" ? "Français" : "Anglais"}{" "}
      </span>
      <button
        onClick={() => setIsActive(!isActive)}
        type="button"
        className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
      >
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isActive ? (
        <ul
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          id="options"
          role="listbox"
        >
          <li
            className="relative cursor-pointer select-none py-2 pl-8 pr-4 text-gray-900 hover:bg-gray-100"
            id="option-0"
            tabIndex="-1"
            value="fr"
            onClick={() => {
              setIsActive(false);
              setSelected(router.locale);
              handleLocaleChange("fr");
            }}
          >
            <span value="fr" className="ml-4 block truncate">
              Français
            </span>

            <div className="absolute inset-y-0 left-1 flex items-center pl-1.5">
              <Image alt="e" src={france} width={30} height={30} />
            </div>
          </li>
          <li
            className="relative cursor-pointer select-none py-2 pl-8 pr-4 text-gray-900 hover:bg-gray-100"
            id="option-0"
            tabIndex="-1"
            value="en"
            onClick={() => {
              setIsActive(false);
              setSelected(router.locale);
              handleLocaleChange("en");
            }}
          >
            <span value="en" className="ml-4 block truncate">
              Anglais
            </span>

            <div className="absolute inset-y-0 left-1 flex items-center pl-1.5">
              <Image alt="e" src={anglais} width={30} height={30} />
            </div>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SwitchLangues;
