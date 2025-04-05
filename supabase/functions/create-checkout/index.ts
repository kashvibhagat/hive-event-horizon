
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@12.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  try {
    // Initialize Stripe with the secret key from environment variables
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      httpClient: Stripe.createFetchHttpClient(),
    });

    // Get request body
    const { eventId, ticketType, quantity, unitPrice, totalPrice, customerEmail, customerName } = await req.json();

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: ticketType,
              description: `Ticket for event ID: ${eventId}`,
            },
            unit_amount: Math.round(unitPrice * 100), // Convert to cents
          },
          quantity: quantity,
        },
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Processing Fee",
            },
            unit_amount: Math.round(totalPrice * 5), // 5% of total as processing fee
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/event/${eventId}`,
      customer_email: customerEmail,
      client_reference_id: eventId,
      metadata: {
        eventId,
        ticketType,
        customerName,
      },
    });

    // Return the session URL
    return new Response(
      JSON.stringify({ url: session.url }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});
