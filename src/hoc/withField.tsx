/* eslint-disable react/display-name */
import { ComponentType, forwardRef, Ref } from "react";
import { FieldHookConfig, useField } from "formik";
import { HOCField, HOCFieldProps } from "@interfaces";
import { useDatas } from "@hooks";

function withField<T extends HOCField = HOCField>(InputComponent: ComponentType<T>) {
  return forwardRef((props: Omit<T, keyof HOCField>, ref: Ref<HTMLLabelElement>) => {
    const { label, file, data = {}, ...newProps } = props as T & HOCFieldProps & FieldHookConfig<string>;
    const [field, meta, helpers] = useField(newProps);
    const datas = useDatas(data);
    const error = Boolean(meta.touched && meta.error);
    const fileStyles = file ? " input--file" : "";

    return (
      <label
        ref={ref}
        htmlFor={newProps.id || newProps.name}
        data-error={error}
        data-error-msg={meta.error}
        data-readonly={newProps.readOnly}
        data-disabled={newProps.disabled}
        data-password={newProps.type === "password"}
        className={`input${fileStyles}`}
        {...datas}
      >
        <InputComponent
          {...(newProps as T)}
          error={error}
          field={field}
          meta={meta}
          helpers={helpers}
          label={label}
        />
        <p
          className="input__text"
          title={meta.error}
          data-error={error}
          data-error-msg={error ? ` | ${meta.error}` : null}
        >
          {label}
        </p>
      </label>
    );
  });
}

export default withField;
