parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ARcY":[function(require,module,exports) {
var t=function(t,i,e){this.x=t,this.y=i,this.slope=i/t,this.opacity=.1,this.speed=Math.max(Math.random()*e,1)};t.prototype.distanceTo=function(t,i){return Math.sqrt(Math.pow(t-this.x,2)+Math.pow(i-this.y,2))},t.prototype.resetPosition=function(i,e,n){return t.apply(this,arguments),this};var i={getRandomStar:function(e,n,a,s,h){var o=i.getRandomPosition(e,n,a,s);return new t(o.x,o.y,h)},getRandomPosition:function(t,i,e,n){return{x:Math.floor(Math.random()*e+t),y:Math.floor(Math.random()*n+i)}}},e=function(t){this.container=document.getElementById(t),this.canvasElem=this.container.getElementsByTagName("canvas")[0],this.canvas=this.canvasElem.getContext("2d"),this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.starField=[]};e.prototype._updateStarField=function(){var t,e,n,a;for(t=0;t<this.numStars;t++)e=this.starField[t],a=Math.min(e.speed,Math.abs(e.speed/e.slope)),e.x+=e.x>0?a:-a,e.y=e.slope*e.x,e.opacity+=e.speed/100,(Math.abs(e.x)>this.width/2||Math.abs(e.y)>this.height/2)&&(n=i.getRandomPosition(-this.width/10,-this.height/10,this.width/5,this.height/5),e.resetPosition(n.x,n.y,this.maxStarSpeed))},e.prototype._renderStarField=function(){var t,i;for(this.canvas.fillStyle="rgba(0, 0, 0, .55)",this.canvas.fillRect(0,0,this.width,this.height),t=0;t<this.numStars;t++)i=this.starField[t],this.canvas.fillStyle="rgba(255, 255, 255, "+i.opacity+")",this.canvas.fillRect(i.x+this.width/2,i.y+this.height/2,2,2)},e.prototype._renderFrame=function(t){var i=t-(this.prevFrameTime||0);window.requestAnimationFrame(this._renderFrame.bind(this)),(i>=30||!this.prevFrameTime)&&(this.prevFrameTime=t,this._updateStarField(),this._renderStarField())},e.prototype._adjustCanvasSize=function(t,i){this.width=this.canvasElem.width=t||this.container.offsetWidth,this.height=this.canvasElem.height=i||this.container.offsetHeight},e.prototype._watchCanvasSize=function(t){var i,e,n=t-(this.prevCheckTime||0);window.requestAnimationFrame(this._watchCanvasSize.bind(this)),(n>=444||!this.prevCheckTime)&&(this.prevCheckTime=t,i=this.container.offsetWidth,e=this.container.offsetHeight,this.oldWidth===i&&this.oldHeight===e||(this.oldWidth=i,this.oldHeight=e,this._adjustCanvasSize(i,e)))},e.prototype._initScene=function(t){var e;for(e=0;e<this.numStars;e++)this.starField.push(i.getRandomStar(-this.width/2,-this.height/2,this.width,this.height,this.maxStarSpeed));window.requestAnimationFrame(this._renderFrame.bind(this)),window.requestAnimationFrame(this._watchCanvasSize.bind(this))},e.prototype.render=function(t,i){this.numStars=t||100,this.maxStarSpeed=i||3,this._initScene(this.numStars)},function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,e){var n=(new Date).getTime(),a=Math.max(0,16-(n-t)),s=window.setTimeout(function(){i(n+a)},a);return t=n+a,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var n=new e("fullScreen").render(333,2);
},{}]},{},["ARcY"], null)