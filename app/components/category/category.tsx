import { Category, Item } from '~/types'
import {ListItem} from '~/components/item';

type CategorySectionProps = {
  category: Category
}

export const CategorySection = ({category}: CategorySectionProps) => {
  return (
    <section>
      <h2>{category.name}</h2>
      <ul>
        {category.items.map((item: Item) => <ListItem item={item} key={item.name} />)}
      </ul>
    </section>
  );
}
