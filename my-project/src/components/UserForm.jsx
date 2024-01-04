import React, { useState } from 'react';

const UserForm = ({ onSave }) => {
  const [user, setUser] = useState({
    userId: '',
    userName: '',
    emailId: '',
    mobileNo: '',
    address: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (isValidPhoneNumber(user.mobileNo)) {
      onSave(user);
      setUser({
        userId: '',
        userName: '',
        emailId: '',
        mobileNo: '',
        address: '',
      });
      setError('');
    } else {
      setError('Please enter a valid 10-digit phone number.');
    }
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };

  return (
    <div>
    <div className='grid grid-cols-2'>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div className='grid grid-cols-2 px-8'>
      <label className='text-xl '>User Id:</label>
      <input type="text" name="userId" value={user.userId} onChange={handleChange} />
      </div>
      <div className='grid grid-cols-2 px-8'>
      <label className='text-xl '>User Name:</label>
      <input type="text" name="userName" value={user.userName} onChange={handleChange} />
      </div>
      <div className='grid grid-cols-2 px-8'>
      
      <label className='text-xl '>Email Id:</label>
      <input type="text" name="emailId" value={user.emailId} onChange={handleChange} />
      </div>
      <div className='grid grid-cols-2 px-8'>
      <label className='text-xl '>Mobile No:</label>
      <input
        type="text"
        name="mobileNo"
        value={user.mobileNo}
        onChange={handleChange}
        maxLength="10" // Limit input to 10 characters
      />
       </div>
      <div className='grid grid-cols-2 px-8'>
      <label className='text-xl '>Address:</label>
      <input type="text" name="address" value={user.address} onChange={handleChange} />
      </div>
      
    </div>
    <button className=' rounded-lg m-8 border-2 w-fit pt-2 px-8 bg-green-400' onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserForm;