
import * as style from "../css/SignUp.module.css";
import Select from "react-select";
import SelectStyles from "../styles/SelectStyles";
import {
    FormGroup
} from "reactstrap";
export function SelectBoxFormGroup({ onChange, error, label, name, options }) {
    return (
        <FormGroup className="text-right">
            <label>{label}</label>
            <br />

            <Select
                options={options}
                styles={SelectStyles}
                isRtl
                placeholder="انتخاب کنید "
                name={name}
                onChange={onChange}
            />

            {error && (
                <div className={style.selectError}>
                    {error}
                </div>
            )}
        </FormGroup>
    );
}