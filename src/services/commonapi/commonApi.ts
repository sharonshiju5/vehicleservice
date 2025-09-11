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

interface PartnerSearchData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const partnerSearch = async (data: PartnerSearchData) => {
  try {
    const response = await AxiosConfig.post('/v1/seclobService-no/get-in-touch/create', data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
 
export const getPackages =async()=>{
  try {
    const response = await AxiosConfig.get('/v1/seclobServiceCustomer/package/list');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

interface requestProviderData {
  subCategoryId: string;
  planId: string;
  description: string;
  bookingTime: string;
  bookingDate: string;
}
export const requestProvider =async(data:requestProviderData)=>{
  try {
    const response = await AxiosConfig.post('/v1/seclobServiceCustomer/service/req',data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const deatiledService =async(data:requestProviderData)=>{
  try {
    const response = await AxiosConfig.post('/v1/seclobServiceCustomer/service/req',data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}