"use strict";module.exports=class{loaded=0;total;constructor(t){this.total=t}increase(t=1){this.loaded+=t,this.loaded===this.total?this.onComplete(this.total,this.loaded):this.onIncrease(this.total,this.loaded)}onIncrease(t,o){}onComplete(t,o){}};
