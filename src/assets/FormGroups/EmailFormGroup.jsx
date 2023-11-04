
import * as style from "../css/SignUp.module.css";
import {
    FormGroup,
    Input,
} from "reactstrap";
export function EmailFormGroup({ value, onChange, error, placeHolder }) {
    return (
        <FormGroup className="text-right">
            <label htmlFor="exampleInputEmail1">ایمیل</label>
            <Input
                className="text-right"
                placeholder={placeHolder}
                type="email"
                name="email"
                onChange={onChange}
                value={value}
            />
            {error && (
                <div className={style.error} >
                    {error}
                </div>
            )}
        </FormGroup>
    );
}