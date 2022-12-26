import { Client } from "@notionhq/client";
import Link from "next/link";

export default function Utilitaire({ vehicle }) {
  console.log(vehicle);
  return (
    <div>
      <h1>Notion with Next.js</h1>
      <div>
        {vehicle.map((item, index) => (
          <div key={item.id}>
            <Link href={`/vehicle/${item.id}`}>
              <p> {item.properties?.description?.rich_text[0]?.plain_text}</p>
            </Link>
          </div>
        ))}
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
