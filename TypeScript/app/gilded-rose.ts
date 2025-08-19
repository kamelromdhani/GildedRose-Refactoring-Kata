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

    if (item.name === 'Aged Brie' || item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.quality < 50) {
        item.quality = item.quality + 1
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
        }
      }
    } else {
      if (item.quality > 0) {
        item.quality = item.quality - 1
      }
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      if (item.name === 'Aged Brie') {
        this.increaseQuality(item);
      } 
      else if (item.name === 'Backstage passes to a TAFKAL80ETC concert'){
        item.quality = 0
      }
      else {
          this.decreaseQuality(item);
      }
    }
  }

  private increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  private decreaseQuality(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }
}


