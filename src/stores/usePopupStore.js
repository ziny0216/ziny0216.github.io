import { defineStore } from 'pinia';

export const usePopupStore = defineStore('usePopup', {
  state: () => ({
    popups: {
      isProjectPopup: false,
    },
  }),
  actions: {
    setPopupState(popupName, open = false) {
      this.popupName = popupName;
      if (this.popups[popupName]) {
        this.popups[popupName] = !this.popups[popupName];
      } else {
        this.popups[popupName] = true;
      }

      if (open) {
        this.popups[popupName] = true;
      }
    },

    closeAllPopups() {
      Object.keys(this.popups).forEach(popup => {
        if (this.popups[popup]) {
          this.popups[popup] = false;
        }
      });
    },
  },
  getters: {
    isAnyPopupOpen(state) {
      return Object.values(state.popups).some(popupState => popupState);
    },
  },
});
