// window.location.origin: http://localhost:3000
// console.log("window.location", window.location.origin);
const originUrl = window.location.origin;
export const redirectHomeUrl = originUrl ?? process.env.NEXT_PUBLIC_DOMAIN;
