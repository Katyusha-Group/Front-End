import { MapDateToIndex } from "../../Functions/ExamChart/MapDateToIndex";
import { mapTimeToIndex } from "../../Functions/mapTimeToIndex";
const GeneratekeyedExamTable = (ExamTable) => {                             // Mapping the courses into keyedExamTable
    const emptySection = () => ({
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null
      });
      const emptyTime = () => ({
        0: emptySection(),
        1: emptySection(),
        2: emptySection(),
        3: emptySection(),
        4: emptySection(),
        5: emptySection(),
        6: emptySection(),
        7: emptySection(),
        8: emptySection(),
        9: emptySection(),
        10: emptySection(),
        11: emptySection(),
        12: emptySection(),
        13: emptySection(),
        14: emptySection(),
        15: emptySection(),
        16: emptySection(),
        17: emptySection(),
        18: emptySection(),
        19: emptySection(),
        20: emptySection(),
        21: emptySection()
      });
  
      // const NumInEachSlot = Create2DArray(6, 22);
      let NumInEachSlot = [];
      let Rows = 6, Cols = 22;
      for (let i = 0; i < Rows; i++) {
        NumInEachSlot[i] = Array(Cols).fill(0);
      }
      return ExamTable.reduce(
        (lessonsKeyedByDayAndPeriod, currentPeriod) => {
          
          try
          {
            let ExamTime = currentPeriod.exam_times[0].exam_start_time;
            let ExamDay = currentPeriod.exam_times[0].date;
          }
          catch 
          {
            return lessonsKeyedByDayAndPeriod;
          }
  
          let ExamTime = currentPeriod.exam_times[0].exam_start_time;
          let ExamDay = currentPeriod.exam_times[0].date;
          
          let time = mapTimeToIndex(ExamTime, true);
          let day = MapDateToIndex(ExamDay);
  
          try
          {
            NumInEachSlot[time][day] ++;
          }
          catch 
          {
            return lessonsKeyedByDayAndPeriod;
          }
  
          NumInEachSlot[time][day] ++;
          let count = NumInEachSlot[time][day];
          try {
            lessonsKeyedByDayAndPeriod[time][day][count] = currentPeriod;
          }
          catch (error) {
          }
          return lessonsKeyedByDayAndPeriod
        },
        {
          0: emptyTime(),
          1: emptyTime(),
          2: emptyTime(),
          3: emptyTime(),
          4: emptyTime(),
          5: emptyTime(),
        });
};

export default GeneratekeyedExamTable;