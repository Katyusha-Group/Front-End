export function mapTimeToIndex (InputTime) 
{
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
        if (InputTime >= start && InputTime <= end) {
            return i;
        }
    }

    return i; 
}