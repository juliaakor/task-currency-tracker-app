export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen?: boolean;
}
