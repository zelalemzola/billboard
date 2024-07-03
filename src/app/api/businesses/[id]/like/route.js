// app/api/businesses/[id]/like.js
import { connectdb } from '@/lib/config/db';
import Business from '@/lib/models/Business';
import { NextResponse } from 'next/server';

const LoadDB = async () => {
  await connectdb();
};
LoadDB();

export async function PATCH(request, { params }) {
  const { id } = params;
  const business = await Business.findById(id);
  if (business) {
    business.likes += 1;
    await business.save();
    return NextResponse.json({ likes: business.likes });
  }
  return NextResponse.json({ error: 'Business not found' }, { status: 404 });
}
