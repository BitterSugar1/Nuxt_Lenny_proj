const collections = import.meta.glob("../../public/json/*.json", {
  eager: true,
  import: "default",
});

export const useJsonCollection = (_cacheKey, resourcePath) => {
  const fileName = resourcePath.split("/").pop();
  const key = `../../public/json/${fileName}`;
  return { data: ref(collections[key] ?? []) };
};
