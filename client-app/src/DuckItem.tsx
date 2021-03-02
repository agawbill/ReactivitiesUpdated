import React from "react";
import { Duck, ducks } from "./demo";

interface Props {
  duck: Duck;
}

export default function DuckItem(props: Props) {
  const { duck } = props;
  return (
    <div>
      <span>{duck.name}</span>
      <button onClick={() => duck.makeSound(duck.name + " quack")}>
        Make sound
      </button>
    </div>
  );
}
