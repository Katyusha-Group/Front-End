
import React from "react";
// react plugin for creating notifications over the dashboard
// import NotificationAlert from "react-notification-alert";
import { useInfo } from "../../contexts/InfoContext";
// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import "./Shoping.css"

function Shoping() {
  const {info,changeInfo} = useInfo()
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
    <div className="wrapper">
        <div className="main-panel">
      <div className="content_without_sidebar">
        <div className="react-notification-alert-container">
          {/* <NotificationAlert ref={notificationAlertRef} /> */}
        </div>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    {info.shop.map((x) => {
                      return(
                        <>
                        <Col className="ml-auto mr-auto text-center category" xs="6" sm='4'>
                      <Button
                      color="primary"
                      size="sm"
                      >
                      <i className="tim-icons icon-simple-remove" />

                      </Button>
                    </Col>
                    <Col className="ml-auto mr-auto text-center category" xs="6" sm='4'>
                      {x.price}
                    </Col>
                    <Col className="ml-auto mr-auto text-center category" xs="6" sm='4' >
                      {x.name}
                    </Col>
                        </>
                      )
                    })}
                    
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      </div>
      </div>
    </>
  );
}

export default Shoping;
