import { testenvProductData as testEnvData } from "./testEnv/productData";

export type ProductDataCollection = {
  productName: string;
  productPrice: number;
  productCategory: string;
};

export type TestEnvDataCollection = {
  testEnv: ProductDataCollection;
};

export const productData: TestEnvDataCollection = {
  testEnv: testEnvData,
};
