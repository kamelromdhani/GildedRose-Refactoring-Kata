import { UpdatableItem } from "./UpdatableItem";

export class Conjured extends UpdatableItem {
  update(): void {
    this.decreaseQuality(2);
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.decreaseQuality(2);
    }
  }
}