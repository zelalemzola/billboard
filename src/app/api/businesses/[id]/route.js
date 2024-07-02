// src/app/api/businesses/[id]/route.js

import { connectdb } from '@/lib/config/db';
import Business from '@/lib/models/Business';
import { NextResponse } from 'next/server';

const LoadDB = async () => {
  await connectdb();
};
LoadDB();

export async function GET(request, { params }) {
  const { id } = params;
  const business = await Business.findById(id).populate('category');
  return NextResponse.json({ business });
}
