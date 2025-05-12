import { create } from 'zustand';

type ModalData = {
  children: React.ReactNode;
  containerClassName?: string;
  callback?: () => void;
  noCloseButton?: boolean;
  title?: string;
  description?: string;
  fullScreen?: boolean;
};

interface RenderState {
  modalData: ModalData;
  setModalData: (value: ModalData) => void;
  closeModal: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  toggleLoading: () => void;
}

const initialModalData: ModalData = {
  children: null,
  containerClassName: '',
  callback: () => {},
  noCloseButton: false,
  title: '',
  description: '',
  fullScreen: false,
};
export const useRenderStore = create<RenderState>()((set) => ({
  modalData: initialModalData,
  setModalData: (value: ModalData) => {
    set(() => ({
      modalData: value,
    }));
  },
  closeModal: () => {
    set(() => ({
      modalData: initialModalData,
    }));
  },
  loading: false,
  setLoading: (loading: boolean) => set(() => ({ loading })),
  toggleLoading: () => set((state) => ({ loading: !state.loading })),
}));
