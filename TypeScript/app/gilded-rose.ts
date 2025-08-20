import { Item } from '@/Item';
import { UpdatableItem } from './UpdatableItem';
import { AgedBrie } from './AgedBrie';
import { BackstagePass } from './BackstagePass';
import { Sulfuras } from './Sulfuras';
import { Conjured } from './Conjured';
import { NormalItem } from './NormalItem';

export class GildedRose {
  items: Array<Item>;
  private updatableItems: Array<UpdatableItem>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
     this.updatableItems = items.map(GildedRose.wrapItem);
  }

  static wrapItem(item: Item): UpdatableItem {
    switch (item.name) {
      case 'Aged Brie':
        return new AgedBrie(item);
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new BackstagePass(item);
      case 'Sulfuras, Hand of Ragnaros':
        return new Sulfuras(item);
      default:
        if (item.name.startsWith('Conjured')) {
          return new Conjured(item);
        }
        return new NormalItem(item);
    }
  }

  updateQuality() {
    for (const item of this.updatableItems) {
      item.update();
    }
    return this.items;
  }

}