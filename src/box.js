// # This is Title
// Here you can write something amazing about this file.
// 1. Great design
// 2. Scalable 
// 3. Colorful
//    * Red
//    * Blue
//    * Yellow
var Box = function(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
};
  // Not all comments should become docs
Box.prototype.getVolume = function() {
  return this.length * this.width * this.height;
};
// But it is good to have some comments as doc
/* Not all comments should become docs*/
module.exports = Box;