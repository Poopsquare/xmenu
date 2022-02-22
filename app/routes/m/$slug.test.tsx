import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useLoaderData } from "remix";
import Menu from "./$slug";

vi.mock("remix", () => {
  // mock whatever remix APIs you're using
  return {
    useLoaderData: vi.fn(),
  };
});

test("works", () => {
  const menu = {

    id: 'menu-id',
    slug: 'menu',
    name: 'menu name',
    categories: [
      {
        id: 'category-id',
        name: 'category',
        items: [
          {
            id: 1,
            name: 'item',
            price: 33,
            description: 'item-description',
          }
        ]
      }
    ],
  }

  // @ts-expect-error https://github.com/vitest-dev/vitest/issues/745
  useLoaderData.mockImplementation(() => ({ menu }));
  render(<Menu />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(menu.name);
});
