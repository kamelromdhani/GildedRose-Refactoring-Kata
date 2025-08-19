import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  describe('Normal Items', () => {
    it('should decrease sellIn and quality by 1 when sellIn >= 0', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 5, 10)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0]).toEqual({
        name: 'Normal Item',
        sellIn: 4,
        quality: 9,
      });
    });

    it('should decrease quality by 2 when sellIn < 0', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 0, 10)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0]).toEqual({
        name: 'Normal Item',
        sellIn: -1,
        quality: 8,
      });
    });

    it('should not decrease quality below 0', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 5, 0)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0]).toEqual({
        name: 'Normal Item',
        sellIn: 4,
        quality: 0,
      });
    });
  });

  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});