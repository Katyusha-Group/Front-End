export function mapTimeToIndex(startTime) {
  const timeRanges = [
    ["07:30:00", "09:00:00"],
    ["09:00:01", "10:30:00"],
    ["10:30:01", "12:00:00"],
    ["13:00:00", "14:30:00"],
    ["14:30:01", "16:00:00"],
    ["16:00:01", "17:30:00"],
    ["17:30:01", "19:00:00"],
    ["19:00:01", "20:30:00"]
  ];

  for (let i = 0; i < timeRanges.length; i++) {
    const [start, end] = timeRanges[i];
    if (startTime >= start && startTime <= end) {
      return i;
    }
  }

  return -1;
}

export function createCourseGroupsArray(courses) {                         // Creates an array to store number of courses in each time slot
    const courseGroups = [];
    for (let i = 0; i < 6; i++) {
        courseGroups[i] = Array(8).fill(0);
    }
    return courseGroups;
}

export function uniquifyArrayByKey(arr, key) {                             // Removing duplicate keys (uniquify by key)
    return arr.filter((item, index) => {
        return (
        arr.findIndex((element) => element[key] === item[key]) === index
        );
    });
}

export function Create2DArray (Rows, Cols) {                              // Create a 2D array
    const arr = [];
    for (let i = 0; i < Rows; i++) {
        arr[i] = Array(Cols).fill(0);
    }
    return arr;
}

export function containsWhitespace(str) {
  return /\s/.test(str);
} 