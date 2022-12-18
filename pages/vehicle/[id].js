import { Client } from "@notionhq/client";

const vehicle = ({ vehicle }) => {
  console.log(vehicle);
  return <pre>{JSON.stringify(vehicle, null, 2)}</pre>;
};

export async function getStaticPaths() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({ database_id: databaseId });

  const paths = [];

  response.results.forEach((item) => {
    paths.push({
      params: {
        id: item.id,
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const pageId = id;
  const response = await notion.pages.retrieve({ page_id: pageId });

  const name_vehicle = response.properties.nom_du_vehicule.title[0].plain_text;
  const description = response.properties.description.rich_text[0].text.content;
  const horse = response.properties.cheveaux.number;
  const horse_fiscal = response.properties.puissance_fiscale.number;
  const type = response.properties.type.multi_select[0].name;
  const energie = response.properties.carburant.rich_text[0].text.content;
  const gear_box =
    response.properties.type_boite_vitesse.rich_text[0].text.content;
  const number_doors = response.properties.nombre_porte.number;
  const number_place = response.properties.nombre_place.number;
  const years = response.properties.annees.number;
  const miles = response.properties.kilometre.number;
  const color = response.properties.couleurs.rich_text[0].text.content;
  const pictures = response.properties.images.files;

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
      },
    },
  };
}

export default vehicle;
