/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import React, { useState } from 'react';
import './modal.css';

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
  toast.success('Niceee ! ! !', {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
  });

const EditModal = ({ setIsEditModalOpen, rowId }) => {
  const [newData, setNewData] = useState({
    userId: 1,
  });
  const editHandler = () => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${rowId}`, { newData })
      .then(() => notifySuccess())
      .catch(() => notifyError());
  };

  return (
    <div onClick={() => setIsEditModalOpen(false)} className="container">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <h3>Edit User</h3>
        <form onSubmit={editHandler}>
          <label>
            <span>Title :</span>
            <input
              type="text"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  title: e.target.value,
                })
              }
            />
          </label>
          <label>
            <span>Body :</span>
            <input
              type="text"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  body: e.target.value,
                })
              }
            />
          </label>
        </form>
        <div className="line" />
        <div className="btn-container">
          <button  className='edit-btn edit button-17' onClick={editHandler} type="submit">
            Edit
          </button>
          <button className='button-17' onClick={() => setIsEditModalOpen(false)} type="button">
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

export default EditModal;
