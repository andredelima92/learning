import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";

function Modal({}, ref) {
  const [visible, setVisible] = useState(true);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div>
      Modal aberto
      <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  );
}

export default forwardRef(Modal);
