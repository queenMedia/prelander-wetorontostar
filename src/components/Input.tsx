import { useRef, useState, useEffect, memo, forwardRef, Ref, ChangeEvent, MouseEvent, useDebugValue } from "react";
import { Field, ErrorMessage } from "formik";
import { AreaFieldProps, FileFieldProps, InputFieldProps, InputProps, SelectFieldProps } from "@interfaces";
import { withDatasets, withField } from "@hoc";

import "@stylesComponents/Input.scss";

// import IconEye from "@icons/icon-eye.svg";

const Input = ({ error, field, meta, helpers, type, ...props }: Omit<InputFieldProps, "data" | "file">) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <input
        id={props.id || props.name}
        className="input__input"
        data-error={error}
        type={(type === "password" && showPassword) ? "text" : type}
        {...field}
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          className="input__show"
          onClick={() => setShowPassword(!showPassword)}
        >
          <img
            src={showPassword ? "IconEye" : "IconEyeClose"}
            alt={showPassword ? "Show password" : "Hide password"}
            className="input__show-icon"
          />
        </button>
      )}
    </>
  );
};

const Area = ({ error, field, meta, helpers, ...props }: Omit<AreaFieldProps, "data" | "file">) => (
  <textarea
    id={props.id || props.name}
    data-error={error}
    className="input__area"
    {...field}
    {...props}
  />
);

const FileInput = ({ error, field, meta, helpers, ...props }: Omit<FileFieldProps, "data" | "file">) => {
  const { profile, defaultValue, alt, accept = "image/*", onChange, ...remainingProps } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onChange: onChangeField, onBlur, value } = field;
  const handleSelectFile = (event: ChangeEvent) => {
    const { files } = event.target as HTMLInputElement;
    if (files) {
      const filesSelected = props.multiple ? [...value, ...files] : files[0];
      if (onChange) onChange(filesSelected);
      helpers.setValue(filesSelected);
    }
  };

  if (profile) {
    return (
      <div className="input__profile">
        <img
          src={value ? URL.createObjectURL(value) : defaultValue}
          alt={value?.name || alt}
          className="input__profile-image"
        />
        <input
          id={props.id || props.name}
          className="input__file"
          data-error={error}
          type="file"
          accept={accept}
          onChange={handleSelectFile}
          onBlur={onBlur}
          {...remainingProps}
        />
      </div>
    );
  }

  return (
    <input
      id={props.id || props.name}
      className="input__file"
      data-error={error}
      type="file"
      accept={accept}
      onChange={handleSelectFile}
      onBlur={onBlur}
      {...remainingProps}
    />
  );
};

const SelectInput = ({ error, field, meta, helpers, ...props }: Omit<SelectFieldProps, "data">) => {
  const { options = [], value = null, onSelect, ...remainingProps } = props;
  const selectRef = useRef<HTMLDivElement | null>(null);
  const validateValue = options.find(({ value: valueOption }) => (
    valueOption === meta.value
  ))?.label || remainingProps.withoutValue;

  useDebugValue(validateValue);

  const handleCloseSelect = () => {
    const select = selectRef.current;
    if (select) {
      if (select.dataset.active) {
        delete select.dataset.active;
      } else {
        select.dataset.active = "true";
      }
    }
  };

  const handleSelect = (event: MouseEvent) => {
    const option = event.target as HTMLDivElement;
    const select = selectRef.current;
    if (select) {
      if (!option.classList.contains("input__select")) {
        const valueSelected = option.dataset.value;
        if (onSelect) onSelect(valueSelected);
        helpers.setValue(valueSelected);
        select.dataset.active = "false";
      } else {
        handleCloseSelect();
        select.lastElementChild?.scrollTo(0, 0);
      }
    }
  };

  useEffect(() => {
    if (options.length === 1 && field.value !== options[0].value) {
      helpers.setValue(options[0].value);
      if (onSelect) onSelect(options[0].value);
    }
  }, [options, field, helpers, onSelect]);

  return (
    <div
      ref={selectRef}
      className="input__select"
      onClick={handleSelect}
      role="button"
      tabIndex={0}
    >
      <p className="input__select-value">
        {value ?? validateValue}
      </p>
      <div className="input__select-options" onMouseLeave={handleCloseSelect}>
        {options.map((option) => (
          <span
            key={option.key ?? option.value}
            data-value={option.value}
            className="input__select-option"
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

const CheckboxInput = ({ children, label, label2 = null, ...props }: Omit<InputProps, "data">, ref: Ref<HTMLLabelElement>) => (
  <label
    ref={ref}
    htmlFor={props.id}
    data-checked={props.checked}
    className="input input--check"
    onClick={props.onSelect}
    {...props.datas}
  >
    {props.value ? (
      <Field type="checkbox" value={props.value} id={props.id} name={props.name} className="input__checkbox" />
    ) : (
      <Field type="checkbox" id={props.id} name={props.name} className="input__checkbox" />
    )}
    <ErrorMessage component="span" name={props.name} className="input__checkbox-error" />
    <span className="input__text input__text--check">
      {label}
      {children}
      {label2}
    </span>
  </label>
);

const RadioInput = ({ children, name, checked, value, ...props }: Omit<InputProps, "data">, ref: Ref<HTMLLabelElement>) => (
  <label
    ref={ref}
    htmlFor={props.id}
    data-checked={checked}
    data-payment={props.payment}
    className="input input--radio"
    onClick={props.onSelect}
    {...props.datas}
  >
    <Field type="radio" id={props.id} name={name} value={value} className="input__radio" />
    <ErrorMessage component="span" name={name} className="input__radio-error" />
    <span className="input__text input__text--radio">
      {props.label}
      {children}
      {props.label2}
    </span>
  </label>
);

export const Checkbox = withDatasets<InputProps>(forwardRef(CheckboxInput));
export const Radio = withDatasets<InputProps>(forwardRef(RadioInput));

export const TextArea = withField<AreaFieldProps>(Area);
export const Select = withField<SelectFieldProps>(memo(SelectInput));
export const File = withField<FileFieldProps>(FileInput);

export default withField<InputFieldProps>(Input);
