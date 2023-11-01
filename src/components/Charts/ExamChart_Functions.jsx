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

export function MapDateToIndex (date, ExamDates)
{
    console.log ("Exam dates are: "  + ExamDates)
    return ExamDates.findIndex(day => date.includes(day))
}

