import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { fetchSearchTechStack } from "@/api-simulator/fetchSearchTechStack";

type Tech = {
  name: string;
  icon: string;
};
export function useSearchTech(search: string) {
  const [loading, setLoading] = useState(false);
  const [techStack, setTechStack] = useState<Tech[]>();
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const loadGirlCustomers = async () => {
      setLoading(true);
      const fetchedTechStack = await fetchSearchTechStack(debouncedSearch);
      setTechStack(fetchedTechStack);
      setLoading(false);
    };

    loadGirlCustomers();
  }, [debouncedSearch]);

  return { loading, techStack };
}
