function get(n){
  var long='1234567890abcdefghABCDEFGH';  //随机范围
	var result='';
  for(var i=0;i<n;i++){
    result+= long[Math.floor(Math.random()*long.length)];
  }
  return result;
}

get(5) //5个随机码
