import Link from "next/link";
import SwitchLangues from "../components/Switch/SwitchLangues.jsx";
import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <div>
      <SwitchLangues />
      <Link href="/utilitaires">Utilitaires</Link>
      <h1 className="text-3xl font-bold underline bg-red-800">
        {" "}
        <FormattedMessage
          id="page.home.title"
          values={{ b: (chunks) => <b>{chunks}</b> }}
        />
      </h1>
    </div>
  );
}
