import { useEffect, useState } from "react";

if (!process.env.NEXT_PUBLIC_EMAIL) {
  throw new Error("EMAIL is required");
}

const decrypt = (value: string) =>
  value
    .split("")
    .map((c) => String.fromCharCode(c.charCodeAt(0) - 2))
    .join("");

const getMailTo = () => decrypt("ocknvq");
const getMail = () => decrypt(process.env.NEXT_PUBLIC_EMAIL!);

export const useMail = () => {
  const [mail, setMail] = useState("example@example.com");

  useEffect(() => {
    setTimeout(() => {
      setMail(getMail());
    }, 250);
  }, []);

  return mail;
};

export const onMailClick = () => {
  window.open(`${getMailTo()}:${getMail()}`);
};
