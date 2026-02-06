"use client"

import React, { useEffect } from 'react';

export default function SimpleAuthPage() {
  useEffect(() => {
    // Direct redirect to OAuth2
    window.location.href = '/api/test-auth';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Google OAuth2...</p>
      </div>
    </div>
  );
}
