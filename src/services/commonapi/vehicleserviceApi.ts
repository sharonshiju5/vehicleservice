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
export const getVehicleCategories = async (
  search: string
): Promise<CategoriesResponse> => {
  try {
    const { data } = await AxiosConfig.get('/v1/vehicleService-no/categories/list', {
      params: {search,page: 1, limit: 1000},
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface SubCategoriesResponse {
  data: {
    subCategories: Category[];
    totalPages: number;
  };
}
export const getVehicleSubCategories = async (search: string, page: number, limit: number, categoryId: string): Promise<SubCategoriesResponse> => {
  try {
    const { data } = await AxiosConfig.get('/v1/vehicleService-no/subcategories/list', {
      params: { search, page, limit, categoryId },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
interface searchData {
  search: string;
  page: number;
  limit: number;
}
export const onSearch =async(data:searchData)=>{
  try {
    const response = await AxiosConfig.get(`/v1/vehicleService-no/categories/serch-all?page=${data.page}&limit=${data.limit}&search=${data.search}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

interface BannersResponse {
  data: {
    data: unknown[];
  };
}
export const getBanners = async (): Promise<BannersResponse> => {
  try {
    const { data } = await AxiosConfig.get('/v1/vehicleService-no/banners/list');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const serviceDeatil =async(uniqueId:string)=>{
  try {
    const response = await AxiosConfig.get(`/v1/vehicleService-no/subcategories/list?page=1&limit=1&search=${uniqueId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export const getPackages =async()=>{
  try {
    const response = await AxiosConfig.get('/v1/vehicleServiceCustomer/package/list');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export const getUserCurrentPackage = async () => {
  try {
    const response = await AxiosConfig.get(`/v1/vehicleServiceCustomer/package/current`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}
interface requestProviderData {
  subCategoryId: string;
  planId: string;
  description: string;
  bookingTime: string;
  bookingDate: string;
}
export const requestProvider = async (data: requestProviderData) => {
  try {
    const formData = new FormData();
    formData.append('bookingDate', data.bookingDate);
    formData.append('bookingTime', data.bookingTime);
    formData.append('description', data.description);
    formData.append('planId', data.planId);
    formData.append('subCategoryId', data.subCategoryId);
    formData.append('identifyService', 'vehicleService');

    const response = await AxiosConfig.post(
      '/v2/vehicleServiceCustomer/service/req',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const deatiledService =async(search:string)=>{
  try {
    const response = await AxiosConfig.get(`/v1/vehicleService-no/subcategories/list?page=1&limit=1&search=${search}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}