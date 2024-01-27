import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import Instructorall from "./Instructorall";
import * as styles from '../../assets/css/UsersListModal.module.css';
import { userFollowings } from '../../hooks/userFollowings';
import { userFollowers } from '../../hooks/userFollowers';
const UsersListModal = ({ showModal, handleClose, IsFollowing,
  username }) => {
  const [show, setShow] = React.useState(showModal);
  let { Followings, setFollowings } = userFollowings(username, showModal);
  let { Followers, setFollowers } = userFollowers(username, showModal);

  React.useEffect(() => {
    setShow(showModal);
  }, [showModal]);

  const handleCloseModal = () => {
    setShow(false);
    handleClose();
  };

  const handleButtonClick = () => {
  };

  const Title = IsFollowing ? "دنبال میشود" : "دنبال کننده";
  return (
    <Modal show={show} onHide={handleCloseModal} className={styles.Modal}>
      <div className={styles.ModalContents}>
        <Modal.Header className={styles.ModalHeader}>
          <h2 className={styles.ModalTitle}>{Title}</h2>
          <button className="close" onClick={handleCloseModal}>
            <span>&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className={styles.ModalBody}>
          <div className={styles.bodyContent}>
            <Instructorall
              username={username}
              IsFollowing={IsFollowing}
              IsModal={true}
              Followings={Followings}
              Followers={Followers}
              handleButtonClick={handleButtonClick}
              handleCloseModal={handleCloseModal}
            />
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default UsersListModal;
