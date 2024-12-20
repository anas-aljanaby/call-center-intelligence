'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  workEmail: string;
  phone: string;
  agentCount: string;
  source: string;
}

export function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    workEmail: '',
    phone: '',
    agentCount: '',
    source: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Clear form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        jobTitle: '',
        company: '',
        workEmail: '',
        phone: '',
        agentCount: '',
        source: '',
      });

      alert('Thank you! We will contact you soon.');
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Schedule a demo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name *"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name *"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Job title *"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company *"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            placeholder="Work email *"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone *"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="agentCount"
            value={formData.agentCount}
            onChange={handleChange}
            placeholder="Number of contact center agents *"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <select 
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md" 
            required
          >
            <option value="">How did you hear about us? *</option>
            <option value="search">Search Engine</option>
            <option value="social">Social Media</option>
            <option value="referral">Referral</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'SUBMITTING...' : 'SCHEDULE DEMO'}
        </button>
      </form>
    </div>
  );
} 