import cluster from "cluster";
import os from "os";
import { bootstrap } from "./server";

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  bootstrap();
}
