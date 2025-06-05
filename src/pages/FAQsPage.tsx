
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Search, MessageCircle } from "lucide-react";

const FAQsPage = () => {
  const faqCategories = [
    {
      category: "Booking & Tickets",
      faqs: [
        {
          question: "How do I book tickets on EventHive?",
          answer: "Simply browse events, select your preferred event, choose your seats, and proceed to checkout. You can pay using various methods including UPI, credit/debit cards, and net banking."
        },
        {
          question: "Can I cancel or refund my tickets?",
          answer: "Refund policies vary by event. Most events allow cancellations up to 24-48 hours before the event. Check the specific event's refund policy on the booking page."
        },
        {
          question: "How will I receive my tickets?",
          answer: "Digital tickets are sent to your registered email and mobile number. You can also access them through your EventHive account under 'My Bookings'."
        }
      ]
    },
    {
      category: "Payment & Pricing",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept UPI, credit cards, debit cards, net banking, and digital wallets like Paytm, PhonePe, and Google Pay."
        },
        {
          question: "Are there any additional charges?",
          answer: "Yes, convenience fees may apply depending on the payment method and ticket price. All charges are clearly displayed before payment."
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely! We use industry-standard encryption and partner with trusted payment gateways to ensure your financial information is completely secure."
        }
      ]
    },
    {
      category: "Events & Venues",
      faqs: [
        {
          question: "How do I find events near me?",
          answer: "Use our location filter on the homepage or browse by city. You can also search for specific venues or event types."
        },
        {
          question: "Can I sell tickets on EventHive?",
          answer: "Currently, we work directly with event organizers. If you're organizing an event, please contact our business team for partnership opportunities."
        },
        {
          question: "What if an event is cancelled?",
          answer: "If an event is cancelled by the organizer, you'll receive a full refund automatically within 7-10 business days, plus email notification."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-eventhive-pink/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-eventhive-pink" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-eventhive-pink">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about EventHive
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="mb-8 shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-eventhive-pink/10 to-eventhive-dark/10">
                <CardTitle className="text-xl text-eventhive-dark">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`} className="border-b border-gray-100">
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto shadow-lg">
            <CardContent className="p-8">
              <MessageCircle className="w-12 h-12 text-eventhive-pink mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Our support team is here to help!
              </p>
              <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
