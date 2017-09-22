exec = require('child_process').exec
exec('g++ hello.cpp -o hello',function(error,stdout,stderr){
  if(error)
  {
    console.log('Error occured: ' + error);
    return;
  }
  exec("echo '2 3'|./hello",function(error,stdout,stderr){
   if(error)
   {
      console.log('Error occured: ' + error);
      return;
   }
   console.log(stdout);
   console.log(stderr);
  });
});

