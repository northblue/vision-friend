import { NextResponse } from "next/server";
import cloudinary from "../../../lib/cloudinary";

export async function GET() {
  try {
    const folder = process.env.CLOUDINARY_FOLDER || "vision-friend";

    const result = await cloudinary.search
      .expression(`folder:${folder}/*`) // 搜索该 folder 下所有图片
      .sort_by("public_id", "desc")    // 按 public_id 倒序（最新在前）
      .max_results(50)                 // 最多获取 50 张
      .execute();

    // result.resources 是图片数组
    return NextResponse.json(result.resources);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}