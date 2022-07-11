import { useMemo } from "react";
import { ObjStrCommon } from "@interfaces";

export default function useDatas(config: ObjStrCommon) {
  const datas: ObjStrCommon = useMemo(() => ({}), []);

  Object.keys(config).forEach((key) => {
    datas[`data-${key}`] = config[key];
  });

  return datas;
}
