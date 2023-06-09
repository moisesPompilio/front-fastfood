import { categories } from '.';
import { Category } from '../../model/entity/Category';

export async function UpdateCategory(
  id: string,
  categoryUpdate: Category,
): Promise<void> {
  const index = categories.findIndex(category => category.id === id);
  categories[index] = categoryUpdate;
}
