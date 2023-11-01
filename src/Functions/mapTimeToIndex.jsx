export function mapTimeToIndex (InputTime, IsExam) 
{
    const timeRanges_Class = [
        ["07:30:00", "09:00:00"],
        ["09:00:01", "10:30:00"],
        ["10:30:01", "12:00:00"],
        ["13:00:00", "14:30:00"],
        ["14:30:01", "16:00:00"],
        ["16:00:01", "17:30:00"],
        ["17:30:01", "19:00:00"],
        ["19:00:01", "20:30:00"]
    ];
    
    const timeRanges_Exam = [
        ["08:00:00", "10:00:00"],
        ["10:00:01", "12:00:00"],
        ["12:00:01", "14:00:00"],
        ["14:00:01", "16:00:00"],
        ["16:00:01", "18:00:00"],
        ["18:00:01", "20:00:00"]
    ];

    if (!IsExam)
    {
        for (let i = 0; i < timeRanges_Class.length; i++) {
            const [start, end] = timeRanges_Class[i];
            if (InputTime >= start && InputTime <= end) {
                return i;
            }
        }
    }
    else 
    {
        for (let i = 0; i < timeRanges_Exam.length; i++) {
            const [start, end] = timeRanges_Exam[i];
            if (InputTime >= start && InputTime <= end) {
                return i;
            }
        }
    }

    return -1; // Invalid Time
}