import { Button } from './components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card.jsx'
import { Input } from './components/ui/input.jsx'
import { Textarea } from './components/ui/textarea.jsx'
import { Heart, ArrowRight, CheckCircle } from 'lucide-react'
import logo from './assets/80health-logo.png'
import heroFitness from './assets/hero-fitness.jpg'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <img src={logo} alt="80health" className="h-8 w-auto" />
            <Button className="bg-charcoal text-white hover:bg-gold hover:text-charcoal">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img 
          src={heroFitness} 
          alt="Fitness Training" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Transform Your Health
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl">
            Premium personal fitness coaching that combines expert guidance with smart technology.
          </p>
          <div className="flex justify-center">
            <Button className="bg-gold text-charcoal hover:bg-white hover:text-charcoal px-6 py-2 rounded-md flex items-center gap-2 text-base font-medium">
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* What We Offer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      bg: 'bg-charcoal',
      title: 'Personal Training',
      desc: 'Customized workout plans tailored to your goals',
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-charcoal" />,
      bg: 'bg-gold',
      title: 'Nutrition Guidance',
      desc: 'Expert meal planning and dietary recommendations',
    },
    {
      icon: <ArrowRight className="h-6 w-6 text-white" />,
      bg: 'bg-charcoal',
      title: 'Progress Tracking',
      desc: 'Smart analytics to monitor your fitness journey',
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center border border-gray-100"
    >
      <div
        className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        {item.icon}
      </div>
      <h3 className="text-md font-semibold text-charcoal mb-2">{item.title}</h3>
      <p className="text-gray-500 text-sm">{item.desc}</p>
    </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-[#1A1C1D] py-20 rounded-xl">
  <h2 className="text-3xl font-bold text-white text-center mb-2">
    How It Works
  </h2>
  <div className="w-20 h-1 bg-gold mx-auto mb-10 rounded"></div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto">
    {[
      {
        step: '1',
        title: 'Assessment',
        desc: 'We evaluate your current fitness level and goals to create the perfect foundation for success',
      },
      {
        step: '2',
        title: 'Custom Plan',
        desc: 'Your trainer creates a personalized program designed specifically for your unique needs and objectives',
      },
      {
        step: '3',
        title: 'Track Progress',
        desc: 'Monitor results and adjust your plan continuously to ensure optimal progress and lasting results',
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#131415] rounded-2xl p-6 text-center text-white shadow-md"
      >
        <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-charcoal font-bold">
          {item.step}
        </div>
        <h3 className="font-semibold text-md mb-2">{item.title}</h3>
        <p className="text-sm text-gray-300">{item.desc}</p>
      </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-charcoal">Ready to Start?</CardTitle>
                <CardDescription>Get your free consultation today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Textarea placeholder="Tell us about your fitness goals..." rows={3} />
                <Button className="w-full rounded-xl py-4 bg-charcoal text-white hover:bg-gold hover:text-charcoal flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={logo} alt="80health" className="h-6 w-auto mx-auto mb-4 filter brightness-0 invert" />
          <p className="text-gray-400 mb-4">
            Premium personal fitness coaching that combines expert guidance with smart technology.
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2025 80health. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
