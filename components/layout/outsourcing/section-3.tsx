// components/layout/outsourcing/section-2.tsx

import Link from "next/link";
import { FC } from "react";

interface card {
  title: string;
  description?: string;
  image?: string;
  icon?: string;
}

interface Section3Props {
  heading: string;
  description?: string;
  columns?: number;
  text?: string;
  buttonText?: string;
  bgButton?: string;
  buttonLink?: string;
  leftColor?: string;
  rightColor?: string;
  cards: card[];
}

const Section3: FC<Section3Props> = ({
  heading,
  description,
  text,
  buttonText,
  bgButton = "#236b7a",
  buttonLink = "/",
  leftColor = "#22A3AD",
  rightColor = "#156F76",
  cards,
  columns = 3,
}) => {
  const gridColsClass =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
    }[columns] || "lg:grid-cols-1";

  return (
    <div className="container mx-auto md:mx-4 lg:mx-auto my-12">
      <div className="w-full py-2 ml-4 sm:ml-0 text-center">
        <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-700">{text}</p>
      </div>

      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2  ${gridColsClass} gap-4 py-2`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-4 flex flex-col items-start "
          >
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="w-auto h-auto object-cover mb-4 rounded-t-lg"
              />
            )}
            {card.icon && (
              <img
                src={card.icon}
                alt={card.title}
                className="w-20 h-auto object-cover mb-4 rounded-t-lg"
              />
            )}
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-4 rounded font-semibold"
          style={{
            background: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
          }}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Section3;
