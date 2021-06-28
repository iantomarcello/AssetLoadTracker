const AssetLoadTracker = require('../js/cjs/AssetLoadTracker');

test('Basic ticking', () => {
  const assets = 5;
  const tracker = new AssetLoadTracker(assets);

  tracker.onIncrease = (t, o) => {
    expect(o).toBeLessThan(t);
  }

  tracker.onComplete= (t, o) => {
    expect(o).toEqual(t);
    clearInterval(interval);
  }

  let interval = setInterval(() => {
    tracker.increase();
  }, 250)
});


test('Ticking with varying intervals', () => {
  const assets = 5;
  const tracker = new AssetLoadTracker(assets);

  tracker.onIncrease = (t, o) => {
    expect(o).toBeLessThan(t);
  }

  tracker.onComplete= (t, o) => {
    expect(o).toEqual(t);
    clearInterval(interval);
  }

  let interval = setInterval(() => {
    tracker.increase();
  }, Math.random() * 1000)
});