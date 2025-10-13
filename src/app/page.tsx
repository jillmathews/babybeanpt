"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Baby Bean Physical Therapy Logo"
              width={60}
              height={60}
              className="mr-3"
              priority
            />
            <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#9DA774' }}>
              Baby Bean Physical Therapy
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Infant Physical Therapy
              <span className="block" style={{ color: '#9DA774' }}>Nurturing Healthy Development</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Specialized, evidence-based physical therapy helping babies reach their developmental milestones 
              with gentle, nurturing care that puts your family&apos;s comfort first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:opacity-90"
                style={{ backgroundColor: '#9DA774' }}
              >
                View Our Services
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
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: `linear-gradient(45deg, #F5F0E5, #9DA774)` }}>
              <div className="text-center text-gray-700">
                <div className="text-6xl mb-4">👶</div>
                <p className="text-lg font-medium">Gentle hands, expert care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F0E5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Specialized Care for Your Baby&apos;s Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide gentle, evidence-based physical therapy to help babies overcome challenges 
              and reach their full potential during these critical early months.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">🤱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Torticollis Treatment</h3>
              <p className="text-gray-600">
                Gentle stretching and positioning techniques to help babies with neck muscle tightness 
                achieve better head and neck mobility.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Plagiocephaly Support</h3>
              <p className="text-gray-600">
                Specialized positioning and movement strategies to address flat head syndrome 
                and promote healthy skull development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Developmental Delays</h3>
              <p className="text-gray-600">
                Early intervention strategies to support babies who may be behind in reaching 
                motor milestones like rolling, sitting, or crawling.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">🤲</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Muscle Tone Issues</h3>
              <p className="text-gray-600">
                Therapeutic activities to help babies with low or high muscle tone develop 
                appropriate strength and movement patterns.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Home Visits</h3>
              <p className="text-gray-600">
                Convenient in-home therapy sessions in your baby&apos;s familiar environment, 
                with family education and environmental modifications.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4" style={{ borderLeftColor: '#9DA774' }}>
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Family Education</h3>
              <p className="text-gray-600">
                Comprehensive training for parents and caregivers on safe handling, 
                positioning, and activities to support development at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the care package that best fits your baby&apos;s needs and your family&apos;s schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Initial Assessment Package */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Initial Assessment</h3>
                <p className="text-gray-600">Comprehensive evaluation and care plan</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>90-minute comprehensive evaluation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Detailed development assessment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Personalized treatment plan</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Home exercise program</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Family education session</span>
                </li>
              </ul>
              
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800 mb-4">Contact for Pricing</p>
                <button className="w-full text-white py-3 px-6 rounded-full font-semibold transition-colors hover:opacity-90" style={{ backgroundColor: '#9DA774' }}>
                  Schedule Assessment
                </button>
              </div>
            </div>

            {/* Treatment Package */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 relative" style={{ borderColor: '#9DA774' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#9DA774' }}>
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Treatment Package</h3>
                <p className="text-gray-600">Ongoing therapy sessions for optimal progress</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>4 or 8 session packages available</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>45-minute treatment sessions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Progress tracking and updates</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Modified home exercises</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Parent education and support</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Flexible scheduling</span>
                </li>
              </ul>
              
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800 mb-4">Package Rates Available</p>
                <button className="w-full text-white py-3 px-6 rounded-full font-semibold transition-colors hover:opacity-90" style={{ backgroundColor: '#9DA774' }}>
                  Get Started
                </button>
              </div>
            </div>

            {/* Home Visit Package */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Home Visits</h3>
                <p className="text-gray-600">Convenient care in your comfortable space</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>In-home therapy sessions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Environmental assessment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Equipment recommendations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Sibling observation included</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Travel within 20 miles</span>
                </li>
              </ul>
              
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800 mb-4">Premium Pricing</p>
                <button className="w-full text-white py-3 px-6 rounded-full font-semibold transition-colors hover:opacity-90" style={{ backgroundColor: '#9DA774' }}>
                  Request Home Visit
                </button>
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
                  Hi! I&apos;m Jill Mathews, a licensed pediatric physical therapist with a specialized focus on 
                  infant development. With over 20 years of experience, I&apos;m passionate about helping babies 
                  reach their developmental milestones through gentle, evidence-based therapy.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#9DA774' }}>🎓</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Education & Credentials</h4>
                      <p className="text-gray-600">Doctor of Physical Therapy, [University Name]<br />
                      Licensed Physical Therapist, State of [North Carolina and South Carolina]<br />
                      Certified in Neonatal Physical Therapy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#9DA774' }}>👶</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Specialized Training</h4>
                      <p className="text-gray-600">Infant Massage Certification<br />
                      Torticollis and Plagiocephaly Specialist<br />
                      Early Intervention Program Experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#9DA774' }}>💚</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">My Approach</h4>
                      <p className="text-gray-600">
                        I believe every baby deserves the gentlest possible care. My approach combines 
                        evidence-based techniques with a deep understanding of infant development, 
                        always prioritizing your baby&apos;s comfort and your family&apos;s peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:order-first">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: `linear-gradient(135deg, #F5F0E5, #9DA774)` }}>
                  <div className="text-center text-gray-700">
                    <div className="text-8xl mb-4">👩‍⚕️</div>
                    <p className="text-xl font-semibold">Professional Photo Here</p>
                    <p className="text-lg">Gentle, Expert Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">BabyBeanPT</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Providing gentle, specialized physical therapy for babies in a nurturing, 
                family-centered environment.
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
                    onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 transition-colors"
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#9DA774'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#d1d5db'}
                  >
                    Service Packages
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
              © 2025 BabyBeanPT LLC. All rights reserved. | Licensed Physical Therapy Practice
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}