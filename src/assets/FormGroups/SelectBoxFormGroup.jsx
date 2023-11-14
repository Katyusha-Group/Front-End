
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
        // <FormGroup className="text-right">
        //     <label htmlFor="exampleInputEmail1">ایمیل</label>
        //     <Input
        //         className="text-right"
        //         placeholder={placeHolder}
        //         type="email"
        //         name="email"
        //         onChange={onChange}
        //         value={value}
        //     />
        //     {error && (
        //         <div className={style.error} >
        //             {error}
        //         </div>
        //     )}
        // </FormGroup>
    );
}