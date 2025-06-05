
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-80 bg-gradient-to-r from-eventhive-dark to-eventhive-pink overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl opacity-90">
              Have questions about EventHive? We're here to help you discover amazing events!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-eventhive-pink/10 to-eventhive-dark/10">
              <CardTitle className="text-2xl text-eventhive-dark flex items-center gap-2">
                <Send className="w-6 h-6 text-eventhive-pink" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                  />
                </div>
                <Button className="w-full bg-eventhive-pink hover:bg-eventhive-pink/90 text-white py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Office Image */}
            <Card className="overflow-hidden shadow-lg border-0">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                  alt="Modern office space" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Our Office</h3>
                  <p className="text-sm opacity-90">Where magic happens</p>
                </div>
              </div>
            </Card>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-eventhive-pink/10 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-eventhive-pink" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-sm text-gray-600">support@eventhive.com</p>
                <Badge variant="outline" className="mt-2">24/7 Support</Badge>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-eventhive-dark/10 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-eventhive-dark" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
                <Badge variant="outline" className="mt-2">Mon-Fri 9AM-6PM</Badge>
              </Card>
            </div>

            <Card className="p-6 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-eventhive-pink/10 rounded-full">
                  <MapPin className="w-6 h-6 text-eventhive-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Visit Our Office</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    123 Innovation Hub, Tech Park<br />
                    Bangalore, Karnataka 560001
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </Card>

            {/* Team Image */}
            <Card className="overflow-hidden shadow-lg border-0">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                  alt="Happy team working together" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Meet Our Team</h3>
                  <p className="text-sm opacity-90">Passionate about great events</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
