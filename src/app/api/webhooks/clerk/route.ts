/*
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { clerkClient, WebhookEvent } from '@clerk/nextjs/server'
import { createUser } from '../../../../../actions/user.action'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data
  const eventType = evt.type
  
  if (eventType === "user.created") {
    const {id, email_addresses, username} =  evt.data;

    const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        username: username!,
    };
    console.log(user);

    const newUser = await createUser(user);
    
    if (newUser) {
      try {
        await (await clerkClient()).users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          },
        });
      } catch (err) {
        console.error('Error updating Clerk user metadata:', err);
        return new Response('Error updating Clerk metadata', { status: 500 });
      }
    }

    return NextResponse.json({ message: "New user created", user: newUser});

  }
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
  console.log('Webhook payload:', body)

  return new Response('Webhook received', { status: 200 })
}
  */
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { clerkClient, WebhookEvent } from '@clerk/nextjs/server'
import { createUser } from '../../../../../actions/user.action'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new NextResponse('Error: Verification error', {
      status: 400,
    })
  }

  // Handle event
  const { id } = evt.data
  const eventType = evt.type
  
  if (eventType === "user.created") {
    const { id, email_addresses, username } = evt.data

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username!,
    }
    console.log(user)

    // Create user in your system
    const newUser = await createUser(user)

    if (newUser) {
      try {
        // Get Clerk client once for efficiency
        const client = await clerkClient()

        // Update user metadata in Clerk
        await client.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          },
        })

        return new NextResponse(
          JSON.stringify({ message: "New user created", user: newUser }),
          { status: 200 }
        )
      } catch (err) {
        console.error('Error updating Clerk user metadata:', err)
        return new NextResponse('Error updating Clerk metadata', { status: 500 })
      }
    } else {
      return new NextResponse('Error creating user', { status: 500 })
    }
  }

  console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
  console.log('Webhook payload:', body)

  return new NextResponse('Webhook received', { status: 200 })
}
