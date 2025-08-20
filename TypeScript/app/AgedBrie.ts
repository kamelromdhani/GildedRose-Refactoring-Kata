import { UpdatableItem } from "./UpdatableItem";
export class AgedBrie extends UpdatableItem {
  update(): void {
    this.increaseQuality(1);
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.increaseQuality(1);
    }
  }
}