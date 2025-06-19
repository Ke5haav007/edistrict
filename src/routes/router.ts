import { Router } from "express";
import controller from '../controllers/controller';


const router = Router();

router.get('/superAdminHealth',(req,res)=>{
         res.status(200).json({
             code:200,
             error:false,
             message:"Admin health check is successful"
         })
     })

router.post('/insert-edistrict-data', controller.insertEDistrictData);
router.get('/get-all-edistrict-data', controller.getAllEDistrictData);



export default router;
