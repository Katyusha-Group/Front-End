
export function convertPercentagetoLigtness(num){
    return( 60 - num*55/100)
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