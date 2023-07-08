import React from "react";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";
import { containsWhitespace } from "./CoursesPanel_Functions";
// Token
// const tokenJson = localStorage.getItem("authTokens");
// const tokenClass = JSON.parse(tokenJson);
// const token = tokenClass.token.access;
import "./CoursesPanel.css"

function DayPeriod (Input) {
  const [showLesson, setShowLesson] = React.useState({
    flag: false,
    data: {},
  });
  const [modalData, setModalData] = React.useState(
    []
  );
  function apiForModalData(x ,showOrNot){
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
    const shopId = JSON.parse(localStorage.getItem("shopId"));
    showLoading();
    console.log(x);
    fetch(`https://www.katyushaiust.ir/courses/${x}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }).then((response) => response.json())
    .then((d) => {
      console.log(d);
      setModalData(d);
      if(showOrNot){
        setShowLesson({ flag: true, data: d })
      }
      
    });
    
    closeLoading();
    // const data = await response.json();
    
   }
}

const DayRow = ({ periods, dayName }) => {
  // showLoading();
    return (
    <>
      {/* {showLoading()} */}
      <tr className="TableROW">
      <td className="CoursesPanel_column text-center">{dayName}</td>
      {Object.entries(periods).map(([time, entry]) => {
          return (
          <td className="CoursesPanel_column2" key={time}>
              {DayPeriod(entry)}
          </td>
          )
      })}
      </tr>
      {/* {closeLoading()} */}
    </>
    );
    // closeLoading();
};
export default DayRow;