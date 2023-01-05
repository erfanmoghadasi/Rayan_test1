/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
// react icons
import { FiTrash2 } from 'react-icons/fi';
import { TbEdit } from 'react-icons/tb';

import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteModal from '../modal/DeleteModal';
import EditModal from '../modal/EditModal';

const DataTable = () => {
  const [userData, setUserData] = useState();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(0);

  const getUserData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20');
    const data = await response.data;
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const deleteButtonHandler = (rowId) => {
    setIsDeleteModalOpen(true);
    setSelectedRow(rowId - 1);
  };
  const editButtonHandler = (rowId) => {
    setIsEditModalOpen(true);
    setSelectedRow(rowId - 1);
  };

  if (!userData) {
    return <div>loading . . .</div>;
  }
  return (
    <div>
      <TableContainer sx={{ marginBottom: 10 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Body</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '150px' }}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.body}</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    display: 'flex',
                    gap: 2,
                    height: '150px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <button
                    className="edit-btn"
                    onClick={() => editButtonHandler(row.id)}
                    type="button"
                  >
                    <TbEdit />
                  </button>
                  <button
                  className='del-btn'
                    onClick={() => deleteButtonHandler(row.id)}
                    type="button"
                  >
                    <FiTrash2 />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ------------------------ MODALS SECTION ---------------------------------- */}
      {isDeleteModalOpen && (
        <DeleteModal
          title={userData[selectedRow].title}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          rowId={selectedRow}
        />
      )}
      {isEditModalOpen && (
        <EditModal title={userData[selectedRow].title} setIsEditModalOpen={setIsEditModalOpen} rowId={selectedRow} />
      )}
    </div>
  );
};

export default DataTable;
