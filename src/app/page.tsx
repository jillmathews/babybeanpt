"use client";

import Image from "next/image";
import Script from "next/script";

export default function Home() {

  // metadata used for Google SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthcareService",
    "name": "Baby Bean Physical Therapy",
    "image": "https://www.babybeanpt.com/ma.jpg",
    "description": "Expert pediatric physical therapy for infants and babies specializing in torticollis, plagiocephaly, developmental delays, and motor milestone support.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fort Mill",
      "addressLocality": "Fort Mill",
      "addressRegion": "SC",
      "addressCountry": "US"
    },
    "telephone": "(803) 984-8492",
    "email": "jill@babybeanpt.com",
    "url": "https://www.babybeanpt.com",
    "logo": "https://www.babybeanpt.com/logo.png",
    "priceRange": "$$",
    "openingHours": "By Appointment",
    "founder": {
      "@type": "Person",
      "name": "Jill Mathews",
      "jobTitle": "Licensed Pediatric Physical Therapist",
      "alumniOf": "Doctor of Physical Therapy Program"
    },
    "areaServed": [
      {
        "@type": "Town",
        "name": "Fort Mill",
        "containedInPlace": {
          "@type": "State",
          "name": "South Carolina"
        }
      },
      {
        "@type": "City",
        "name": "Tega Cay",
        "containedInPlace": {
          "@type": "State",
          "name": "South Carolina"
        }
      },
      {
        "@type": "City", 
        "name": "Charlotte",
        "containedInPlace": {
          "@type": "State",
          "name": "North Carolina"
        }
      }
    ],
    "serviceType": [
      "Pediatric Physical Therapy",
      "Infant Physical Therapy", 
      "Torticollis Treatment",
      "Plagiocephaly Therapy",
      "Developmental Delay Support",
      "Motor Milestone Training",
      "Home Visit Therapy"
    ],
    "medicalSpecialty": "Physical Therapy"
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Coming Soon Banner */}
      <div className="w-full text-center py-4 text-white font-bold text-3xl sm:text-4xl" style={{ backgroundColor: '#9DA774' }}>
        COMING SOON
      </div>
      
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-start">
          <div className="flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Baby Bean PT Logo"
              width={60}
              height={60}
              className="h-auto mb-1"
              priority
            />
            <div className="flex flex-col items-center -mt-1">
              <h1 className="text-2xl font-bold text-center leading-none tracking-wider font-nunito" style={{ color: '#9DA774' }}>
                BabyBean
              </h1>
              <p className="font-bold text-center leading-none uppercase tracking-wide font-nunito" style={{ 
                color: '#9c6a48',
                fontSize: '8px',
                marginTop: '4px'
              }}>
                Physical Therapy
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-2 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight" style={{color: '#9DA774'}}>
              Pediatric Physical Therapy
              <span className="block" style={{  color: '#9c6a48'}}>Sprouting Healthy Development</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Welcome to BabyBean PT! We are a boutique, concierge experience for families seeking the highest level of expertise in early infant development. BabyBean PT specializes in evidence-based physical therapy and general wellness for babies birth to 6 months with a warm, family-centered approach that promotes growth, comfort and confidence for both baby and family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:text-white"
                style={{ 
                  borderColor: '#9DA774', 
                  color: '#9DA774'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#9DA774'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
              >
                View Our Services
              </button>
              <button 
                onClick={() => {
                  // Scroll to the intake form section
                  document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' });
                  // After scrolling, show the form
                  setTimeout(() => {
                    const formContainer = document.getElementById('form-container');
                    const button = document.getElementById('toggle-button');
                    if (formContainer && button) {
                      formContainer.style.display = 'block';
                      button.textContent = 'Hide Form';
                    }
                  }, 800);
                }}
                className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:opacity-90"
                style={{ backgroundColor: '#9DA774' }}
              >
                Complete Intake Form
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:text-white"
                style={{ 
                  borderColor: '#9DA774', 
                  color: '#9DA774'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#9DA774'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
              >
                Meet Our Therapist
              </button>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
            <Image
              src="/baby.jpg"
              alt="Baby Bean Physical Therapy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F0E5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              The Concierge Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From personalized scheduling to in-home or virtual private visits, our concierge model ensures your family receives seamless, uninterrupted care in a setting that feels most comfortable to you. At BabyBean PT, we are dedicated to helping your baby grow, move and thrive-from the very beginning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Baby Wellness & Preventive Care</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Comprehensive wellness screenings and guidance</li>
                <li>• Promote optimal development</li>
                <li>• Prevent motor delays</li>
                <li>• Support healthy growth from day one</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9c6a48' }}>
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Plagiocephaly Support</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Specialized positioning strategies</li>
                <li>• Movement strategies to address flat head syndrome</li>
                <li>• Promote healthy skull development</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Developmental Milestones Support</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Customized care for early motor milestones</li>
                <li>• Head control development</li>
                <li>• Rolling and sitting support</li>
                <li>• Confident and natural progression</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9c6a48' }}>
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Family Education & Empowerment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• One-on-one coaching for parents and caregivers</li>
                <li>• Virtual or hands-on instruction</li>
                <li>• Safe handling and positioning techniques</li>
                <li>• Activity and toy selection guidance</li>
                <li>• Support development at home</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Virtual Visits</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Remote therapy sessions via video call</li>
                <li>• Follow-ups and assessment reviews</li>
                <li>• General baby wellness inquiries</li>
                <li>• Ongoing support from home comfort</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Home Visits</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• In-home therapy sessions</li>
                <li>• Baby&apos;s familiar environment</li>
                <li>• Tailored to family&apos;s schedule</li>
                <li>• Personalized to your needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section id="intake-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Complete our intake form to begin your baby&apos;s journey toward healthy development. 
              This helps us understand your child&apos;s unique needs and prepare for your first consultation.
            </p>
            <button
              onClick={() => {
                const formContainer = document.getElementById('form-container');
                const button = document.getElementById('toggle-button');
                if (formContainer && button) {
                  if (formContainer.style.display === 'none' || formContainer.style.display === '') {
                    formContainer.style.display = 'block';
                    button.textContent = 'Hide Form';
                    formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    formContainer.style.display = 'none';
                    button.textContent = 'Show Intake Form';
                  }
                }
              }}
              id="toggle-button"
              className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:opacity-90 hover:shadow-xl"
              style={{ backgroundColor: '#9DA774' }}
            >
              Show Intake Form
            </button>
          </div>
          
          <div 
            id="form-container" 
            className="hidden bg-white rounded-2xl shadow-2xl p-6 border-2"
            style={{ 
              borderColor: '#9DA774',
              display: 'none'
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Intake Form</h3>
              <button
                onClick={() => {
                  const formContainer = document.getElementById('form-container');
                  const button = document.getElementById('toggle-button');
                  if (formContainer && button) {
                    formContainer.style.display = 'none';
                    button.textContent = 'Show Intake Form';
                  }
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ✕
              </button>
            </div>
            
            <div className="w-full overflow-hidden rounded-lg">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeaRtY4x4XFd3P8MNPOdhgcDpSmFj_uaHUX_HXNekGImOYy4g/viewform?embedded=true" 
                width="100%" 
                height="800" 
                style={{ border: 'none', borderRadius: '8px' }}
                title="Baby Bean PT Intake Form"
              >
                Loading…
              </iframe>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 mb-3">
                  Having trouble with the form? 
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeaRtY4x4XFd3P8MNPOdhgcDpSmFj_uaHUX_HXNekGImOYy4g/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-1 underline"
                    style={{ color: '#9DA774' }}
                  >
                    Open in new window
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F0E5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Meet Your Baby&apos;s Physical Therapist
            </h2>              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Hi! I&apos;m Jill Mathews a licensed Doctor of Physical Therapy and former NICU mom with over 20 years experience in infant development. I specialize in supporting babies from birth to 6 months as they grow, move and thrive. At BabyBean PT, I believe every baby deserves a gentle start and every parent deserves peace of mind. My care is guided in science and delivered with compassion- tailored to your baby&apos;s specific needs and your family&apos;s lifestyle. Whether you are supporting your baby&apos;s motor development, preventing concerns before they arise, or simply seeking reassurance and expert guidance, I provide a holistic, wellness-focused experience that goes beyond traditional therapy.
                  
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#9c6a48' }}>🎓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Education & Credentials</h4>
                      <p className="text-gray-600">BS in Physical Therapy, The Ohio State University<br />
                      Doctor of Physical Therapy, Arcadia University<br />
                      Licensed Physical Therapist, State of North Carolina</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#9DA774' }}>👶</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Specialized Training</h4>
                      <p className="text-gray-600">Board Certified Neonatal Therapist<br />
                      Infant Massage Certification<br />
                      Trained in the TIMP, Test for infant Motor Performance<br />
                      Certified Small Baby Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:order-first">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/ma.jpg"
                  alt="Physical Therapist - Professional Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-lg font-semibold text-gray-700">
                  Dr. Jill Mathews, PT, DPT, CNT, NTMTC, C-ELBW
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BabyBean PT was started Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🌱 My Why Behind BabyBean PT
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Inspired by my experience as a NICU mom, I founded BabyBean Physical Therapy to give families the expert guidance and reassurance I once needed myself. I had just started my career as a pediatric physical therapist at a large medical center when my son John was born eight weeks early on March 25, 2002. The small NICU where John was born did not have therapy services, and after five long weeks, we were discharged without proper follow-up. John struggled with feeding and had mild motor delays, and I found myself desperately searching for guidance. I immersed myself in research, reading every article and taking every continuing education course I could find to help him. Through that experience, my career path shifted—I knew I belonged in the NICU, helping families navigate those same challenges.
            </p>
            <p>
              For the past 23 years, I have dedicated my career to supporting families in the NICU—empowering and educating them on early infant care, and advocating for early intervention and outpatient follow-up for NICU graduates. Over the years, I have seen how difficult it can be for families to find a therapist experienced with infants after leaving the hospital. Wait times are often long, and families may miss the crucial developmental window of those first few months.
            </p>
            <p>
              BabyBean PT was created to bridge that gap—providing expert, compassionate care in the comfort of a family&apos;s home or though convenient virtual visits, at a time that works for them. In addition to developmental support, BabyBean PT offers virtual wellness visits designed to empower families with knowledge, confidence, and peace of mind to ensure their little one is thriving. Whether you&apos;re concerned about your baby&apos;s motor development or simply want reassurance that your baby bean is on track, BabyBean PT is here to help your family from the very beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">BabyBean PT</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Helping tiny beans sprout big milestones
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-3" style={{ color: '#9DA774' }}>📞</span>
                  <span>(803) 984-8492</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3" style={{ color: '#9DA774' }}>✉️</span>
                  <span>jill@babybeanpt.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3" style={{ color: '#9DA774' }}>📍</span>
                  <span>Fort Mill, SC</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 transition-colors"
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#9DA774'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#d1d5db'}
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 transition-colors"
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#9DA774'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#d1d5db'}
                  >
                    About Me
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-gray-300">
                <li>By appointment</li>
                <li>Flexible scheduling to meet each family&apos;s individual needs</li>
                <li className="pt-2" style={{ color: '#9DA774' }}>
                  
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Baby Bean Physical Therapy LLC. | Licensed Physical Therapy Practice
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}