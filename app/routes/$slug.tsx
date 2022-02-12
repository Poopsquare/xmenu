import { LoaderFunction, useLoaderData } from "remix";
import { BANDECO } from "~/mocks/bandeco";
import { Category, Item, Menu } from "~/types/menu";

const mockLoadingMenu = new Promise(function (resolve) {
  setTimeout(resolve, 2000, BANDECO);
});

export const loader: LoaderFunction = async ({ params }) => {
  console.log("slug", params.slug);
  return await mockLoadingMenu;
};

export default function Menu() {
  const menu = useLoaderData<Menu>();
  return (
    <article>
      <h1>{menu.name}</h1>
      {menu.categories.map((category: Category) => (
        <section>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item: Item) =>
              item.description ? (
                <li>
                  {item.name} - {item.description} - {item.price / 100}
                </li>
              ) : (
                <li>
                  {item.name} - {item.price / 100}
                </li>
              )
            )}
          </ul>
        </section>
      ))}
    </article>
  );
}
