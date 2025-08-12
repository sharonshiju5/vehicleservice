import AxiosConfig from "../AxiosConfig";

interface Category {
  id: string;
  name: string;
  image?: string;
}

interface CategoriesResponse {
  data: {
    categories: Category[];
  };
}

interface SubCategoriesResponse {
  data: {
    subCategories: Category[];
    totalPages: number;
  };
}

interface BannersResponse {
  data: {
    data: unknown[];
  };
}

export const getCategories = async (
  search: string
): Promise<CategoriesResponse> => {
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

export const getBanners = async (): Promise<BannersResponse> => {
  try {
    const { data } = await AxiosConfig.get('/v1/seclobService-no/banners/list');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getSubCategories = async (search: string, page: number, limit: number, categoryId: string): Promise<SubCategoriesResponse> => {
  try {
    const { data } = await AxiosConfig.get('/v1/seclobService-no/subcategories/list', {
      params: { search, page, limit, categoryId },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

