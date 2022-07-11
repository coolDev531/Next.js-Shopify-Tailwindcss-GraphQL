export const serializeForm = (formElement) => {
  const obj = {};
  const formData = new FormData(formElement);
  for (const key of formData.keys()) {
    obj[key] = formData.getAll(key);
  }
  return obj as { [T: string]: string[]; email?: string[] };
};
