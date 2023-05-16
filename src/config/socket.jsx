import { io } from "socket.io-client";

export const socket = io("develocity-blockchain-stagging-production-ea42.up.railway.app", {
  extraHeaders: {
    ["my-auth"]: "abcd",
  },
});
