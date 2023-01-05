/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import React from 'react';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// tostify
const notifyError = () =>
  toast.error('An error has been occured', {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
  });
const notifySuccess = () =>
  toast.success('Item Deleted', {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
  });

const DeleteModal = ({ title, setIsDeleteModalOpen, rowId }) => {
  const DeleteHandler = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${rowId}`)
      .then(() => notifySuccess())
      .catch(() => notifyError());
  };

  return (
    <div onClick={() => setIsDeleteModalOpen(false)} className="container">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <div>
          <h2>Are you sure you want to delete this ?</h2>
          <p>{title}</p>
        </div>
        <div className="line" />
        <div className="btn-container">
          <button className="del button-17" onClick={DeleteHandler} type="button">
            Delete
          </button>
          <button className='button-17' onClick={() => setIsDeleteModalOpen(false)} type="button">
            Cancel
          </button>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </div>
  );
};

export default DeleteModal;
