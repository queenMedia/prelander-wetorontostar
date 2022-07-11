import { useEffect, useState } from "react";
import { HookMediaParameters, HookMediaReturn } from "@interfaces";

export default function useMedia(mediaQuery: HookMediaParameters = null): HookMediaReturn {
  const [device, setDevice] = useState(false);
  const media = matchMedia(mediaQuery ?? "(min-width: 0px)");

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => {
      setDevice(event.matches);
    };

    setDevice(media.matches);

    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [media]);

  return device;
}
