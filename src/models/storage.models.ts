import { Schema, Types, model, Model } from "mongoose";
import { IStorage } from "../interfaces/storage.interface";

const StorageSchema = new Schema<IStorage>(
  {
    fileName: {
      type: String,
    },

    path: {
      type: String,
    },

    idUser: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const StorageModel = model("storage", StorageSchema);
export default StorageModel;
