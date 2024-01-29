import React from "react";
import { userUserName } from "../../hooks/useUserName.jsx";

export default function IsThisMe_Function (id)
{
    const {profile, setProfile, loading} = userUserName();
    console.log("🚀 ~ profile:", profile)
    let IsThisMe = false;
    if (profile != null) {
        IsThisMe = (profile == id);
    }
    return IsThisMe;
}