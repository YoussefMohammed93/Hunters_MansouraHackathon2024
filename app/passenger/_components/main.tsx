import Image from "next/image";

export const Main = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-screen flex items-center justify-center bg-gradient-to-b from-[#498B6D] to-[#33576E]">
      <div className="absolute">
        <Image src="/Ellipse.png" alt="ellipse" width={600} height={600} />
      </div>
      <div className="absolute">
        <Image src="/Ellipse2.png" alt="ellipse" width={500} height={500} />
      </div>
      <div className="absolute">
        <Image src="/Ellipse3.png" alt="ellipse" width={400} height={400} />
      </div>
      <div className="absolute w-[300px] h-[300px] mt-10 text-center text-white">
        <p className="text-3xl font-bold">
          <q>
            {`            Carpooling isn't just a ride; it's a ride towards a cleaner, greener
            future, one less car at a time.`}
          </q>
        </p>
        <p className="text-sm mt-6">
          Selin <br /> F-Sktk loyal passenger
        </p>
      </div>
      <div className="absolute left-[60%] top-[65%] md:top-[50%]">
        <Image
          src="/woman.jpg"
          alt="woman"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
    </section>
  );
};
