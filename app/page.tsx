import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-orange-50 flex flex-col items-center h-screen py-12 md:py-24 px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center lg:static lg:size-auto bg-none">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={300}
          height={100}
          className="rounded-lg"
          unoptimized
        />
        <div className="mt-4 md:mt-0 flex flex-col space-y-2 md:space-y-4 text-center md:text-left">
          <h6 className="text-black font-bold text-[20px] md:text-[24px]">
            Shwe Hnit Oo (Rachel)
          </h6>
          <h6 className="text-black font-bold text-[14px] md:text-[16px]">
            Full Stack Developer
          </h6>
          <h6 className="text-black font-bold text-[14px] md:text-[16px]">
            Experience - One Year
          </h6>
        </div>
      </div>

      <div className="mt-12 md:mt-16 w-[300px]">
        <h6 className="text-black font-bold text-[20px] md:text-[24px] text-center md:text-left">
          Tech Stacks
        </h6>
        <div className="flex flex-wrap justify-center md:justify-start items-center    mt-4">
          {[
            "Javascript",
            "TypeScript",
            "Node.js",
            "C++",
            "PostgreSQL",
            "MongoDB",
            "Next.js",
            "AWS Basic",
          ].map((skill) => (
            <div
              key={skill}
              className="text-black w-28 md:w-32 h-10 border-[1px] text-center mr-2 border-gray-400 p-2 mb-2 rounded-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
