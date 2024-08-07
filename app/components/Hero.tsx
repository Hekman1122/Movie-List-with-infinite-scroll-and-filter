interface Props {
  imageUrl: string;
}
import Image from "next/image";
import { memo } from "react";

function Hero({ imageUrl }: Props) {
  return (
    <section className="flex justify-center items-center p-6">
      <div className="w-full h-96 flex justify-around items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl">
            All the <span className="text-yellow-500 font-bold">movies</span>
            <br /> around the world
          </h1>
          <p className="text-3xl font-semibold leading-10">
            Find the movies you like and remember to bring <br /> fried chicken
            with you.
          </p>
        </div>
        <Image
          src={imageUrl}
          alt="Hero image"
          width={400}
          height={250}
          className="rounded-lg w-1/3 h-full shadow-md"
        />
      </div>
    </section>
  );
}

export default memo(Hero);
