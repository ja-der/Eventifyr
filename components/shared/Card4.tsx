import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-#624CF5 via-#8169F8 to-#9E87FB border-4 border-#624CF5 hover:shadow-2xl md:min-h-[438px]">
      <Image
        src="/assets/images/food.jpg"
        alt="food"
        width={1000}
        height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
      />

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        <div className="flex gap-2">
          <p className="p-semibold-14 w-min rounded-full bg-red-500/50 px-4 py-1 text-black">
            $$$
          </p>
        </div>

        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          Explore the Food Scene
        </p>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            Dive into Ottawa's diverse food scene, where trendy cafes, gourmet
            restaurants, and hidden gems offer a spectrum of flavors. From local
            favorites to innovative dishes, savor the capital's culinary
            creativity in a welcoming atmosphere. Whether you're a food
            enthusiast or a casual diner, exploring Ottawa's food scene promises
            a delightful journey through gastronomic diversity.
          </p>
        </div>
        <a className="p-medium-16 p-medium-18 text-grey-500">Learn More</a>
      </div>
    </div>
  );
};

export default Card;
