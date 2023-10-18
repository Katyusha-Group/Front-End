import React from 'react'
// import { useState } from 'react'
import * as styles from "../../assets/css/Profile.module.css"

export default function ProfileHeader() {
  const DateStart="18 فروردبن1402"
  const a=28
  return (
        <div className={styles.rightUpper}>
          <img className={styles.ProfileImage} src="https://s3-alpha-sig.figma.com/img/c9b7/6381/9181691d4f9c6f5bfef7c17bcc3b7a47?Expires=1698624000&Signature=WF6Z8-wXTUnia2MFCW12l~6bdvwQAz~qitJVshc970MOxoCyE03hUW7N0xU6FnZwyJRJviMnZxrAawI5lXURkqomXGClS74P1KU4p3K~EOkb62Sm1alDW430O2sv8oK4YM5GAWycqDuDh4xFJ6xMs-wrxDJubfsx~bhieRpYjOcPcCdMKLTHv6j9XJm6AJx~lDC~ohM-nUDvQsOeEJnf9msX8IdtVdPuCI8UySdOfwafNXMTPofxrhViBsyPjMN6Gb262UiyRiwAl50JDA9642sT4DpL6yAEMXSwFkyXWmkzorQ~6j5O7JTJl16bkrjA~AulKt3T4PaMREkSqoFSVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <p className={styles.p_name}>جت وایت</p>
          <p className={styles.myusername}> @Jettwhite </p>
          <div className={styles.Follow}>
            <p> دنبال میشود:{a}</p>
            <p> دنبال کننده:{a}</p>
          </div>
          <p className={styles.DateStart}> تاریخ شروع فعالیت {DateStart}</p>
          <button className={styles.followbutton}> دنبال کردن</button>
        </div>
    )
}