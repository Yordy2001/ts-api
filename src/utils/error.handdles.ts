import { Response } from "express";

const handleHTTP = (res: Response, msg: string) => {
  res.status(500);
  res.send({ msg });
};

export { handleHTTP };
