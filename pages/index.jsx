import Link from "next/link";
import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <div>
      <Link href="/utilitaires">Utilitaires</Link>
      <h1 className="text-3xl font-bold underline bg-primary">
        {" "}
        <FormattedMessage
          id="page.home.title"
          values={{ b: (chunks) => <b>{chunks}</b> }}
        />
      </h1>
    </div>
  );
}
