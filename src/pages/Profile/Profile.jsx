import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
    const user = useSelector((state) => state.userReducer.userInfo);

    return (
        <div className="profile">
            <div className="container">
                <div className="profile-body">
                    <div className="profile-image">
                        <img className="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="profile-detail">
                        {user ? (
                            <>
                                <div className="font-bold text-center">{user.username}</div>
                                <div className="mt-1">{user.email}</div>
                            </>
                        ) : (
                            <div className="font-bold text-center">Guest</div>
                        )}
                    </div>
                   <div className="flex justify-center">
                        {user ? (
                            <>
                               <a href="/edit-profile" className="btn-edit-profile">Edit Profile</a>
                            </>
                        ) : (
                            ''
                        )}
                        
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
