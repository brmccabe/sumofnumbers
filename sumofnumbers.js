console.log(sum_for([1,2,3,4,5]));
console.log(sum_while([1,2,3,4,5]));
console.log(sum_underscore([1,2,3,4,5]));
console.log(sum_recursion([1,2,3,4,5]));

function sum_for(list){
  let total = 0;
  for(let i = 0; i < list.length; i++){
    total += list[i];
  }
  return total;
}

function sum_while(list){
  let total = 0;
  let counter = 0;
  while(counter < list.length){
    total += list[counter];
    counter++;
  }
  return total;
}

function sum_underscore(list){
  return _.reduce(list, function(memo, num){return memo + num},0);
}

function sum_recursion(list){
  if(list.length == 0){
    return 0;
  }
  return list[0] + sum_recursion(list.slice(1, list.length));
}