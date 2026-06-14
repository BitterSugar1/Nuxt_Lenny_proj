const notFoundError = () =>
  createError({
    statusCode: 404,
    statusMessage: "Страница не найдена",
  });

export const useJsonCollection = (cacheKey, resourcePath) =>
  useAsyncData(cacheKey, () => $fetch(resourcePath), {
    default: () => [],
  });

export const useJsonEntry = (cachePrefix, slugRef, resourcePathFactory) =>
  useAsyncData(
    () => `${cachePrefix}:${slugRef.value}`,
    async () => {
      if (!slugRef.value) {
        throw notFoundError();
      }

      try {
        return await $fetch(resourcePathFactory(slugRef.value));
      } catch {
        throw notFoundError();
      }
    },
    {
      watch: [slugRef],
    },
  );

export const createDateParts = (rawValue) => {
  const parsedDate = new Date(rawValue);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return {
    date: parsedDate.toLocaleDateString("ru-RU"),
    time: parsedDate.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
};
