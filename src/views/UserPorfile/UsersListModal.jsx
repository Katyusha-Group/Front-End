import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInfo } from "../../contexts/InfoContext";
import Instructorall from "./Instructorall";
import * as styles from '../../assets/css/UsersListModal.module.css';
import { userFollowings } from '../../hooks/userFollowings';
import { userFollowers } from '../../hooks/userFollowers';
const UsersListModal = ({ showModal, handleClose, IsFollowing, 
  // Followings, Followers, 
  username }) => {
    let {Followings, setFollowings} = userFollowings(username);
    let {Followers, setFollowers} = userFollowers(username);
    const [show, setShow] = React.useState(showModal);
    React.useEffect(() => {
        setShow(showModal);
      }, [showModal]);

    const handleCloseModal = () => {
        setShow(false);
        handleClose();
    };

    const handleButtonClick = () => {
      // Update the state variable to trigger rerender
      // setRerender(!rerender);
      console.log("Button clicked!");
    };

    const Title = IsFollowing ? "دنبال میشود"  : "دنبال کننده";
    // console.log("Username in userlist modal is: " , username);
    return (
      <Modal show={show} onHide={handleCloseModal} className={styles.Modal}>
      <div className={styles.ModalContents}>
        <Modal.Header closeButton className={styles.ModalHeader}>
          <h2 className={styles.ModalTitle}>{Title}</h2>
          <button className="close" onClick={handleCloseModal}>
            <span>&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className={styles.ModalBody}>
          <Instructorall 
            username={username} 
            IsFollowing={IsFollowing} 
            IsModal={true}
            Followings={Followings} 
            Followers={Followers}
            handleButtonClick={handleButtonClick}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} >
            بستن
          </Button>
        </Modal.Footer> */}
      </div>
    </Modal>
  );
};

export default UsersListModal;
