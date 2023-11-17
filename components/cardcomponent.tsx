// components/CardComponent.tsx

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardComponentProps {
  title: string;
  description: string;
  progress: string; // or number, depending on your data type
  headerImage: string;
  raised: number; // assuming raised is a number
  goal: number; // assuming goal is a number
  donators: number; // assuming donators is a number
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
  progress,
  headerImage,
  raised,
  goal,
  donators,
}) => {
  return (
    <Card className="">
      <CardHeader className="p-0 mb-4">
      <div className="rounded-t-[17px] rounded-bl-lg overflow-hidden">
        {headerImage && (
          <img
            src={headerImage}
            alt="Header Image"
            className="w-full h-full min-h-[350px] object-cover"
          />
        )}
      </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-3 text-sm">{title}</CardDescription>
        <h3 className="mb-3 font-bold text-lg">{description}</h3>
        <p className="text-sm mb-1">
          We exist for non-profits, social enterprises, activists. We exist for
          non-profits, social enterprises, activists.
        </p>
        <div className="flex flex-col items-start">
          <div className="text-sm font-bold mb-2" style={{ marginLeft: "40%" }}>
            {progress}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <div>Raised: ₱{raised}</div>
          <div>Goal: ₱{goal}</div>
        </div>
        <div className="text-sm">Donated by {donators} people</div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
