
import * as style from "../css/SignUp.module.css";
import {
    FormGroup,
    Input,
} from "reactstrap";
export function TextFormGroup({ label, name, value, onChange, error, placeHolder }) {
    return (
        <FormGroup className="text-right">
            <label>{label}</label>
            <Input
                className="text-right"
                placeholder={placeHolder}
                type="text"
                name={name}
                onChange={onChange}
                value={value}
            />
            {error && (
                <div className={style.textError} >
                    {error}
                </div>
            )}
        </FormGroup>
    );
}