import { Response } from "express";

const handleHTTP = (res: Response, msg: string, error?:any) => {
  console.log(error);
  res.status(500);
  res.send({ msg });
};

export { handleHTTP };
