import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.get('http://localhost:8080/api/categorias');
  return res.status(200).json(data);
}