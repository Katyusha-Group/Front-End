const GenerateKeyedTimetable = (timetable) => {                             // Mapping the courses into keyedTimetable
    const emptySection = () => ({
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    });
    const emptyDay = () => ({
      0: emptySection(),
      1: emptySection(),
      2: emptySection(),
      3: emptySection(),
      4: emptySection(),
      5: emptySection(),
      6: emptySection(),
      7: emptySection()
    });

    const courseGroups = [];
    for (let i = 0; i < 6; i++) {
        courseGroups[i] = Array(8).fill(0);
    }
    const NumInEachSlot = courseGroups;

    return timetable.reduce(
      (lessonsKeyedByDayAndPeriod, currentPeriod) => {
        currentPeriod.course_times.forEach(time => {

          const day = time.course_day;

          let TimeIndex = time.course_time_representation;
          if (TimeIndex === undefined)
          {
            TimeIndex = mapTimeToIndex(time.course_start_time, false);
          }

          NumInEachSlot[day][TimeIndex]++;

          let count = NumInEachSlot[day][TimeIndex];
          try {
            lessonsKeyedByDayAndPeriod[day][TimeIndex][count] = currentPeriod;
          }
          catch (error) {
            console.log("ERROR is: " + error);
          }  
        }
        );
        return lessonsKeyedByDayAndPeriod
      },
      {
        0: emptyDay(),
        1: emptyDay(),
        2: emptyDay(),
        3: emptyDay(),
        4: emptyDay(),
        5: emptyDay(),
      });
  };

  export default GenerateKeyedTimetable;