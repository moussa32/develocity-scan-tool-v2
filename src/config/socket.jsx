import { io } from "socket.io-client";

export const socket = io("https://grotesque-war-production.up.railway.app/", {
  extraHeaders: {
    ["my-auth"]: "abcd",
  },
});
