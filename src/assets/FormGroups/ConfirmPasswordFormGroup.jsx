import {
    FormGroup,
    Input,
} from "reactstrap";
import * as style from "../css/SignUp.module.css";
export function ConfirmPasswordFormGroup({ value, onChange, error, onClick }) {
    return (
        <FormGroup className="text-right">
            <label>تکرار رمز عبور</label>
            <Input
                className="text-right"
                placeholder="تکرار رمز عبور را وارد کنید"
                type="password"
                name="passwordConfirm"
                id="confirm_password_field"
                onChange={onChange}
                value={value}
            />
            <i
                className={`${style.viewpass} tim-icons fa fa-eye-slash mr-4 text-muted`}
                onClick={onClick}
                id="toggleConfirmPassword"
            ></i>
            {error && (
                <div className={style.error}>
                    {error}
                </div>
            )}
        </FormGroup>
    );
}