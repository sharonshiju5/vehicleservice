import AxiosConfig from "../AxiosConfig";


export const getCategories = async (
  search: string
): Promise<any> => {
  try {
    const { data } = await AxiosConfig.get('/v1/seclobService-no/categories/list', {
      params: {search,page: 1, limit: 1000},
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
