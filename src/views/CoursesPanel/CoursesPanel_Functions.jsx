export function uniquifyArrayByKey(arr, key) {                             // Removing duplicate keys (uniquify by key)
    return arr.filter((item, index) => {
        return (
        arr.findIndex((element) => element[key] === item[key]) === index
        );
    });
}



export function containsWhitespace(str) {
  return /\s/.test(str);
} 