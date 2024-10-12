import { Button } from "@material-tailwind/react";

export function ButtonColors({ texto1, texto2, texto3 }) {
  return (
    <div className="flex items-center justify-center w-full">
      <Button color="green">{texto1}</Button>
      <Button color="blue">{texto2}</Button>
      <Button color="red">{texto3}</Button>
    </div>
  );
}
