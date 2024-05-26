import React,{ useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Profile.scss";

import { deleteUser } from '../../redux/actions';
import LoadingModal from '../../components/Modal/LoadingModal/LoadingModal';
import AlertModal from '../../components/Modal/AlertModal/AlertModal';
import SuccessModal from '../../components/Modal/SuccessModal/SuccessModal';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userReducer.userInfo);

    console.log('user', user._id)
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleDeleteAccount = async () => {
        setShowLoadingModal(true);
        try {
            let response = await dispatch(deleteUser(user));
            console.log('delete response: ', response);
            setShowLoadingModal(false);
            if (response == null) {
                setShowLoadingModal(false);
                setSuccessMessage("Account deleted successfully!");
                setShowSuccessModal(true);
            } else {
                setShowLoadingModal(false);
                setAlertMessage("Failed to delete account. Please try again.");
                setShowAlertModal(true);
            }
        } catch (error) {
            console.log('error: ', error);
            setShowLoadingModal(false);
            setAlertMessage("An error occurred while deleting the account. Please try again.");
            setShowAlertModal(true);
        }
    };

    const handleCloseAlertModal = () => {
        setShowAlertModal(false);
        window.location.replace('/')
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        window.location.replace('/')
    };


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
                   <div className="grid grid-cols-2 gap-2">
                        {user ? (
                            <>
                               <a href="/edit-profile" className="btn-edit-profile">Edit Profile</a>
                                <button onClick={handleDeleteAccount} className="btn-delete-profile">Delete Profile</button>
                            </>
                        ) : (
                            ''
                        )}
                        
                   </div>
                </div>
            </div>

            {showLoadingModal && (
                <LoadingModal />
            )}
            {showAlertModal && (
                <AlertModal onClose={handleCloseAlertModal}>
                    <p>{alertMessage}</p>
                </AlertModal>
            )}
            {showSuccessModal && (
                <SuccessModal onClose={handleCloseSuccessModal}>
                    <p>{successMessage}</p>
                </SuccessModal>
            )}
        </div>
    );
};

export default Profile;
