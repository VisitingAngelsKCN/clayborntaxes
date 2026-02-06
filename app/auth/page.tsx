"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Shield, CheckCircle } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Gmail Authorization
          </CardTitle>
          <CardDescription>
            Authorize Gmail to send professional emails from your contact form
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Professional email templates</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Multiple recipient support</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">OAuth2 security (no passwords)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Enterprise-grade authentication</span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-900">Secure OAuth2 Flow</span>
            </div>
            <p className="text-sm text-blue-700">
              You'll be redirected to Google to authorize Gmail access. 
              No passwords are stored - only secure OAuth tokens.
            </p>
          </div>

          <Button 
            onClick={() => window.location.href = '/api/auth'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Authorize Gmail Access
          </Button>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              After authorization, you'll be redirected back to the contact page
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
