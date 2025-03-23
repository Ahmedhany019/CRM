import express from 'express';
import { createDeal, getDeals } from '../controllers/dealController.js';

const router = express.Router();

router.get('/', getDeals);
router.post('/add', createDeal);
router.post('/create', createDeal); 

export default router;