import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-eventhive-dark">
            About <span className="text-eventhive-pink">EventHive</span>
          </h1>
          <p className="text-lg text-gray-600">
            Your premier destination for discovering and booking amazing events
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2023, EventHive emerged from a simple idea: to connect people with unforgettable experiences. 
            Our platform bridges the gap between event organizers and attendees, creating a vibrant community of 
            entertainment enthusiasts.
          </p>
          <p>
            What started as a small team with big dreams has evolved into a comprehensive platform featuring concerts, 
            sports events, movies, comedy shows, and more. We're passionate about helping people discover new experiences 
            and making ticket purchasing seamless and secure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p>
              To create the most user-friendly platform that connects people with events they love, 
              while providing event organizers with powerful tools to reach their audience.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
            <p>
              To become the world's most trusted event discovery and booking platform, known for 
              exceptional user experience and innovative features.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-3">
                <AvatarImage 
                  src="/lovable-uploads/96d719d2-3c41-46b7-9783-c5c60f35ede3.png" 
                  alt="Kashvi Bhagat" 
                />
                <AvatarFallback>KB</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mt-3">Kashvi Bhagat</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-3">
                <AvatarFallback>NS</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mt-3">Nikhil Sharma</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-3">
                <AvatarFallback>PT</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mt-3">Prachi Trivedi</h3>
              <p className="text-gray-600">Co-founder and COO</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            Have questions or suggestions? We'd love to hear from you! Reach out to our team at 
            <a href="mailto:info@eventhive.com" className="text-eventhive-pink ml-1">info@eventhive.com</a>
          </p>
          <p>
            For business inquiries, please contact 
            <a href="mailto:business@eventhive.com" className="text-eventhive-pink ml-1">business@eventhive.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
