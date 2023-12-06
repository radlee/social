import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

function ProfileCard() {
  return (
    <div className='ProfileCard'>
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>

        <div className="ProfileName">
            <span>Mafanga's White Hun</span>
            <span>Seniour UI/UX Designer</span>
            <span></span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>9,890</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>3</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />
        </div>

        <span>
            My Profile
        </span>
    </div>
  )
}

export default ProfileCard