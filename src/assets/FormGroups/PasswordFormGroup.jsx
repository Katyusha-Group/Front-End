import {
    FormGroup,
    Input,
} from "reactstrap";
export function PasswordFormGroup({value, onChange, error,onClick}) {
    return (
        <FormGroup className="text-right">
            <label>رمز عبور</label>
            <Input
                className="text-right"
                placeholder="رمز عبور را وارد کنید"
                type="password"
                name="password"
                id="password_field"
                onChange={onChange}
                value={value}
            ></Input>
            <i
                className="tim-icons fa fa-eye-slash viewpass mr-4 text-muted"
                onClick={onClick}
                id="togglePassword"
            ></i>
            {error && (
                <div className="error">
                    {error}
                </div>
            )}
        </FormGroup>
    );
}