import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ObjStrString } from "@interfaces";

export default function useQuery() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const query: ObjStrString = useMemo(() => ({}), []);

  searchParams.forEach((value, key) => {
    query[key] = value;
  });

  return query;
}
