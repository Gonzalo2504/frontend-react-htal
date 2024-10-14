import { Button } from "@material-tailwind/react";

export function ButtonColors({ texto1, texto2, texto3, onClick1, onClick2, onClick3 }) {
  return (
    <div className="flex items-center justify-center w-full">
      <Button color="green" onClick={onClick1}>{texto1}</Button>
      <Button color="blue" onClick={onClick2}>{texto2}</Button>
      <Button color="red" onClick={onClick3}>{texto3}</Button>
    </div>
  );
}