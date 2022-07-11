import { useEffect, useState } from "react";
import config from "@config";

export default function useGetCountry() {
  const [country, setCountry] = useState({
    phoneCode: "",
    name: "",
    code: "",
    emoji: ""
  });
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(`${config.ipregistry_url}?key=${config.ipregistry_key}`);
        const { location: { country: countryApi } } = await request.json();
        setCountry((prevCountry) => ({
          ...prevCountry,
          phoneCode: `+${countryApi.calling_code}`,
          name: countryApi.name,
          code: countryApi.code,
          emoji: countryApi.flag.emoji
        }));
      } catch (err) {
        let message = "Oops";
        if (err instanceof Error) message = err.message;

        setError(message);
      }
    })();
  }, []);

  return { country: country, error };
}
