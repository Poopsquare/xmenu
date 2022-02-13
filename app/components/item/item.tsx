import { Item } from '~/types'

type ItemProps = {
  item: Item
}

export const ListItem = ({item}: ItemProps) => {
  return (
    item.description ? (
      <li>
        {item.name} - {item.description} - {item.price / 100}
      </li>
    ) : (
      <li>
        {item.name} - {item.price / 100}
      </li>
    )
  );
}
