import { connectdb } from "../../../lib/config/db";
import Business from '../../../lib/models/Business';
import { NextResponse } from 'next/server';

const LoadDB = async () => {
  await connectdb();
};
LoadDB();

export async function GET(request) {
  const businesses = await Business.find().populate('category');
  return NextResponse.json({ businesses });
}

export async function POST(request) {
  const { name, category, bannerImageUrl, bannerImageKey, locations, details, socialMedias } = await request.json();
  const business = await Business.create({ 
    name, 
    category, 
    bannerImageUrl, 
    bannerImageKey, 
    locations, 
    details, 
    socialMedias,
    likes: 0,
    clicks: 0
  });
  return NextResponse.json({ business });
}
