import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";
import popImage from "../../../assets/images/popImage.JPG";
import "./SubscribeModal.scss";
import { AiOutlineClose } from "react-icons/ai";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const SubscribeModal = () => {
  const url = `https://app.us9.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(handleOpen(), 5000);
  }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='d-flex justify-content-end mb-3 closeIcon' onClick={handleClose}>
            <AiOutlineClose />
          </div>
          <div className='d-flex justify-content-between popUpModal'>
            <div className='popUpModalImage'>
              <img src={popImage} alt="popImage" />
            </div>
            <div className='popUpModalWelcome'>
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                  />
                )}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default SubscribeModal;