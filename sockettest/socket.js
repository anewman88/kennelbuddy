var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var fs = require('fs');

emitter.on('start_read',function(file_name){
      console.log("Started Reading file....nn");
      fs.readFile(file_name, 'utf8', function (err,data) {
        if (err) {
          emitter.emit('error','from_read');
        }
        else{
            console.log("Done Reading file....nn");
            emitter.emit('print_content',data);
          }
  });
});

emitter.on('print_content',function(data){
      console.log("Printing content of file....nn");
      console.log(data);
      emitter.emit('done');
});

emitter.on('error',function(type){
      console.log("Faced error while "+type);
      emitter.emit('done');
});

emitter.on('done',function(){
      console.log("Ok its done !");
});

emitter.emit('start_read','/etc/hosts');