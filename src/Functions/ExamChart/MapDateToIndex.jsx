export function MapDateToIndex (date)
{
    const lastTwoChars = parseInt(date.substring(date.length - 2));
    let DateIndex = lastTwoChars - 13;
    if (DateIndex < 0)
    {
        DateIndex += 30;
    }
    return DateIndex;
}