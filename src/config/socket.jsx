import { io } from "socket.io-client";

export const socket = io("https://direful-current-production.up.railway.app/", {
  extraHeaders: {
    ["my-auth"]: "abcd",
  },
});
