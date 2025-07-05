import { Button } from './components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card.jsx'
import { Input } from './components/ui/input.jsx'
import { Textarea } from './components/ui/textarea.jsx'
import { ArrowRight } from 'lucide-react'
import logo from './assets/80health-logo.png'
import heroFitness from './assets/hero-fitness.jpg'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <img src={logo} alt="80health" className="h-8 w-auto" />
            <Button className="bg-charcoal text-white hover:bg-gold hover:text-charcoal">
              Commencer
            </Button>
          </div>
        </div>
      </header>

      {/* Section Héros */}
      <section className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img 
          src={heroFitness} 
          alt="Entraînement Fitness" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Transforme ta santé
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl">
            Coaching personnalisé haut de gamme combinant expertise humaine et technologie intelligente.
          </p>
          <div className="flex justify-center">
            <Button className="bg-gold text-charcoal hover:bg-white hover:text-charcoal px-6 py-2 rounded-md flex items-center gap-2 text-base font-medium">
              <span>Lance-toi</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Nos Services */}
          <section className="py-20 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-charcoal mb-2">Ce que nous proposons</h2>
    <div className="w-16 h-1 bg-gold mx-auto rounded"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
    {[
      {
        icon: '💪',
        title: 'Coaching sportif',
        desc: 'Programmes personnalisés adaptés à tes objectifs avec un accompagnement expert',
      },
      {
        icon: '🥗',
        title: 'Nutrition & alimentation',
        desc: 'Plans alimentaires et conseils nutritionnels pour optimiser ta performance',
      },
      {
        icon: '📊',
        title: 'Suivi intelligent',
        desc: 'Suivi analytique de ton évolution avec des ajustements en continu',
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="group bg-white rounded-2xl p-6 shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300 text-center border border-gray-100"
      >
        <div className="w-14 h-14 text-2xl bg-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow group-hover:scale-110 group-hover:shadow-gold transition-all duration-300">
          {item.icon}
        </div>
        <h3 className="font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

          {/* Comment ça marche */}
          <section className="py-20 bg-[#1A1C1D] relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Comment ça fonctionne</h2>
              <div className="w-16 h-1 bg-gold mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
              {[
                {
                  number: '1',
                  title: 'Évaluation',
                  desc: 'Analyse de ton niveau actuel et de tes objectifs pour une base solide',
                },
                {
                  number: '2',
                  title: 'Plan sur mesure',
                  desc: 'Programme 100% personnalisé selon ton profil et ton emploi du temps',
                },
                {
                  number: '3',
                  title: 'Suivi & ajustement',
                  desc: 'Mesure de tes progrès et ajustement continu pour des résultats durables',
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#131415] rounded-2xl p-6 text-center text-white shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                >
                  <div className="w-10 h-10 bg-gold text-charcoal font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-md mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Formulaire de contact */}
          <div className="max-w-2xl mx-auto mt-20">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-charcoal">Prêt à commencer ?</CardTitle>
                <CardDescription>Réserve ta consultation gratuite maintenant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Prénom" />
                  <Input placeholder="Nom" />
                </div>
                <Input placeholder="Adresse email" type="email" />
                <Input placeholder="Numéro de téléphone" type="tel" />
                <Textarea placeholder="Parle-nous de tes objectifs..." rows={3} />
                <Button className="w-full rounded-xl py-4 bg-charcoal text-white hover:bg-gold hover:text-charcoal flex items-center justify-center space-x-2">
                  <span>Envoyer</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={logo} alt="80health" className="h-6 w-auto mx-auto mb-4 filter brightness-0 invert" />
          <p className="text-gray-400 mb-4">
            Coaching personnel haut de gamme mêlant expertise humaine et technologie de pointe.
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2025 80health. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
