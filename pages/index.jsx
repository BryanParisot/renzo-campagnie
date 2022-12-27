import Link from "next/link";
import { FormattedMessage } from "react-intl";
import HeaderWithImgTitle from "../components/Navigation/HeaderWithImgTitle";
import ImgWithTxtLeft from "../components/Section/imgWithTxtLeft";
import ImgWithTxtRight from "../components/Section/ImgWithTxtRight";

export default function Home() {
  return (
    <div>
      <HeaderWithImgTitle title={<FormattedMessage id="page.home.title" />} />

      <div class="mx-auto flex max-w-screen-xl flex-col space-y-12 px-8 xl:px-12">
        <ImgWithTxtRight
          title={<FormattedMessage id="page.home.first_section.title" />}
          description={
            <FormattedMessage id="page.home.first_section.description" />
          }
          button={<FormattedMessage id="page.home.first_section.button" />}
        />

        <ImgWithTxtLeft
          title={<FormattedMessage id="page.home.second_section.title" />}
          description={
            <FormattedMessage id="page.home.second_section.description" />
          }
          button={<FormattedMessage id="page.home.second_section.button" />}
        />
      </div>

      {/* <h1 className="text-3xl font-bold underline bg-primary">
        {" "}
        <FormattedMessage
          id="page.home.title"
          values={{ b: (chunks) => <b>{chunks}</b> }}
        />
      </h1> */}
    </div>
  );
}
