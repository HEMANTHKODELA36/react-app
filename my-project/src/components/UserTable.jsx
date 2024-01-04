import React, { useState } from 'react';

const UserTable = ({ users, onAddUserClick, onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.userName.toLowerCase().includes(filter.toLowerCase()) ||
      user.emailId.toLowerCase().includes(filter.toLowerCase()) ||
      user.mobileNo.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='p-8'>
      <input className='border-2'
        type="text"
        placeholder="Filter by User Name, Email Id, or Mobile No"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          onFilterChange(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>User Id</th>
            <th>User Name</th>
            <th>Email Id</th>
            <th>Mobile No</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.userId}>
              <td>{index + 1}</td>
              <td>{user.userId}</td>
              <td>{user.userName}</td>
              <td>{user.emailId}</td>
              <td>{user.mobileNo}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <button className=' rounded-lg m-8 border-2 w-fit pt-2 px-8 bg-blue-200' onClick={onAddUserClick}>Add User</button>
      </div>
    </div>
  );
};

export default UserTable;