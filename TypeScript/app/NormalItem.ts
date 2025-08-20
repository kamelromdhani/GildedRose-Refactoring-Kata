import { UpdatableItem } from "./UpdatableItem";

class NormalItem extends UpdatableItem {
  update(): void {
    this.decreaseQuality(1);
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.decreaseQuality(1);
    }
  }
}