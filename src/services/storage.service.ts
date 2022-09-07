import { IStorage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.models";

const registerUpload = async ({ fileName, idUser, path }: IStorage) => {
  const responseStorage = await StorageModel.create({ fileName, path, idUser });
  return responseStorage;
};

export { registerUpload };
