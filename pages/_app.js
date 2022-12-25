import "../styles/index.css";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../langs/en.json";
import fr from "../langs/fr.json";

import "../styles/globals.css";

const messages = {
  en,
  fr,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
