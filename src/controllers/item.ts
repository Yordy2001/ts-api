import { Request, Response } from "express";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/items.service";
import { handleHTTP } from "../utils/error.handle";

const getItem = ({params}: Request, res: Response) => {
  try {
    const {id} = params
    const response = getCar(id)
    res.send(response)
  } catch (error) {
    handleHTTP(res, "ERROR_GET_ITEM", error);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars()
    res.send(response)
  } catch (error) {
    handleHTTP(res, "ERRORS_GET_ITEM", error);
  }
};

const postItem = async ({body}: Request, res: Response) => {
  try {
    const save = await insertCar(body)
    res.send(save)
  } catch (error) {
    handleHTTP(res, "ERROR_POST_ITEM", error);
  }
};

const updateItem = async ({params, body}: Request, res: Response) => {
  try {
    const {id} = params
    
    const response = await updateCar(id, body)
    res.send(response)
  } catch (error) {
    handleHTTP(res, "ERROR_UPDATE_ITEM", error);
  }
};

const deleteItem = async ({params}: Request, res: Response) => {
  try {
    const {id} = params
    const response = await deleteCar(id)
    res.send(response)
  } catch (error) {
    handleHTTP(res, "ERROR_DELETE_ITEM", error);
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
