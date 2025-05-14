import { useState } from 'react';

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => setShowModal((prev) => !prev);

  return { showModal, toggleShowModal };
};
