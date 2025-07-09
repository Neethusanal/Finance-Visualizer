// src/app/api/transactions/route.js
import { connectToDatabase } from '../../lib/mongodb';
import Transaction from '@/models/transaction';

export async function GET(req) {
  await connectToDatabase();
  const transactions = await Transaction.find().sort({ createdAt: -1 });
  return Response.json(transactions);
}

export async function POST(req) {
  await connectToDatabase();
  const body = await req.json();
  const transaction = await Transaction.create(body);
  return Response.json(transaction);
}
