export const isEmptyObj = (obj: object) => {
  if (!obj) return true;
  if (!Object?.keys(obj)) return true;
  if (!Object?.keys(obj)?.length) return true;
  return false;
};
