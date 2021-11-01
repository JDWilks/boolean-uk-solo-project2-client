import create from "zustand";

export const useStore = create((set, get) => ({
  modal: "",
  setModal: (modalName) => {
    set((store) => ({
      modal: modalName,
    }));
  },

  //
  currentUser: {},
  setCurrentUser: (user) => {
    set((store) => ({
      currentUser: {
        firstName: user.firstName,
        email: user.email,
        id: user.id,
        role: user.role,
      },
    }));
  },

  // currentNft is used so when you click a card all the info from that card is saved in state and can be used to populate fields

  currentNft: {},
  setCurrentNft: (nft) => {
    set((store) => ({
      currentNft: nft,
    }));
  },
}));
