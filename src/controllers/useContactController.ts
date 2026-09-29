import { useState, FormEvent } from 'react';
import { siteConfig } from '@/config/site';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

export function useContactController() {
  const [formData, setFormData] = useState<ContactFormState>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Check if there is a Vite env for form endpoint
    const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setIsSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        }
      } catch (error) {
        console.error('Form submission error', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback to mailto
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${siteConfig.social.email}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return {
    formData,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit
  };
}
