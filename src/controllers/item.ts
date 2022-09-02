import { Request, Response } from "express";
import { handleHTTP } from "../utils/error.handdles";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHTTP(res, "ERROR_GET_ITEM");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHTTP(res, "ERRORS_GET_ITEM");
  }
};

const postItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHTTP(res, "ERROR_POST_ITEM");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHTTP(res, "ERROR_UPDATE_ITEM");
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHTTP(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
