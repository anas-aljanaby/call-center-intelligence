import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to a database
    // 3. Send email notifications
    // 4. Integrate with CRM systems, etc.

    // Example: Save to a database (using prisma or your preferred ORM)
    // await prisma.demoRequest.create({
    //   data: formData
    // });

    // Example: Send email notification
    // await sendEmail({
    //   to: 'sales@yourcompany.com',
    //   subject: 'New Demo Request',
    //   body: `New demo request from ${formData.firstName} ${formData.lastName}`
    // });

    // For now, we'll just log the data
    console.log('Received demo request:', formData);

    return NextResponse.json({ 
      success: true, 
      message: 'Demo request received' 
    });

  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process demo request' },
      { status: 500 }
    );
  }
} 