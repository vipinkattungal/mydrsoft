import { Modal, Backdrop, Fade } from '@mui/material';
import { useState } from 'react';

function ImageLogoModal(props) {
  const { imageSrc, imageAlt, modalContent } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <img src={imageSrc} alt={imageAlt} onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            {modalContent}
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default ImageLogoModal;
