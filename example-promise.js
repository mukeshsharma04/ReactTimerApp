// function getTempCallBack(location,callback) {
//   callback(undefined, 78);
//   callback('City Not found');
// }
//
// getTempCallBack('Philadelphia', function(err, temp){
//   if(err) {
//     console.log('error',err);
//   }else {
//     console.log('success',temp);
//   }
// });
//
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject("City Not Found");
//     },1000);
//   });
// }
//
// getTempPromise('Philadelphia')
//   .then(function(temp){
//     console.log('promise Success',temp);
//   }, function (err){
//     console.log('promise error',err);
//   });


function addNumber(a,b) {
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }else {
      reject("A & B needs to number")
    }
  });
}

addNumber(3,2).then(function(sum){
  console.log("success", sum);
}, function (err){
  console.log("error", err)
});

addNumber('Hello',2).then(function(sum){
  console.log("success", sum);
}, function (err){
  console.log("error", err)
});
