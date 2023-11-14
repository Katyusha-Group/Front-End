import { apis } from '../../assets/apis';
import Swal from 'sweetalert2';

export async function postSignUp(formData, subject, gender) {
    try {
        Swal.fire({
            title: 'کمی صبر کنید',
            html: 'در حال بررسی درخواست ثبت نام',
            allowOutsideClick: false,
            timerProgressBar: true,
            showConfirmButton: false,
            background: '#3c3e5d',
            color: '#ceccc0',
            width: '25rem',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        });

        const response = await fetch(apis["accounts"]["signup"], {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.email,
                username: formData.username,
                name: formData.profileName,
                password1: formData.password,
                password2: formData.passwordConfirm,
                department: subject,
                gender: gender,
            }),
        });

        const data = await response.json();
        Swal.close();

        if (response.status === 201) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("verificationLink", data.url);
            Swal.fire({
                icon: 'success',
                title: ' کد تایید ارسال شد',
                html: 'لطفا ایمیلتان را چک کنید',
                background: '#3c3e5d',
                color: '#ceccc0',
                width: '25rem',
                confirmButtonText: "باشه"
            });
            Navigate("/verification");
        } else {
            if (data.email) {
                Swal.fire({
                    icon: "error",
                    title: "این ایمیل پیش از این ثبت شده است",
                    background: "#3c3e5d",
                    color: "#ceccc0",
                    width: "25rem",
                    direction: "rtl",
                    confirmButtonText: "باشه",
                });
            }
            if (data.password) {
                Swal.fire({
                    icon: "error",
                    title: "رمز عبور قابل قبول نیست",
                    background: "#3c3e5d",
                    color: "#ceccc0",
                    width: "25rem",
                    direction: "rtl",
                    confirmButtonText: "باشه",
                });
            }
        }

        return response;
    } catch (error) {
        console.error(error);
    }
}
