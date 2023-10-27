import React from 'react';
import * as styles from "../../assets/css/instructor.module.css"

function Instructor() {
    return (
        <div className={styles.eachcard}>
            <img className={styles.eachProfile} src="https://s3-alpha-sig.figma.com/img/c9b7/6381/9181691d4f9c6f5bfef7c17bcc3b7a47?Expires=1698624000&Signature=WF6Z8-wXTUnia2MFCW12l~6bdvwQAz~qitJVshc970MOxoCyE03hUW7N0xU6FnZwyJRJviMnZxrAawI5lXURkqomXGClS74P1KU4p3K~EOkb62Sm1alDW430O2sv8oK4YM5GAWycqDuDh4xFJ6xMs-wrxDJubfsx~bhieRpYjOcPcCdMKLTHv6j9XJm6AJx~lDC~ohM-nUDvQsOeEJnf9msX8IdtVdPuCI8UySdOfwafNXMTPofxrhViBsyPjMN6Gb262UiyRiwAl50JDA9642sT4DpL6yAEMXSwFkyXWmkzorQ~6j5O7JTJl16bkrjA~AulKt3T4PaMREkSqoFSVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <p className={styles.p_name}>جت وایت</p>
            <button className={styles.delButton}>حذف</button>
        </div>
    );
}

export default Instructor;
