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

    describe('Aged Brie', () => {
    it('should decrease sellIn and increase quality by 1 when sellIn >= 0', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 10)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0]).toEqual({
        name: 'Aged Brie',
        sellIn: 4,
        quality: 11,
      });
    });

    it('should increase quality by 2 when sellIn < 0', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0]).toEqual({
        name: 'Aged Brie',
        sellIn: -1,
        quality: 12,
      });
    });

    it('should not increase quality above 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0]).toEqual({
        name: 'Aged Brie',
        sellIn: 4,
        quality: 50,
      });
    });
  });

  describe('Sulfuras', () => {
    it('should not change sellIn or quality', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0]).toEqual({
        name: 'Sulfuras, Hand of Ragnaros',
        sellIn: 0,
        quality: 80,
      });
    });
  });

  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});

