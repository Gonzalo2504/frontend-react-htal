import { Button } from "@material-tailwind/react";

export function ButtonColors({ data }) {
  return (
    <div className="flex items-center justify-center w-full">
      {data.map((data) => (
        <Button
          color={ data.color}
          onClick={ data.onClick}
        >
          { data.texto}
        </Button>
      ))}
    </div>
  )
}

