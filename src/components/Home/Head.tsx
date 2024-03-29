import React from "react";

interface Props {
  text: string;
}

const HeadComponent: React.FC<Props> = (Props) => {
  return <h1 className="text-2xl font-bold mt-2">{Props.text}</h1>;
};

// const Head: React.FC<Props> = ({text}) => {
// return <h1 className="text-xl font-bold mt-2">{Props.text}</h1>;
//   };

export default HeadComponent;
