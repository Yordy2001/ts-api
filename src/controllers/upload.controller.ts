import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext.inteface";
import { IStorage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage.service";
import { handleHTTP } from "../utils/error.handle";


const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req
    console.log(file);
    const data: IStorage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
 
    }
    const response = await registerUpload(data)
    res.send(response)
  } catch (error) {
    handleHTTP(res, "ERROR_File", error);
  }
};

export { getFile }
