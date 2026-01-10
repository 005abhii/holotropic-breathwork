// Event Types
export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  description: string;
  facilitator: string;
  type: 'workshop' | 'retreat' | 'training' | 'breathwork';
  image?: string;
  registrationLink?: string;
  price?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  image?: string;
  date?: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'safety' | 'preparation' | 'training' | 'sessions';
}

// Resource Types
export interface Resource {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'article' | 'research' | 'blog' | 'guide';
  image?: string;
  readTime?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  inquiryType: 'session' | 'training' | 'general' | 'retreat';
}

// Registration Form Types
export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  eventId: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  medicalInfo?: string;
  experience?: string;
  specialRequirements?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}
