import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const req = await request.json();
    console.log(req);

    // if (req.email && req.password) {
    //     return NextResponse.json({
    //         To: req.name
    //     });
    // }
    // else {
    //     return new NextResponse('Please include your name is the POST request');
    // }

}