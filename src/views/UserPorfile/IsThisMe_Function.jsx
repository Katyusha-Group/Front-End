import React from "react";
import { usesProfileMe } from "../../hooks/useProfileMe";
import { GETProfileData } from "../../hooks/GETProfileData.jsx";

export default function IsThisMe_Function (id)
{
    const {profile, setProfile, loading} = usesProfileMe();
    const {profileData, setProfileData, loading2} = GETProfileData(id);
    let IsThisMe = false;
    if (profileData != null && profile != null) {
        IsThisMe = (profile.username == profileData.username);
    }
    return IsThisMe;
}