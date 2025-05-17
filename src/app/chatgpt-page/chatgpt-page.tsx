import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

// Types
type Segment = {
  title: string;
  benefits: string[];
  image: string;
};

type Feature = string;

// Components
const HeroSection = () => (
  <section className="bg-[url('/images/hero-laundry.jpg')] bg-cover text-white py-24 px-6 text-center">
    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
      Revolutionize Linen Management with Lintrag
    </h1>
    <p className='text-lg md:text-2xl mb-6'>
      Save Time. Cut Costs. Gain Control.
    </p>
    <div className='space-x-4'>
      <Button>Explore Features</Button>
      <Button variant='outline'>Book a Demo</Button>
    </div>
  </section>
);

const AboutSection = () => (
  <section className='grid md:grid-cols-2 gap-8 py-16 px-6 items-center'>
    <img
      src='/images/about.jpg'
      alt='Lintrag About'
      className='rounded-2xl shadow-lg'
    />
    <div>
      <h2 className='text-3xl font-bold mb-4'>What is Lintrag?</h2>
      <p className='text-lg text-gray-700'>
        Lintrag is a modern, intelligent linen tracking and laundry management
        solution built for laundry owners, renters, and service providers.
        Powered by cutting-edge technology and deep industry insights from
        AutonomousSpark.
      </p>
    </div>
  </section>
);

const SegmentCard = ({ segment }: { segment: Segment }) => (
  <Card key={segment.title} className='rounded-2xl shadow-xl'>
    <img
      src={segment.image}
      alt={segment.title}
      className='rounded-t-2xl h-48 w-full object-cover'
    />
    <CardContent className='p-6'>
      <h3 className='text-xl font-semibold mb-2'>{segment.title}</h3>
      <ul className='list-disc list-inside text-gray-700'>
        {segment.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const SegmentsSection = () => {
  const segments: Segment[] = [
    {
      title: 'Laundry Owners',
      benefits: ['Save Time', 'Save Money', 'Enhance Efficiency'],
      image: '/images/owners.jpg',
    },
    {
      title: 'Laundry Renters',
      benefits: ['Track with Confidence', 'Lower Costs', 'Smart Automation'],
      image: '/images/renters.jpg',
    },
    {
      title: 'Service Providers',
      benefits: [
        'Time Optimization',
        'Performance Insight',
        'Operational Automation',
      ],
      image: '/images/providers.jpg',
    },
  ];

  return (
    <section className='bg-gray-50 py-16 px-6'>
      <h2 className='text-4xl font-bold text-center mb-12'>
        Segments We Serve
      </h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {segments.map((segment) => (
          <SegmentCard key={segment.title} segment={segment} />
        ))}
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features: Feature[] = [
    'RFID/barcode linen tracking',
    'Real-time location monitoring',
    'Automated workflows',
    'Lifecycle analytics',
    'Staff optimization',
    'Roller cage association',
  ];

  return (
    <section className='py-16 px-6 text-center'>
      <h2 className='text-4xl font-bold mb-8'>Why Choose Lintrag?</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto'>
        {features.map((feature) => (
          <div key={feature} className='p-4 bg-gray-100 rounded-xl shadow'>
            <h3 className='font-medium text-lg'>{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const DemoBookingSection = ({
  form,
  setForm,
}: {
  form: {
    name: string;
    email: string;
    org: string;
    segment: string;
    date: string;
    message: string;
  };
  setForm: React.Dispatch<React.SetStateAction<typeof form>>;
}) => (
  <section className='bg-blue-100 py-16 px-6'>
    <h2 className='text-3xl font-bold text-center mb-8'>Book a Demo</h2>
    <form className='max-w-3xl mx-auto grid gap-4'>
      <Input
        placeholder='Name'
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        placeholder='Email'
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        placeholder='Organization'
        value={form.org}
        onChange={(e) => setForm({ ...form, org: e.target.value })}
      />
      <Input
        placeholder='Segment (Owner / Renter / Provider)'
        value={form.segment}
        onChange={(e) => setForm({ ...form, segment: e.target.value })}
      />
      <Input
        placeholder='Preferred Date'
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <Textarea
        placeholder='Message'
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <Button type='submit'>Schedule My Demo</Button>
    </form>
  </section>
);

const ContactSection = () => (
  <section className='bg-gray-800 text-white py-12 px-6 text-center'>
    <h2 className='text-2xl font-bold mb-4'>Contact AutonomousSpark</h2>
    <p>Email: info@autspark.net | Phone: +1 (555) 123-4567</p>
    <div className='mt-4'>© 2025 AutonomousSpark. All rights reserved.</div>
  </section>
);

export default function LintragHome() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    org: '',
    segment: '',
    date: '',
    message: '',
  });

  return (
    <div className='font-sans'>
      <HeroSection />
      <AboutSection />
      <SegmentsSection />
      <FeaturesSection />
      <DemoBookingSection form={form} setForm={setForm} />
      <ContactSection />
    </div>
  );
}
