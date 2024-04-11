import Image from "next/image";
import Link from "next/link";

export const CardNews = ({ data }) => {
  return (
    <Link
      href={`post/${data.id}`}
      className="h-72 md:h-96 block group relative min-w-80 max-w-prose
      overflow-hidden shadow-lg m-10">
      <Image
        src={data.illustrative_photo}
        className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"
        width={400}
        height={400}
      />
      <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
      <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
        <div className="h-1/2 relative">
          <div className="absolute bottom-0">
            <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
              {data.title}
            </h2>
          </div>
        </div>
        <div className="h-1/2">
          <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
            Plans to roll out end-to-end encryption on Facebook and Instagram
            have been delayed amid a row over child safety.
          </p>
          <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};
