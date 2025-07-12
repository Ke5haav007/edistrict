
import { Request, Response } from 'express';
import { getClient } from '../connections/connection';
import { getEDistrictDataCollection } from '../models/models';
import { EDistrictData } from '../models/models';
import logger from '../common/logger';
import dotenv from 'dotenv';
dotenv.config();



 const insertEDistrictData = async (req: Request, res: Response) => {
  try {
         
    const data: EDistrictData[] = req.body;

    if (!Array.isArray(data) || data.length === 0) {
       res.status(400).json({ error: "Request body must be a non-empty array." });
       return;
    }

    const client = await getClient();
    const db = client.db(process.env.DB_NAME);
    const collection = getEDistrictDataCollection(db);

    const result = await collection.insertMany(data);

    res.status(201).json({
      success: true,
      insertedCount: result.insertedCount,
      message: "Mock eDistrict data inserted successfully.",
    });
  } catch (error) {
    logger.error("Error inserting eDistrict data", { error });
    res.status(500).json({ error: "Internal Server Error" });
  }
};

 const getAllEDistrictData = async (req: Request, res: Response) => {
  try {
    const client = await getClient();
    const db = client.db(process.env.DB_NAME);
    const collection = getEDistrictDataCollection(db);

    const data = await collection.find().toArray();

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    logger.error("Error fetching eDistrict data", { error });
    res.status(500).json({ error: "Internal Server Error" });
  }
};




export default {
      insertEDistrictData,
      getAllEDistrictData
      };

