import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { fetchSearchTechStack } from "@/api-simulator/fetchSearchTechStack";
import { Tech } from "@/interfaces";

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
