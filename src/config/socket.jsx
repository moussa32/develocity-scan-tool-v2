import { io } from "socket.io-client";
// stagging
// export const socket = io('http://20.218.124.106:1885');

// live
export const socket = io("https://develocity-blockchain-stagging-production.up.railway.app/", {
  extraHeaders: {
    ["my-auth"]: "abcd",
  },
});
