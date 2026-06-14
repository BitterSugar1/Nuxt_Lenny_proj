export const useUiStore = defineStore("ui", () => {
  const isNavigationOpen = ref(false);
  const modalState = reactive({});

  const hasOpenModal = computed(() =>
    Object.values(modalState).some(Boolean),
  );

  const openModal = (name) => {
    modalState[name] = true;
  };

  const closeModal = (name) => {
    modalState[name] = false;
  };

  const closeAllModals = () => {
    Object.keys(modalState).forEach((name) => {
      modalState[name] = false;
    });
  };

  const toggleNavigation = () => {
    isNavigationOpen.value = !isNavigationOpen.value;
  };

  const closeNavigation = () => {
    isNavigationOpen.value = false;
  };

  return {
    isNavigationOpen,
    modalState,
    hasOpenModal,
    openModal,
    closeModal,
    closeAllModals,
    toggleNavigation,
    closeNavigation,
  };
});
