import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

// MongoDB connection
let client
let db

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME)
  }
  return db
}

// Helper function to handle CORS
function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

// Route handler function
async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    // Root endpoint - GET /api/
    if (route === '/' && method === 'GET') {
      return handleCORS(NextResponse.json({ message: "Terre & Saveurs API", version: "1.0.0" }))
    }

    // Newsletter subscription - POST /api/newsletter
    if (route === '/newsletter' && method === 'POST') {
      const body = await request.json()
      
      if (!body.email) {
        return handleCORS(NextResponse.json(
          { error: "Email is required" }, 
          { status: 400 }
        ))
      }

      const subscription = {
        id: uuidv4(),
        email: body.email,
        subscribedAt: new Date().toISOString()
      }

      await db.collection('newsletter').insertOne(subscription)
      return handleCORS(NextResponse.json({ 
        success: true, 
        message: "Inscription réussie!" 
      }))
    }

    // Orders - POST /api/orders (Create order)
    if (route === '/orders' && method === 'POST') {
      const body = await request.json()
      
      const order = {
        id: uuidv4(),
        ...body,
        status: 'pending',
        createdAt: new Date().toISOString()
      }

      await db.collection('orders').insertOne(order)
      return handleCORS(NextResponse.json(order))
    }

    // Orders - GET /api/orders (Get all orders)
    if (route === '/orders' && method === 'GET') {
      const orders = await db.collection('orders')
        .find({})
        .sort({ createdAt: -1 })
        .limit(100)
        .toArray()

      const cleanedOrders = orders.map(({ _id, ...rest }) => rest)
      return handleCORS(NextResponse.json(cleanedOrders))
    }

    // Order by ID - GET /api/orders/:id
    if (route.startsWith('/orders/') && method === 'GET') {
      const orderId = path[1]
      const order = await db.collection('orders').findOne({ id: orderId })
      
      if (!order) {
        return handleCORS(NextResponse.json(
          { error: "Order not found" }, 
          { status: 404 }
        ))
      }

      const { _id, ...cleanedOrder } = order
      return handleCORS(NextResponse.json(cleanedOrder))
    }

    // Contact form - POST /api/contact
    if (route === '/contact' && method === 'POST') {
      const body = await request.json()
      
      if (!body.name || !body.email || !body.message) {
        return handleCORS(NextResponse.json(
          { error: "Name, email and message are required" }, 
          { status: 400 }
        ))
      }

      const contact = {
        id: uuidv4(),
        ...body,
        createdAt: new Date().toISOString(),
        status: 'new'
      }

      await db.collection('contacts').insertOne(contact)
      return handleCORS(NextResponse.json({ 
        success: true, 
        message: "Message envoyé avec succès!" 
      }))
    }

    // Cart - Save cart to DB (for persistence)
    if (route === '/cart' && method === 'POST') {
      const body = await request.json()
      const sessionId = body.sessionId || uuidv4()
      
      const cartData = {
        id: sessionId,
        items: body.items,
        updatedAt: new Date().toISOString()
      }

      await db.collection('carts').updateOne(
        { id: sessionId },
        { $set: cartData },
        { upsert: true }
      )

      return handleCORS(NextResponse.json({ 
        success: true,
        sessionId 
      }))
    }

    // Cart - Get cart from DB
    if (route === '/cart' && method === 'GET') {
      const url = new URL(request.url)
      const sessionId = url.searchParams.get('sessionId')
      
      if (!sessionId) {
        return handleCORS(NextResponse.json({ items: [] }))
      }

      const cart = await db.collection('carts').findOne({ id: sessionId })
      
      if (!cart) {
        return handleCORS(NextResponse.json({ items: [] }))
      }

      const { _id, ...cleanedCart } = cart
      return handleCORS(NextResponse.json(cleanedCart))
    }

    // Route not found
    return handleCORS(NextResponse.json(
      { error: `Route ${route} not found` }, 
      { status: 404 }
    ))

  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(NextResponse.json(
      { error: "Internal server error", details: error.message }, 
      { status: 500 }
    ))
  }
}

// Export all HTTP methods
export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute