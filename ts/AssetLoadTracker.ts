/**
 * Tracks assets loaded manually.
 */

export default class AssetLoadTracker {
  loaded: number = 0;
  total: number;

  constructor(total: number) {
    this.total = total;
  }

  increase(amount: number = 1) {
    this.loaded += amount;

    if ( this.loaded === this.total ) {
      this.onComplete(this.total, this.loaded);
    } else {
      this.onIncrease(this.total, this.loaded);
    }
  }

  onIncrease(total: number, loaded: number): any {
    // to be overwritten
  }

  onComplete(total: number, loaded: number): any {
    // to be overwritten
  }
}