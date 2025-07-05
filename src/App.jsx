
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroFitness} 
            alt="Fitness Training" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Transform Your Health
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Premium personal fitness coaching that combines expert guidance with smart technology.
            </p>
          <div className="flex justify-center mt-6">
            <Button className="bg-gold text-charcoal hover:bg-white hover:text-charcoal px-6 py-2 rounded-md flex items-center gap-2 text-base font-medium">
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div> 
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* What We Offer */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Personal Training</h3>
                <p className="text-gray-600">Customized workout plans tailored to your goals</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-charcoal" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Nutrition Guidance</h3>
                <p className="text-gray-600">Expert meal planning and dietary recommendations</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Progress Tracking</h3>
                <p className="text-gray-600">Smart analytics to monitor your fitness journey</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-charcoal">1</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Assessment</h3>
                <p className="text-gray-600">We evaluate your current fitness level and goals</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-charcoal">2</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Custom Plan</h3>
                <p className="text-gray-600">Your trainer creates a personalized program</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-charcoal">3</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Track Progress</h3>
                <p className="text-gray-600">Monitor results and adjust your plan</p>
              </div>
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
