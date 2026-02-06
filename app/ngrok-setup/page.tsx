"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Terminal } from "lucide-react";

export default function NgrokSetupPage() {
  const [ngrokUrl, setNgrokUrl] = useState('');
  
  const generateRedirectUri = () => {
    if (!ngrokUrl) return '';
    return `${ngrokUrl}/api/auth/callback`;
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };
  
  const updateNgrokUrl = () => {
    // This would update the API route - for now, manual update needed
    alert('Please manually update the NGROK_URL in /app/api/direct-auth/route.ts');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <Terminal className="w-6 h-6" />
            Ngrok OAuth2 Setup
          </CardTitle>
          <CardDescription>
            Configure ngrok for external OAuth2 testing
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">🔧 Why Ngrok?</h3>
            <p className="text-yellow-700 text-sm">
              Google OAuth2 requires publicly accessible URLs. Ngrok exposes your local server 
              to the internet with a public HTTPS URL.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Ngrok URL:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={ngrokUrl}
                  onChange={(e) => setNgrokUrl(e.target.value)}
                  placeholder="https://abc123.ngrok.io"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md font-mono text-sm"
                />
              </div>
            </div>
            
            {ngrokUrl && (
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ Generated Redirect URI:</h4>
                <div className="flex gap-2 items-center">
                  <code className="flex-1 bg-white px-3 py-2 border border-green-300 rounded text-sm font-mono">
                    {generateRedirectUri()}
                  </code>
                  <button
                    onClick={() => copyToClipboard(generateRedirectUri())}
                    className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">📋 Setup Steps:</h3>
            <ol className="text-blue-700 text-sm space-y-2 list-decimal list-inside">
              <li>Start ngrok: <code className="bg-gray-100 px-1 rounded">ngrok http 3001</code></li>
              <li>Copy your ngrok HTTPS URL from the terminal</li>
              <li>Paste it in the input field above</li>
              <li>Copy the generated redirect URI</li>
              <li>Go to <a href="https://console.cloud.google.com/" target="_blank" className="underline flex items-center gap-1">
                Google Cloud Console <ExternalLink className="w-3 h-3" />
              </a></li>
              <li>Add the redirect URI to your OAuth2 Client</li>
              <li>Wait 2-3 minutes for changes to propagate</li>
              <li>Test OAuth2 with your ngrok URL</li>
            </ol>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => window.location.href = `https://${ngrokUrl.replace('https://', '')}/api/direct-auth`}
              disabled={!ngrokUrl}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Terminal className="w-4 h-4 mr-2" />
              Test OAuth2
            </Button>
            
            <Button 
              onClick={updateNgrokUrl}
              disabled={!ngrokUrl}
              variant="outline"
            >
              <Copy className="w-4 h-4 mr-2" />
              Update Code
            </Button>
          </div>

          <div className="text-center text-xs text-gray-500">
            <p>Manual update required: Edit /app/api/direct-auth/route.ts</p>
            <p>Replace NGROK_URL with your ngrok URL</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
