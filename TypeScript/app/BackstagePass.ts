import { UpdatableItem } from "./UpdatableItem";

export class BackstagePass extends UpdatableItem {
  update(): void {
    if (this.sellIn < 11 && this.sellIn >= 6) {
      this.increaseQuality(2);
    } else if (this.sellIn < 6 && this.sellIn >= 0) {
      this.increaseQuality(3);
    } else {
      this.increaseQuality(1);
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}