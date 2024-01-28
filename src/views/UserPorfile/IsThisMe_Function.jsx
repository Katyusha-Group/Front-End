import React from "react";
import { usesProfileMe } from "../../hooks/useProfileMe";
import { GETProfileData } from "../../hooks/GETProfileData.jsx";
import { userUserName } from "../../hooks/useUserName.jsx";

export default function IsThisMe_Function (id)
{
    const {profile, setProfile, loading} = userUserName();
    let IsThisMe = false;
    if (profile != null) {
        IsThisMe = (profile.username == id);
    }
    return IsThisMe;
}