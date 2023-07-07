import React from "react";
import { Children } from "react";
import { Navigate } from "react-router-dom";

export const PrivatRoute = ({ children }) =>{
  return localStorage.getItem("authTokens")? children : <Navigate to = "/landingPage" />;
};

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
export function convertTime(time) {
  // Split the time string into individual components
  const [hours, minutes, seconds] = time.split(':');

  // Convert the hours string to a number
  const hoursNum = parseInt(hours);

  // Combine the hours and minutes into the final string
  const finalTime = `${hoursNum}:${minutes}`;

  return finalTime;
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