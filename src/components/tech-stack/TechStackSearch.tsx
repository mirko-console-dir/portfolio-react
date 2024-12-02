import { useState } from "react";
import Search from "@/components/shared-components/search/Search";
import { useSearchTech } from "@/hooks/useSearchTech";

const TechStackSearch = () => {
  const [search, setSearch] = useState("");
  const { loading, techStack } = useSearchTech(search);

  return (
    <div className="py-10">
      <Search onChange={setSearch} textPlaceholder={"Technology"} />
      <div className="pt-5 " style={{ minHeight: "50vh" }}>
        {loading && <p>Loading...</p>}
        {!loading && (
          <div className="flex flex-wrap mx-auto ">
            {typeof techStack?.length != "undefined" &&
              techStack?.length > 0 &&
              techStack.map((tech, index) => {
                return (
                  <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 flex items-center gap-2 mt-2">
                    <img
                      src={tech.icon}
                      alt="image technology"
                      className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] object-contain self-center"
                    />
                    <p className="capitalize">{tech.name}</p>
                  </div>
                );
              })}
            {(typeof techStack?.length == "undefined" ||
              techStack?.length == 0) && (
              <p className="text-center w-full">Nothing found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStackSearch;
