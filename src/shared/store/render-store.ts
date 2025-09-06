import { create } from 'zustand';

type ModalData = {
  children: React.ReactNode;
  containerClassName?: string;
  noCloseButton?: boolean;
  title?: string;
  description?: string;
  fullScreen?: boolean;
};
type AlertDialogData = {
  title?: string;
  description?: string;
  confirmText?: string;
  onConfirm?: () => void;
  onlyCloseAction?: boolean;
  onClose?: () => void;
  onCancel?: () => void;
  confirmButtonProps?: Record<string, unknown>;
  show: boolean;
};

type Breadcrumb = {
  text: string;
  href?: string;
};

interface RenderState {
  modalData: ModalData;
  setModalData: (value: ModalData) => void;
  closeModal: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  toggleLoading: () => void;
  alertDialogData: AlertDialogData;
  setAlertDialogData: (value: AlertDialogData) => void;
  closeAlertDialog: () => void;
  openedSidebar: boolean;
  setOpenedSidebar: (value: boolean) => void;
  toggleOpenedSidebar: () => void;
  breadcrumbs: Breadcrumb[] | null;
  setBreadcrumbs: (value: Breadcrumb[] | null) => void;
}

const initialModalData: ModalData = {
  children: null,
  containerClassName: '',
  noCloseButton: false,
  title: '',
  description: '',
  fullScreen: false,
};
const initialAlertDialogData = {
  title: '',
  confirmText: '',
  description: '',
  onClose: () => {},
  onConfirm: () => {},
  onCancel: () => {},
  show: false,
};
export const useRenderStore = create<RenderState>()((set) => ({
  modalData: initialModalData,
  breadcrumbs: null,
  setBreadcrumbs: (value) => {
    set(() => ({
      breadcrumbs: value,
    }));
  },
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
  alertDialogData: initialAlertDialogData,
  setAlertDialogData: (value: AlertDialogData) =>
    set(() => ({
      alertDialogData: value,
    })),
  closeAlertDialog: () =>
    set(() => ({
      alertDialogData: initialAlertDialogData,
    })),
  openedSidebar: false,
  setOpenedSidebar: (value: boolean) =>
    set(() => ({
      openedSidebar: value,
    })),
  toggleOpenedSidebar: () =>
    set((state) => ({
      openedSidebar: !state.openedSidebar,
    })),
}));
