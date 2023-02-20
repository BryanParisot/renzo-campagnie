import Link from "next/link";
import { FormattedMessage } from "react-intl";
import CallToAction from "../components/CallToActions/CallToAction";
import HeaderWithImgTitle from "../components/Navigation/HeaderWithImgTitle";
import ImgWithTxtLeft from "../components/Section/imgWithTxtLeft";
import ImgWithTxtRight from "../components/Section/ImgWithTxtRight";
import Partner from "../components/Section/Partner";
import container from "../public/containers.jpg";
import cars from "../public/cars.jpg";
import utilitaire from "../public/utilitaires.jpg";
import trucks from "../public/camion.jpeg";

export default function Home() {
  return (
    <div>
      <HeaderWithImgTitle title={<FormattedMessage id="page.home.title" />} />

      <div className="mx-auto flex max-w-screen-xl flex-col space-y-12 px-8 xl:px-12">
        <CallToAction
          title={<FormattedMessage id="page.home.call_to_action_title" />}
          subtitle={<FormattedMessage id="page.home.call_to_action_subtitle" />}
          link="/announces"
          button={<FormattedMessage id="page.home.call_to_action_button" />}
        />

        <ImgWithTxtRight
          title={<FormattedMessage id="page.home.first_section.title" />}
          description={
            <FormattedMessage id="page.home.first_section.description" />
          }
          button={<FormattedMessage id="page.home.first_section.button" />}
          image={trucks}
          link="/poid-lourd"
        />

        <ImgWithTxtLeft
          title={<FormattedMessage id="page.home.second_section.title" />}
          description={
            <FormattedMessage id="page.home.second_section.description" />
          }
          button={<FormattedMessage id="page.home.second_section.button" />}
          image={cars}
          link="/voiture"
        />

        <Partner title={<FormattedMessage id="page.home.partner.title" />} />

        <ImgWithTxtRight
          title={<FormattedMessage id="page.home.third_section.title" />}
          description={
            <FormattedMessage id="page.home.third_section.description" />
          }
          button={<FormattedMessage id="page.home.third_section.button" />}
          image={utilitaire}
          link="/utilitaires"
        />

        <ImgWithTxtLeft
          title={<FormattedMessage id="page.home.fourth_section.title" />}
          description={
            <FormattedMessage id="page.home.fourth_section.description" />
          }
          button={<FormattedMessage id="page.home.fourth_section.button" />}
          image={container}
          link="/container"
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
