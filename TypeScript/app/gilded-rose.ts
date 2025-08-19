export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItem(item)
    }

    return this.items;
  }

  private updateItem(item: Item): void {
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      return;
    }


    if (item.name === 'Aged Brie') {
      this.increaseQuality(item, 1);
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sellIn < 11 && item.sellIn >= 6) {
        this.increaseQuality(item, 2);
      } else if (item.sellIn < 6 && item.sellIn >= 0) {
        this.increaseQuality(item, 3);
      } else {
        this.increaseQuality(item, 1);
      }
    } else {
      this.decreaseQuality(item, 1);
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      if (item.name === 'Aged Brie') {
        this.increaseQuality(item, 1);
      }
      else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        item.quality = 0
      }
      else {
        this.decreaseQuality(item, 1);
      }
    }
  }

  private increaseQuality(item: Item, amount: number) {
    if (item.quality < 50) {
      item.quality = Math.min(50, item.quality + amount);
    }
  }

  private decreaseQuality(item: Item, amount: number) {
    if (item.quality > 0) {
      item.quality = item.quality - amount;
    }
  }
}


