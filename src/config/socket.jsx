import { io } from "socket.io-client";

export const socket = io("https://rooted-zoo-production.up.railway.app/", {
  extraHeaders: {
    ["my-auth"]: "abcd",
  },
});
