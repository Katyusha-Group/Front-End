import "./CoursesPanel.css";
export default function CoursesPanelSwitch () 
{
    return (
        <Row className="SwitchCard">
            <Col className="SwitchCardCol">
                <ReactSwitch className="Switch"
                checked={SwitchChecked}
                onChange={handleSwitchChange}
                />
            </Col>
            <Col className="SwitchCardCol">
                <p>
                فقط دروس قابل اخذ
                </p>
            </Col>
        </Row>
    );
}