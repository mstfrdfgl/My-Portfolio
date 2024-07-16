import { useContext, useRef, useEffect } from "react";
import { MyContext } from "../../context/MyContext";
import { useTranslation } from "react-i18next";

export default function Subsmodal() {
  const { isModalOpen, toggleModal } = useContext(MyContext);
  const dialogRef = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    toggleModal(false);
  };

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      onClose={handleCloseModal}
    >
      <h2 className="text-xl font-bold text-white my-4">{t("already-subs")}</h2>
      <p className="text-white mb-4">{t("already-subs-text")}</p>
      <button
        onClick={handleCloseModal}
        className="mt-4 bg-[#4731d3] text-white py-2 px-4 rounded"
      >
        Close
      </button>
    </dialog>
  );
}
