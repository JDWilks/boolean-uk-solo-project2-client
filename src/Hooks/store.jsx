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
        wallet: user.wallet,
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

  // i was using local state but need access to allNft's in other components so 👇👇👇👇👇

  allNfts: [],
  setAllNfts: (nfts) => {
    set((store) => ({
      allNfts: nfts,
    }));
  },
  // allNfts: [],
  // setAllNfts: (nfts) =>
  //   set((store) => ({
  //     allNfts: [
  //       {
  //         id: nfts.id,
  //         name: nfts.name,
  //         price: nfts.price,
  //         description: nfts.description,
  //         url: nfts.url,
  //       },
  //     ],
  //   })),
}));
