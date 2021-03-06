import React, { FC } from 'react';
import Avatar from 'components/avatar';
import PersonalData from 'components/personalData';
import Button from 'react-bootstrap/Button';
import { ChecksWrapper } from 'app/services';
import { apiLogout }  from 'app/api';
import { action, useDsp } from 'app/store';

const Profile: FC = () => {
  const dispatch = useDsp();
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__user">
          <Avatar/>
          <PersonalData/>
          <div className="profile-data__action-button w-100 d-grid">
            <Button
              variant="primary"
              type="button"
              onClick={() => dispatch(action.mVariantShow())}
              >
                Add check
              </Button>
          </div>
          <div className="profile-data__exit-button w-100 d-grid mt-auto">
            <Button
              variant="primary"
              type="button"
              onClick={() => apiLogout(() => dispatch(action.userSet({})))}
            >
              Logout
            </Button>
          </div>
        </div>
        <ChecksWrapper/>
      </div>
    </div>
  )
}

export default Profile;
