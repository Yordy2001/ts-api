import { ICar } from "../interfaces/car.interface";
import ItemModel from "../models/items.models";

const insertCar = async (item: ICar) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItems = await ItemModel.find({});
  return responseItems;
};

const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const updateCar = async (id: string, data: ICar) => {
  const responseUpdate = await ItemModel.findOneAndUpdate(
    { _id: id },
     data,
    {
        new: true
    }
    );
    return responseUpdate;
};

const deleteCar = async (id:string) => {
    const responseDelete = await ItemModel.deleteOne({_id:id})
    return responseDelete
};

export { insertCar, getCars, getCar, deleteCar, updateCar };
