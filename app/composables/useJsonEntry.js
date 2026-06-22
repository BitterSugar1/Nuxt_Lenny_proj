const entries = import.meta.glob("../../public/json/**/*.json", {
  eager: true,
  import: "default",
});

const notFoundError = () =>
  createError({
    statusCode: 404,
    statusMessage: "Страница не найдена",
    fatal: true,
  });

export const useJsonEntry = (_cachePrefix, slugRef, resourcePathFactory) => {
  const resolve = () => {
    if (!slugRef.value) {
      throw notFoundError();
    }
    const path = resourcePathFactory(slugRef.value);
    const key = `../../public${path}`;
    const mod = entries[key];
    if (!mod) {
      throw notFoundError();
    }
    return mod;
  };

  const data = ref(resolve());

  watch(slugRef, () => {
    data.value = resolve();
  });

  return { data };
};
