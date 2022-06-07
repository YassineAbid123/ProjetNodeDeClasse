import express from 'express';
const router = express.Router();
import stripe from 'stripe';
const Stripe = stripe('sk_test_51L3KneE8dVW5b6Q5jNlaeUqhjwSwvFbosn2o1YO7VsPmr1ILKvyUQIGPIjxeGkbOexMYOfJFiooXKwhDTcSqUBNd00z0Hi30nh');
router.post('/', async (req, res) => { console.log(req.body)
 let status, error;
 const { token, amount } = req.body;
 try {
 await Stripe.charges.create({
 source: token.id,
 amount,
 currency: 'usd',
 });
 status = 'success';
 } catch (error) {
 console.log(error);
 status = 'Failure';
 }
 res.json({ error, status });
 });
export default router;