// nodeconst express = require("express");
// const fs = require("fs");
// const app = express();
// app.set("view engine", "ejs");
// app.get("/", function (req, res) {
//   res.render(__dirname + "/file/index.ejs");
// });

// app.get("/rendervideo", function (req, res) {
//   const path = "1.mp4";
//   const stat = fs.statSync(path);
//   const fileSize = stat.size;
//   const range = req.headers.range;

//   if (range) {
//     const parts = range.replace(/bytes=/, "").split("-");
//     const start = parseInt(parts[0], 10);
//     const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

//     const chunkSize = end - start + 1;
//     const file = fs.createReadStream(path, { start, end });
//     const head = {
//       "Content-Range": `bytes ${start}-${end}/${fileSize}`,
//       "Accept-Ranges": "bytes",
//       "Content-Length": chunkSize,
//       "Content-Type": "video/mp4",
//     };
//     res.writeHead(206, head);
//     file.pipe(res);
//   } else {
//     const head = {
//       "Content-Length": fileSize,
//       "Content-Type": "video/mp4",
//     };
//     res.writeHead(200, head);
//     fs.createReadStream(path).pipe(res);
//   }
// });

// app.listen(3000, function () {
//   console.log("Running on 3000 port");
// });
