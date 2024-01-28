import React from "react";
import { usesProfileMe } from "../../hooks/useProfileMe";
import { GETProfileData } from "../../hooks/GETProfileData.jsx";

export default function IsThisMe_Function (id)
{
    const {profile, setProfile, loading} = usesProfileMe();
    let IsThisMe = false;
    if (profile != null) {
        IsThisMe = (profile.username == id);
    }
    return IsThisMe;
}