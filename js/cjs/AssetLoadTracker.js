'use strict';

/**
 * Tracks assets loaded manually.
 * @param total The total number of assets to track.
 * @author Ian Yong (iantomarcello)
 */
class AssetLoadTracker {
    loaded = 0;
    total;
    constructor(total) {
        this.total = total;
    }
    increase(amount = 1) {
        this.loaded += amount;
        if (this.loaded === this.total) {
            this.onComplete(this.total, this.loaded);
        }
        else {
            this.onIncrease(this.total, this.loaded);
        }
    }
    onIncrease(total, loaded) {
        // to be overwritten
    }
    onComplete(total, loaded) {
        // to be overwritten
    }
}

module.exports = AssetLoadTracker;
