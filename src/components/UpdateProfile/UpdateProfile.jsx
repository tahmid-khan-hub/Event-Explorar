import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const UpdateProfile = () => {
    const {user} = use(AuthContext);
    return (
        <div>
            {user.displayName}
        </div>
    );
};

export default UpdateProfile;