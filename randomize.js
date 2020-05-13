function randomize(arr){
   var copyarr = [].concat(arr);
   var arrayforexport = [];
   for (var i = 0;i<arr.length;i++){
   var rand = Math.floor(Math.random()*copyarr.length);
    arrayforexport.push(copyarr[rand]);
    copyarr.splice(rand,1)
   }
   return arrayforexport;
}
module.exports = randomize;
