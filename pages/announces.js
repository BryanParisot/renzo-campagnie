import Link from "next/link";
import { Client } from "@notionhq/client";
import HeaderWithImgTitle from "../components/Navigation/HeaderWithImgTitle";
import Announces from "../components/Announces/Announces";

export default function AnnouncesPage({ vehicle }) {
  return (
    <div>
      <HeaderWithImgTitle />
      <div className="p-8 md:p-20">
        <div>
          {vehicle.map((item, index) => (
            <div key={item.id}>
              <Link href={`/vehicle/${item.id}`}>
                {console.log(item.properties?.images?.files[0]?.file.url)}
                <Announces
                  image={item.properties?.images?.files[0]?.file.url}
                  title={item.properties?.nom_du_vehicule?.title[0]?.plain_text}
                  description={
                    item.properties?.description?.rich_text[0]?.plain_text
                  }
                  vitesse={
                    item.properties?.type_boite_vitesse?.rich_text[0]
                      ?.plain_text
                  }
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
    // filter: {
    //   property: "type",
    //   multi_select: {
    //     contains: "Utilitaire",
    //   },
    // },
  });
  return {
    props: {
      vehicle: response.results,
    },
  };
}