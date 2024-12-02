import {useState } from "react";
import Search from "@/components/shared-components/search/Search";
import { useSearchTech } from "@/hooks/useSearchTech";

const TechStackSearch = () => {
  const [search, setSearch] = useState("");
  const { loading, techStack } = useSearchTech(search);

  return (
    <div className="py-10">
      <Search onChange={setSearch} textPlaceholder={"Technology"} />
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          {techStack &&
            techStack.map((tech, index) => {
              return <p key={index}>{tech.name}</p>;
            })}
        </div>
      )}
      {!loading && (
        <>
          {!techStack && (
            <p>Nothing found</p>
          )}
        </>
      )}
    </div>
  );
};

export default TechStackSearch;
