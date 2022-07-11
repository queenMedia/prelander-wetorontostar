/* eslint-disable react/display-name */
import { ComponentType, forwardRef } from "react";
import { HOCDatasets, HOCDatasetsProps } from "@interfaces";
import { useDatas } from "@hooks";

function withDatasets<T extends HOCDatasets = HOCDatasets>(Component: ComponentType<T>) {
  return forwardRef((props: Omit<T, keyof HOCDatasets>, ref) => {
    const { data = {}, ...newProps } = props as T & HOCDatasetsProps;
    const datas = useDatas(data);

    return (
      <Component
        {...(newProps as unknown as T)}
        ref={ref}
        datas={datas}
      />
    );
  });
}

export default withDatasets;
