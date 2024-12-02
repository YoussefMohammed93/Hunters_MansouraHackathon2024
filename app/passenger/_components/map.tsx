export const Map = () => {
  return (
    <div className="relative w-full h-[50vh] rounded-lg overflow-hidden shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.openstreetmap.org/export/embed.html?bbox=31.2340%2C30.0250%2C31.2380%2C30.0300&layer=mapnik"
        loading="lazy"
      ></iframe>
    </div>
  );
};
