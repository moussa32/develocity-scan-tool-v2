import { io } from "socket.io-client";

export const socket = io("https://api.xite.solutions/", {
  extraHeaders: {
    ["my-auth"]: "abcd",
  },
});
