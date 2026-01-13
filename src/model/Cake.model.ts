import { IItem, ItemCategory } from './Item.model';

class Cake implements IItem {
    getCategory(): ItemCategory {
        return ItemCategory.CAKE;
    }
}
