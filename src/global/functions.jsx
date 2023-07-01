
export function convertPercentagetoLigtness(num){
    // console.log(`percentage is ${num}`)
    return( 30+ num*55/100) ///frist was  60 - num*55/100)
}

export function dayOfWeek(num){
  switch (num) {
      case "0":
           
        return "شنبه";
        case "1":
           
        return "یکشنبه";
        case "2":
        return "دوشنبه";
        case "3":
           
        return "سه شنبه";
        case "4":
           
        return "چهارشنبه";
        case "5":
           
        return "پنجشنبه";
        case "6":
           
        return "جمعه";
}
}

export function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return hours + minutes / 60;
}
export function sexTostring(s){
  switch (s) {
      case "F":
        return "بانوان";
        case "M":
        return "آقایان";
        case "B":
        return "مختلط";
  }

}