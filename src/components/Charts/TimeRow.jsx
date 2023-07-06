import React from "react";
import { showLoading } from "../../components/LoadingAlert/LoadingAlert";
import { closeLoading } from "../../components/LoadingAlert/LoadingAlert";

const MonthDay = (Section) => (
    <div>
      {Object.entries(Section).map(([count, entry]) => {
        return (
          <div>
            {entry !== null && (
              <div>
                <div>
                  <div style={{ margin: '5px' }}>
                    {entry.name}
                  </div>
                </div>
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
        {Object.entries(periods).map(([date, entry]) => {
            return (
            <td className="ExamChart_column2" key={date}>
                {console.log ("Exam time is: " + ExamT)}
                {console.log("Entry is: " + entry)}
                {MonthDay(entry)}
            </td>
            )
        })}
        </tr>
    </>
    );
};
export default TimeRow;