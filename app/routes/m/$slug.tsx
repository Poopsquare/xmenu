import { json, LoaderFunction, useLoaderData } from "remix";
import {CategorySection} from "~/components/category/category";
import {getMenu} from "~/data";
import { Menu } from "~/types";

type LoaderData = {
  menu: Menu
}

export const loader: LoaderFunction = async ({ params }) => {
  console.log("slug", params.slug);
  const menu = await getMenu()
  return json<LoaderData>({ menu });
};

export default function MenuView() {
  const { menu } = useLoaderData<LoaderData>();
  return (
    <article>
      <h1>{menu.name}</h1>
      {menu.categories.map(category => (
        <CategorySection category={category} key={category.name}/>
      ))}
    </article>
  );
}
