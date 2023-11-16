export function uniquifyArrayByKey(arr, key) {                         
    return arr.filter((item, index) => {
        return (
        arr.findIndex((element) => element[key] === item[key]) === index
        );
    });
  }