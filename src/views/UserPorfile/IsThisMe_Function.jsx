import React from "react";
import { userUserName } from "../../hooks/useUserName.jsx";

export default function IsThisMe_Function (id)
{
    const {profile, setProfile, loading} = userUserName();
    let IsThisMe = false;
    if (profile != null) {
        IsThisMe = (profile == id);
    }
    return IsThisMe;
}