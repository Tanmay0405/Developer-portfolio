import Link from "next/link";
import Image from "next/image";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 p-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Top Section */}
        <div className="w-full flex flex-col sm:flex-row justify-between px-4 sm:px-10">
          {/* Left (Community) */}
          <div className="flex flex-col items-start min-w-[180px] space-y-3 mb-10">
            <h3 className="font-bold text-lg mb-1">{FOOTER_DATA[0].title}</h3>
            {FOOTER_DATA[0].data.map((item) => (
              <Link
                key={`${FOOTER_DATA[0].title}-${item.name}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition"
              >
                {"icon" in item && item.icon ? (
                  typeof item.icon === "function" ? (
                    <item.icon className="w-5 h-5" />
                  ) : typeof item.icon === "string" ? (
                    <Image
                      src={`/skills/${item.icon}`}
                      alt={item.name}
                      width={20}
                      height={20}
                    />
                  ) : null
                ) : null}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center (Social Media) */}
          <div className="flex flex-col items-center min-w-[180px] space-y-3 mb-10">
            <h3 className="font-bold text-lg mb-1">{FOOTER_DATA[1].title}</h3>
            {FOOTER_DATA[1].data.map((item) => (
              <Link
                key={`${FOOTER_DATA[1].title}-${item.name}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-200 hover:text-white transition"
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right (About) */}
          <div className="flex flex-col items-end min-w-[180px] space-y-3 mb-10">
            <h3 className="font-bold text-lg mb-1">{FOOTER_DATA[2].title}</h3>
            {FOOTER_DATA[2].data.map((item) => (
              <Link
                key={`${FOOTER_DATA[2].title}-${item.name}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-200 hover:text-white transition"
              >
                {item.icon ? (
                  typeof item.icon === "function" ? (
                    <item.icon className="w-5 h-5" />
                  ) : typeof item.icon === "string" ? (
                    <Image
                      src={`/skills/${item.icon}`}
                      alt={item.name}
                      width={20}
                      height={20}
                    />
                  ) : null
                ) : null}
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-sm text-gray-200">
          &copy; Tanmay {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
