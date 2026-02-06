"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, ExternalLink } from "lucide-react";

export default function RedirectInfoPage() {
  const redirectUri = 'http://localhost:3001/api/auth/callback';
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(redirectUri);
    alert('Redirect URI copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Google Cloud Console Setup
          </CardTitle>
          <CardDescription>
            Add this redirect URI to your Google OAuth2 Client
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">🔧 Fix Required</h3>
            <p className="text-yellow-700 text-sm">
              The redirect URI in your Google Cloud Console doesn't match what our app is using.
              Add the exact URI below to fix this issue.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Required Redirect URI:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={redirectUri}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">📋 Steps to Fix:</h3>
            <ol className="text-blue-700 text-sm space-y-2 list-decimal list-inside">
              <li>Go to <a href="https://console.cloud.google.com/" target="_blank" className="underline flex items-center gap-1">
                Google Cloud Console <ExternalLink className="w-3 h-3" />
              </a></li>
              <li>Navigate to "APIs & Services" → "Credentials"</li>
              <li>Find your OAuth 2.0 Client ID</li>
              <li>Click "Edit" or "Download JSON"</li>
              <li>Under "Authorized redirect URIs", click "ADD URI"</li>
              <li>Paste: <code className="bg-gray-100 px-1 rounded">{redirectUri}</code></li>
              <li>Click "Save"</li>
              <li>Wait 2-3 minutes for changes to propagate</li>
              <li>Try the authorization again</li>
            </ol>
          </div>

          <div className="text-center">
            <button
              onClick={() => window.location.href = '/auth'}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Try Authorization Again
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
