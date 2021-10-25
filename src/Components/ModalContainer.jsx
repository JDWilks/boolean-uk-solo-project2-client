import React from "react";
import { useStore } from "../Hooks/store";

import NftModal from "../Components/NftModal";
import CreateNftModal from "./CreateNftModal";
import AdminNftModal from "../Components/AdminNftModal";

const modals = {
  NftModal: NftModal,
  CreateNftModal: CreateNftModal,
  AdminNftModal: AdminNftModal,
};

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}
