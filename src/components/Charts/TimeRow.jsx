import React from "react";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";

const MonthDay = (Section) => (
    <div>
      {Object.entries(Section).map(([count, entry]) => {
        return (
          <div>
            {/* {console.log("Hello")} */}
            {entry !== null && (
              <div classname = "Examcontents" style={{ margin: '5px' }}>
                {entry.name}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )

const TimeRow = ({ periods, ExamT }) => {
    return (
    <>
        <tr className="TableROW">
        <td className="ExamChart_column text-center">{ExamT}</td>
        {/* {
          for (let i = 0; i < keyedExamTable.length; i++) 
            for (let j = 0; j < keyedExamTable[i].length; j++) 
                console.log("item is" + keyedExamTable[i][j][k]);  
        } */}
        {Object.entries(periods).map(([date, entry]) => {
            return (
            <td className="ExamChart_column2" key={date}>
                {/* {console.log ("date is: " + date)}
                {console.log("Entry is: " + entry)} */}
                {MonthDay(entry)}
            </td>
            )
        })}
        </tr>
    </>
    );
};
export default TimeRow;