export function Create2DArray (Rows, Cols) {                              // Create a 2D array
    const arr = [];
    for (let i = 0; i < Rows; i++) {
        arr[i] = Array(Cols).fill(0);
    }
    return arr;
}

export function uniquifyArrayByKey(arr, key) {                             // Removing duplicate keys (uniquify by key)
    return arr.filter((item, index) => {
        return (
        arr.findIndex((element) => element[key] === item[key]) === index
        );
    });
}

export function MapTimeToIndex (start_time)
{
    const times = [
        "08:00:00",
        "10:00:00",
        "12:00:00",
        "14:00:00",
        "16:00:00",
        "18:00:00"
      ];
      let index = times.findIndex(time => time === start_time);
      if (index === -1) {
        const times2 = [
            "07:30:00",
            "09:30:00",
            "11:30:00",
            "13:30:00",
            "15:30:00",
            "17:30:00"
          ];
          let index2 = times2.findIndex(time => time === start_time);
          if (index2 === -1) {
            const times3 = [
              "08:30:00",
              "10:30:00",
              "12:30:00",
              "14:30:00",
              "16:30:00",
              "18:30:00"
            ];
            return times3.findIndex(time => time === start_time);
          }
          return index2;
      }
      return index;
}

export function MapDateToIndex (date)
{
    console.log("DATE IS: " + date);
    const lastTwoChars = parseInt(date.substring(date.length - 2));
    let DateIndex = lastTwoChars - 13;
    if (DateIndex < 0)
    {
        DateIndex += 30;
    }
    return DateIndex;
}