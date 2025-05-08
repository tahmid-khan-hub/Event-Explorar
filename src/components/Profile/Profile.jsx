import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const navigate = useNavigate();

  useEffect(() => {
        document.title = "EventExplorer - UpdateProfile"
        AOS.init({
        duration: 1000,
        once: false, 
      });
    }, []);

  const handleSave = () => {
    if (!displayName.trim()) {
      toast.error('Display name cannot be empty');
      return;
    }

    if (!photoURL.trim()) {
      toast.error('Photo URL cannot be empty');
      return;
    }

    updateProfile(user, {
      displayName,
      photoURL,
    })
      .then(() => {
        toast.success('Profile updated successfully!')
        // alert('Profile updated successfully')
        navigate("/")
      })
      .catch((err) => {
        toast.error("Failed to update profile")
        console.error(err);
      });
  };

  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" className="max-w-md mx-auto mt-10 mb-24 p-6 bg-base-200 rounded-lg shadow-xl shadow-purple-400 border-1 border-purple-400">
      <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>

      <div className="flex justify-center mb-4">
        <img
          src={photoURL?.trim() ? photoURL : 'https://via.placeholder.com/100'}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://i.ibb.co.com/9mw72Wtz/image.png'; 
          }}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover ring-4 ring-purple-500 ring-offset-2 ring-offset-white"
        />
      </div>

      <label className="block mb-2 font-semibold">Display Name</label>
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        className="input input-bordered w-full mb-4 border-purple-400"
        placeholder="Enter display name"
      />

      <label className="block mb-2 font-semibold">Photo URL</label>
      <input
        type="text"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
        className="input input-bordered w-full mb-4 border-purple-400"
        placeholder="Enter photo URL"
      />

      <label className="block mb-2 font-semibold">Email (read-only)</label>
      <input
        type="text"
        value={user?.email}
        readOnly
        className="input input-bordered w-full mb-4 border-purple-400 bg-gray-100"
      />

      <button onClick={handleSave} className="btn w-full mt-6 text-white bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600">
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
