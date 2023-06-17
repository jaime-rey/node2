const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8");
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

        await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data, "utf8");
        await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you", "utf8");
        await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "PromiseComplete.txt"));
        
        const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseComplete.txt"), "utf8");
        console.log(newData);
    } catch(err){
        console.error(err);
    }
}

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

fileOps();

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});

// fs.writeFile(
//     path.join(__dirname, "files", "reply.txt"), "Nice to meet you",
//     (err) => {
//       if (err) throw err;
//       console.log('operation complete');
    
//       fs.appendFile(
//         path.join(__dirname, "files", "reply.txt"), "\n\nYes it is",
//         (err) => {
//           if (err) throw err;
//           console.log('append complete');
//         }
//       )

//       fs.rename(
//         path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"),
//         (err) => {
//           if (err) throw err;
//           console.log('rename complete');
//         }
//       )
//     }
    
//   );

//   fs.appendFile(
//       path.join(__dirname, "files", "test.txt"), "Texting text",
//       (err) => {
//         if (err) throw err;
//         console.log('append complete');
//       }
//     );