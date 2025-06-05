
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, FileText, AlertCircle } from "lucide-react";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: "We collect information you provide when creating an account, booking tickets, and using our services. This includes your name, email, phone number, and payment information."
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: "Your information is used to process bookings, send event updates, improve our services, and provide customer support. We never sell your personal data to third parties."
    },
    {
      icon: Shield,
      title: "Data Security",
      content: "We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information."
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: "We only share necessary information with event organizers to process your bookings. We may also share aggregated, non-personal data for analytics purposes."
    },
    {
      icon: Users,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You can also opt-out of marketing communications at any time."
    },
    {
      icon: AlertCircle,
      title: "Changes to Privacy Policy",
      content: "We may update this policy occasionally. We'll notify you of significant changes via email or through our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section with Privacy Theme Image */}
      <div className="relative h-80 bg-gradient-to-r from-eventhive-dark to-eventhive-pink overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl opacity-90">
              Your privacy matters to us. Learn how we protect and handle your personal information.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-lg border-0">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Data protection and privacy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-eventhive-dark mb-4">Our Commitment to Your Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  At EventHive, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform to discover 
                  and book amazing events.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  <strong>Last updated:</strong> December 2024
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policy Sections */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-eventhive-pink/10 to-eventhive-dark/10">
                <CardTitle className="flex items-center gap-3 text-eventhive-dark">
                  <div className="p-2 bg-eventhive-pink/10 rounded-lg">
                    <section.icon className="w-5 h-5 text-eventhive-pink" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <Card className="max-w-4xl mx-auto mt-12 shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardTitle className="text-eventhive-dark flex items-center gap-2">
              <Lock className="w-5 h-5 text-eventhive-pink" />
              Additional Privacy Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Contact for Privacy Concerns</h3>
                <p className="text-gray-600 text-sm mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact our Privacy Officer.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Email:</strong> privacy@eventhive.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> 123 Innovation Hub, Tech Park, Bangalore</p>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Secure data protection" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
