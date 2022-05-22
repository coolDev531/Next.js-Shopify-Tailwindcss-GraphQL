export const JSONParse = (object: any, origin = "") => {
  try {
    return JSON.parse(object);
  } catch (err) {
    console.log({ origin, object });
    return {};
  }
};
