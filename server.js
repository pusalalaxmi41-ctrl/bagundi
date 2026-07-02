const fs = require("fs");
const http = require("http");
const path = require("path");

const root = path.join(__dirname, "outputs");
const port = Number(process.env.PORT || 5173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
};

function sendFile(req, res, filePath, stat) {
  const ext = path.extname(filePath).toLowerCase();
  const type = types[ext] || "application/octet-stream";
  const headers = {
    "Accept-Ranges": "bytes",
    "Cache-Control": "no-store",
    "Content-Type": type,
  };

  const range = req.headers.range;
  if (range && ext === ".mp4") {
    const match = range.match(/bytes=(\d*)-(\d*)/);
    if (!match) {
      res.writeHead(416, headers);
      res.end();
      return;
    }

    const start = match[1] ? Number(match[1]) : 0;
    const end = match[2] ? Number(match[2]) : stat.size - 1;
    if (start >= stat.size || end >= stat.size || start > end) {
      res.writeHead(416, {
        ...headers,
        "Content-Range": `bytes */${stat.size}`,
      });
      res.end();
      return;
    }

    res.writeHead(206, {
      ...headers,
      "Content-Length": end - start + 1,
      "Content-Range": `bytes ${start}-${end}/${stat.size}`,
    });
    fs.createReadStream(filePath, { start, end }).pipe(res);
    return;
  }

  res.writeHead(200, {
    ...headers,
    "Content-Length": stat.size,
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent(req.url.split("?")[0]);
  const safePath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = path.normalize(path.join(root, safePath));

  if (!filePath.startsWith(root)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(filePath, (error, stat) => {
    if (error || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    sendFile(req, res, filePath, stat);
  });
});

server.listen(port, () => {
  console.log(`Bagundhi demo running at http://127.0.0.1:${port}`);
});
