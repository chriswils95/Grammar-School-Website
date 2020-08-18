function callback(name) {
    console.log(name);
  }


function higher(name, callback) {
    return(callback(name))
  }

  function checkAdult(age) {
    return age == 8;
  }

 var arr = [3,2,1,4,8];

 console.log(arr.findIndex(checkAdult));