import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

// ডামি ডাটাবেস (পরে MongoDB/PostgreSQL ব্যবহার করবেন)
const users: any[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, shopName, email, password } = body

    // ভ্যালিডেশন
    if (!fullName || !shopName || !email || !password) {
      return NextResponse.json(
        { message: 'সব ফিল্ড পূরণ করুন!' },
        { status: 400 }
      )
    }

    // চেক করুন ইমেইল আগে থেকে আছে কিনা
    const existingUser = users.find((u) => u.email === email)
    if (existingUser) {
      return NextResponse.json(
        { message: 'এই ইমেইল দিয়ে আগে থেকেই অ্যাকাউন্ট আছে!' },
        { status: 400 }
      )
    }

    // পাসওয়ার্ড হ্যাশ
    const hashedPassword = await bcrypt.hash(password, 10)

    // ইউজার সেভ
    const newUser = {
      id: Date.now().toString(),
      fullName,
      shopName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    }

    users.push(newUser)

    return NextResponse.json(
      { message: 'অ্যাকাউন্ট তৈরি হয়েছে!', success: true },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'সার্ভার এরর!' },
      { status: 500 }
    )
  }
}