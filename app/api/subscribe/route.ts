import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, userGroup } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
    },
    body: JSON.stringify({ email, userGroup }),
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    return NextResponse.json({ error: body.message ?? 'Submission failed' }, { status: res.status })
  }

  return NextResponse.json({ success: true })
}
