import {
    FormGroup,
    Input,
} from "reactstrap";
export function EmailFormGroup({value, onChange, error}) {
    return (
        <FormGroup className="text-right">
            <label htmlFor="exampleInputEmail1">ایمیل</label>
            <Input
                className="text-right"
                placeholder="ایمیل خود را وارد کنید"
                type="email"
                name="email"
                onChange={onChange}
                value={value}
            />
            {error && (
                <div className="error" >
                    {error}
                </div>
            )}
        </FormGroup>
    );
}