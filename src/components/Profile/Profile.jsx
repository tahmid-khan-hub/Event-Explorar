import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSave = () => {
    if (!displayName.trim()) {
      setError('Display name cannot be empty');
      return;
    }

    updateProfile(user, {
      displayName,
      photoURL,
    })
      .then(() => {
        setSuccess('Profile updated successfully!');
        // alert('Profile updated successfully')
        setError('');
        navigate("/")
      })
      .catch((err) => {
        setError('Failed to update profile');
        console.error(err);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-24 p-6 bg-base-200 rounded-lg shadow-xl ">
      <h2 className="text-2xl font-bold text-center mb-4">Your Profile</h2>

      <div className="flex justify-center mb-4">
        <img
          src={photoURL || 'https://via.placeholder.com/100'}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      <label className="block mb-2 font-semibold">Display Name</label>
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        className="input input-bordered w-full mb-4"
        placeholder="Enter display name"
      />

      <label className="block mb-2 font-semibold">Photo URL</label>
      <input
        type="text"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
        className="input input-bordered w-full mb-4"
        placeholder="Enter photo URL"
      />

      <label className="block mb-2 font-semibold">Email (read-only)</label>
      <input
        type="text"
        value={user?.email}
        readOnly
        className="input input-bordered w-full mb-4 bg-gray-100"
      />

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}

      <button onClick={handleSave} className="btn w-full mt-6">
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
