
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users, Bell, FileText } from "lucide-react";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number) when you register",
        "Payment information for ticket purchases (processed securely)",
        "Device and usage information to improve our services",
        "Location data to show relevant events near you",
        "Communication preferences and interaction history"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Process ticket bookings and send confirmations",
        "Provide customer support and respond to inquiries",
        "Send event updates and promotional communications",
        "Improve our platform and develop new features",
        "Ensure security and prevent fraudulent activities"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We never sell your personal information to third parties",
        "Event organizers receive necessary booking details only",
        "Payment processors handle financial transactions securely",
        "Service providers who help us operate our platform",
        "Legal authorities when required by law"
      ]
    },
    {
      icon: Bell,
      title: "Your Privacy Rights",
      content: [
        "Access and download your personal data",
        "Correct or update your information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Control location tracking and notifications"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "Industry-standard encryption for all data transmission",
        "Secure servers with regular security audits",
        "Limited access to personal information by employees",
        "Regular security training for our team",
        "Immediate notification of any security incidents"
      ]
    },
    {
      icon: FileText,
      title: "Data Retention",
      content: [
        "Account information retained while your account is active",
        "Transaction records kept for 7 years as required by law",
        "Marketing preferences stored until you opt-out",
        "Support communications kept for 2 years",
        "Deleted accounts purged within 30 days"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-eventhive-pink">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <Badge className="mt-4 bg-green-100 text-green-800">
            Last updated: December 2024
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-eventhive-pink/10 to-eventhive-dark/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                At EventHive, we believe in transparency and your right to privacy. This policy explains 
                how we handle your personal information when you use our platform to discover and book events. 
                We are committed to protecting your data and giving you control over how it's used.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-eventhive-pink/10 rounded-full flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-eventhive-pink" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-eventhive-pink rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Contact Us About Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have questions about this privacy policy or how we handle your data, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@eventhive.com</p>
                <p><strong>Address:</strong> Privacy Officer, EventHive, 123 Event Street, Mumbai, India</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">Changes to This Policy</h3>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. When we do, we'll notify you via email 
                and update the "Last updated" date above. Continued use of our services after changes 
                constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
