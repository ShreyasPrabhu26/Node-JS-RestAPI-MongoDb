const fs = require('fs');

function logRequestAndResponse(fileName){
   return(req,res,next)=>{
        fs.appendFile(fileName,
            `\nDate: ${Date.now().toString()}\n
               IP:${req.ip}
               Method:${req.method}
               Path:${req.path}
            `,
            (err,data)=>{
            next();
       });
   }
}

module.exports = {logRequestAndResponse};