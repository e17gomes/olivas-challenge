export const fetchData = async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(url);
      console.log(response)
  
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
  
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    }
  };

