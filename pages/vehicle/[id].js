import { Client } from "@notionhq/client";
import { FormattedMessage, useIntl } from "react-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import Announce from "../../components/Announces/Announce";
import LogoWithTitle from "../../components/Logo/LogoWithTitle";
import { BsCalendarDate } from "react-icons/bs";
import {
  GiFuelTank,
  GiGearStickPattern,
  GiCarSeat,
  GiCarDoor,
  GiLeak,
} from "react-icons/gi";
import { TbEngine, TbFileStar } from "react-icons/tb";
import { AiOutlineBgColors, AiFillCar, AiTwotoneStar } from "react-icons/ai";
import { IoMdSpeedometer } from "react-icons/io";

export default function Vehicle({ vehicle }) {
  const { locales } = useRouter();

  return (
    <div className="space-y-10 px-6 lg:px-64">
      <Announce title={vehicle?.name_vehicle} />
      <div className="flex flex-wrap">
        <LogoWithTitle title="Année-Modéle" subtitle={vehicle?.years}>
          <BsCalendarDate />
        </LogoWithTitle>

        <LogoWithTitle title="Carburant" subtitle={vehicle?.energie}>
          <GiFuelTank />
        </LogoWithTitle>

        <LogoWithTitle title="Puissance DIN" subtitle={vehicle?.horse}>
          <TbEngine />
        </LogoWithTitle>

        <LogoWithTitle
          title="Puissance ficale"
          subtitle={vehicle?.horse_fiscal}
        >
          <TbEngine />
        </LogoWithTitle>

        <LogoWithTitle title="couleur" subtitle={vehicle?.color}>
          <AiOutlineBgColors />
        </LogoWithTitle>

        <LogoWithTitle title="Kilometres" subtitle={vehicle?.miles}>
          <IoMdSpeedometer />
        </LogoWithTitle>
        <LogoWithTitle title="Places" subtitle={vehicle?.number_place}>
          <GiCarSeat />
        </LogoWithTitle>

        <LogoWithTitle title="Nombre de porte" subtitle={vehicle?.number_doors}>
          <GiCarDoor />
        </LogoWithTitle>

        <LogoWithTitle title="Carosserie" subtitle={vehicle?.vehicle_condition}>
          <AiFillCar />
        </LogoWithTitle>

        <LogoWithTitle title="Intérieur" subtitle={vehicle?.interior}>
          <AiTwotoneStar />
        </LogoWithTitle>

        <LogoWithTitle title="Pneus" subtitle={vehicle?.tires}>
          <AiTwotoneStar />
        </LogoWithTitle>

        <LogoWithTitle title="Boîte de vitesse" subtitle={vehicle?.gear_box}>
          <GiGearStickPattern />
        </LogoWithTitle>

        <LogoWithTitle title="Etat du moteur" subtitle={vehicle?.engine}>
          <TbEngine />
        </LogoWithTitle>

        <LogoWithTitle title="Fuites" subtitle={vehicle?.leak}>
          <GiLeak />
        </LogoWithTitle>

        <LogoWithTitle
          title="Controle technique"
          subtitle={vehicle?.technical_control}
        >
          <TbFileStar />
        </LogoWithTitle>

        <LogoWithTitle
          title="Carnet de suivui, entretient "
          subtitle={vehicle?.notebook}
        >
          <TbFileStar />
        </LogoWithTitle>
      </div>
      <div className="text-gray-700">
        <span className="text-lg font-semibold text-gray-900 ">
          Description
        </span>
        <p>{vehicle?.description}</p>
      </div>
      <div className="text-gray-700">
        <span className="text-lg font-semibold text-gray-900 ">A prévoir</span>
        <p>
          Lorem loremloremloremlorem loremloremlorem loremloremlorem loremlorem
        </p>
      </div>
      <div className="flex flex-col justify-around px-3 text-center lg:flex-row">
        <button
          type="button"
          className="mb-10 inline-flex items-center justify-center rounded-md border border-transparent bg-secondary bg-opacity-80 px-10 py-4 text-xl font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Nous appeler
        </button>
        <button
          type="button"
          className="mb-10 inline-flex items-center justify-center rounded-md border border-transparent bg-secondary bg-opacity-80 px-10 py-4 text-xl font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Envoyer un message
        </button>
      </div>
      {/* <h1>
        <FormattedMessage
          id="page.home.title"
          values={{ b: (chunks) => <b>{chunks}</b> }}
        />
      </h1> */}
      {/* <pre>{JSON.stringify(vehicle, null, 2)}</pre>; */}
    </div>
  );
}

export async function getStaticPaths({ locale }) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({ database_id: databaseId });

  const paths = [];

  response.results.forEach((item) => {
    paths.push({
      params: {
        id: item.id,
      },
      locale,
    });
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { id } }) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const pageId = id;
  const response = await notion.pages.retrieve({ page_id: pageId });

  const name_vehicle =
    response.properties.nom_du_vehicule.title[0]?.plain_text || null;
  const description =
    response.properties.description.rich_text[0]?.text.content || null;

  const horse = response.properties.cheveaux?.number || null;

  const horse_fiscal = response.properties.puissance_fiscale?.number || null;

  const type = response.properties.type.multi_select[0]?.name || null;

  let energie =
    response.properties.carburant.rich_text[0]?.text.content || null;

  const gear_box =
    response.properties.type_boite_vitesse.rich_text[0]?.text.content || null;

  const number_doors = response.properties.nombre_porte?.number || null;

  const number_place = response.properties.nombre_place?.number || null;

  const years = response.properties.annees?.number || null;

  const miles = response.properties.kilometre?.number || null;

  const color = response.properties.couleurs.rich_text[0]?.text.content || null;

  const pictures = response.properties.images?.files || null;

  const vehicle_condition = response.properties.carosserie.select?.name || null;

  const tires = response.properties.pneus.select?.name || null;

  const interior = response.properties.interieur.select?.name || null;

  const engine = response.properties.moteur.select?.name || null;

  const leak = response.properties.fuites.select?.name || null;

  const technical_control =
    response.properties.controle_technique.select?.name || null;

  const notebook = response.properties.carnets.select?.name || null;

  return {
    props: {
      vehicle: {
        name_vehicle,
        description,
        horse,
        horse_fiscal,
        type,
        energie,
        gear_box,
        number_doors,
        number_place,
        years,
        miles,
        color,
        pictures,
        vehicle_condition,
        tires,
        interior,
        engine,
        leak,
        technical_control,
        notebook,
      },
    },
    revalidate: 1,
  };
}
