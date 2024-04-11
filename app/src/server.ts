import http from "http";

export const server = http.createServer((req, res) => {
  // console.time("time");
  // for (let i = 0; i < 1e9; i++) {}
  // console.timeEnd("time");

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

export function bootstrap() {
  server.listen(3000, () => {
    console.log(
      `Server with process id #${process.pid} running at http://localhost:3000`
    );
  });
}
