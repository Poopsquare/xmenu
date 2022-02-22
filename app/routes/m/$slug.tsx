import { LoaderFunction, useLoaderData } from "remix";
import {CategorySection} from "~/components/category/category";
import {getMenu} from "~/data";
import { Menu } from "~/types";


export const loader: LoaderFunction = async ({ params }) => {
  console.log("slug", params.slug);
  return await getMenu()
};

export default function Menu() {
  const menu = useLoaderData<Menu>();
  return (
    <article>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h1>{menu.name}</h1>
      {menu.categories.map(category => (
        <CategorySection category={category} key={category.name}/>
      ))}
    </article>
  );
}
