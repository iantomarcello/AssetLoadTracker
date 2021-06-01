# AssetLoadTracker
A plain manual asset loading tracker.

# Example
```js
// main.js
import AssetLoadTracker from './js/esm/AssetLoadTracker.js';

const assetCount = 3;
let tracker = new AssetLoadTracker(assetCount);

// Function called when increase() is called when `loaded` is less than
// `total`
tracker.onIncrease = function(loaded, total) {
  let percentage = loaded / total
  updateLoadingUI(percentage);
}

// Function called when increase() is called when `loaded` is more than
// or equal to `total`
tracker.onComplete = function() {
  updateLoadingUI(100);
  hideLoadingUI();
  showLoadedUI();
}

// Example asset 1
fetch('./assets/asset1.json')
  .then(res => res.json())
  .then(json => {
    // do something with the json.
    tracker.increase();
  })

// Example asset 2
new Promise(resolve => {
  const img = new Image;
  img.src = `./assets/asset2.png`;
  document.body.appendChild(img);
  resolve(null)
})
.then(() => {
  tracker.increase();
});

// Example asset 3
document.querySelect('video').addEventListener('loadeddata', () => {
  tracker.increase();
});
```

# Properties
### **total**: number
The total number of assets to track. Assigned during the initiation of the tracker as a parameter.

### **loaded** : number
An incremeting number that is increased using the `increase()` method.
When this property is equal or more than `total` property,
the method `onComplete()` will be called. More on these methods below.


# Methods
### **increase** ( **value**: number )
Increases the `loaded` property by value passed. Default value is 1.
This method calls two other blank methods `onIncrease()` and `onComplete()`

### **onIncrease** ( **loaded**: number, **total**: number )
A blank method that is called when calling `increase()` method
with `loaded` is less than `total`.
Mainly overwritten for your own needs. See examples above.

### **onComplete** ( **loaded**: number, **total**: number )
A blank method that is called when calling `increase()` method
with `loaded` is more than or equal to `total`.
Mainly overwritten for your own needs. See examples above.


## Note
I usually use this in [THREEJS](https://threejs.org/) for a custom loading ui.