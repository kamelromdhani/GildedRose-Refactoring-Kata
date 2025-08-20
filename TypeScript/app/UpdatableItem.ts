import { Item } from "./Item";

export abstract class UpdatableItem {
  protected item: Item;

  constructor(item: Item) {
    this.item = item;
  }

  get name(): string {
    return this.item.name;
  }

  get sellIn(): number {
    return this.item.sellIn;
  }

  set sellIn(value: number) {
    this.item.sellIn = value;
  }

  get quality(): number {
    return this.item.quality;
  }

  set quality(value: number) {
    this.item.quality = value;
  }

  abstract update(): void;

  protected increaseQuality(amount: number): void {
    this.quality = Math.min(50, this.quality + amount);
  }

  protected decreaseQuality(amount: number): void {
    this.quality = Math.max(0, this.quality - amount);
  }
}
