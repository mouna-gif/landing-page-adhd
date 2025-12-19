import { Logo } from './components/Logo';
import { GameCard } from './components/GameCard';
import { FloatingShapes } from './components/FloatingShapes';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { 
  Brain, 
  Gamepad2, 
  Trophy,
  Puzzle,
  Target,
  Zap,
  Star,
  Heart,
  Sparkles,
  Rocket,
  Shield,
  Users,
  BarChart3,
  Clock,
  Award,
  PlayCircle,
  ArrowRight,
  CheckCircle,
  Smile,
  Music,
  Palette,
  Layers
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* Navigation Colorée */}
      <nav className="bg-white/90 backdrop-blur-lg border-b-4 border-purple-300 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-3"
            >
              <Logo className="w-14 h-14" />
              <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                  ADHD Kids Platform
                </h1>
                <p className="text-sm text-gray-600">Apprends en t'amusant ! 🎮</p>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#jeux" className="text-purple-600 hover:text-pink-600 transition-colors">🎯 Jeux</a>
              <a href="#comment" className="text-purple-600 hover:text-pink-600 transition-colors">💡 Comment</a>
              <a href="#parents" className="text-purple-600 hover:text-pink-600 transition-colors">👨‍👩‍👧 Parents</a>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Jouer Maintenant ! 🚀
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Ultra Coloré */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <FloatingShapes />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
              >
                <Sparkles className="w-5 h-5" />
                <span>Nouveau : Jeux IA Super Amusants !</span>
              </motion.div>
              
              <h1 className="text-6xl lg:text-7xl mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
                  Joue, Apprends
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-teal-600">
                  & Deviens un Génie ! 🧠✨
                </span>
              </h1>
              
              <p className="text-2xl text-gray-700 mb-8">
                Des <span className="text-purple-600">jeux colorés</span> et <span className="text-pink-600">super amusants</span> qui t'aident à développer ta <span className="text-orange-600">mémoire</span>, ton <span className="text-blue-600">attention</span> et ta <span className="text-green-600">rapidité</span> ! 🎯🎨🎮
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-3 group"
                >
                  <PlayCircle className="w-7 h-7 group-hover:scale-125 transition-transform" />
                  Commencer à Jouer !
                  <Rocket className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-purple-600 px-10 py-5 rounded-full text-xl border-4 border-purple-300 hover:border-pink-400 transition-all shadow-lg"
                >
                  Pour les Parents 👨‍👩‍👧
                </motion.button>
              </div>
              
              <div className="flex items-center gap-6 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span>100% Gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span>Sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center">
                    <Smile className="w-6 h-6 text-white" />
                  </div>
                  <span>Super Fun</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-3xl blur-2xl opacity-50" />
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1679539143915-947178dbea00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBsYXlpbmclMjB0YWJsZXQlMjBnYW1lfGVufDF8fHx8MTc2NDg0ODg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Enfant jouant sur tablette"
                  className="relative rounded-3xl shadow-2xl w-full object-cover border-8 border-white"
                />
                
                {/* Badges flottants */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-6 -left-6 bg-yellow-400 text-white px-6 py-3 rounded-2xl shadow-xl transform rotate-12"
                >
                  <Star className="w-6 h-6 inline mr-2" />
                  +1000 Jeux
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-green-400 text-white px-6 py-3 rounded-2xl shadow-xl transform -rotate-12"
                >
                  <Trophy className="w-6 h-6 inline mr-2" />
                  Gagne des Badges !
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Jeux Disponibles */}
      <section id="jeux" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-blue-100/50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
                Nos Jeux Super Cool ! 🎮
              </span>
            </h2>
            <p className="text-2xl text-gray-700">
              Choisis ton jeu préféré et deviens un champion ! 🏆
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <GameCard 
              title="Memory Magic 🧙‍♂️"
              description="Retrouve les paires et deviens un magicien de la mémoire !"
              icon={<Brain className="w-10 h-10" />}
              color="#8B5CF6"
              delay={0}
            />
            <GameCard 
              title="Pop Balloons 🎈"
              description="Éclate les ballons colorés le plus vite possible !"
              icon={<Target className="w-10 h-10" />}
              color="#EC4899"
              delay={0.1}
            />
            <GameCard 
              title="Labyrinthe Fou 🌀"
              description="Trouve la sortie du labyrinthe mystérieux !"
              icon={<Puzzle className="w-10 h-10" />}
              color="#F59E0B"
              delay={0.2}
            />
            <GameCard 
              title="Speed Click ⚡"
              description="Clique le plus vite sur les étoiles qui brillent !"
              icon={<Zap className="w-10 h-10" />}
              color="#10B981"
              delay={0.3}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GameCard 
              title="Puzzle Master 🧩"
              description="Assemble les pièces et crée de magnifiques images !"
              icon={<Layers className="w-10 h-10" />}
              color="#3B82F6"
              delay={0.4}
            />
            <GameCard 
              title="Color Match 🎨"
              description="Associe les bonnes couleurs ensemble !"
              icon={<Palette className="w-10 h-10" />}
              color="#EF4444"
              delay={0.5}
            />
            <GameCard 
              title="Rhythm Beat 🎵"
              description="Tape au bon rythme et deviens une star !"
              icon={<Music className="w-10 h-10" />}
              color="#06B6D4"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Comment ça marche - Version Enfants */}
      <section id="comment" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                C'est Super Facile ! 🎯
              </span>
            </h2>
            <p className="text-2xl text-gray-700">
              En 3 étapes, tu commences à jouer et à t'amuser !
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                emoji: '👋',
                title: 'Dis Bonjour !',
                description: 'Crée ton profil avec ton prénom et ton âge',
                color: 'from-pink-400 to-rose-500',
                icon: <Smile className="w-12 h-12" />
              },
              {
                step: '2',
                emoji: '🎮',
                title: 'Choisis ton Jeu',
                description: 'Sélectionne parmi nos super jeux colorés',
                color: 'from-purple-400 to-indigo-500',
                icon: <Gamepad2 className="w-12 h-12" />
              },
              {
                step: '3',
                emoji: '🏆',
                title: 'Gagne des Étoiles !',
                description: 'Joue, progresse et collectionne des badges',
                color: 'from-orange-400 to-yellow-500',
                icon: <Trophy className="w-12 h-12" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-2xl h-full border-4 border-white relative overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 text-9xl opacity-20">{item.emoji}</div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <div className="text-6xl mb-4 opacity-50">0{item.step}</div>
                    <h3 className="text-3xl mb-3 text-white">{item.title}</h3>
                    <p className="text-xl text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Récompenses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
                Gagne des Récompenses ! 🎁
              </span>
            </h2>
            <p className="text-2xl text-gray-700">
              Plus tu joues, plus tu gagnes de badges et d'étoiles !
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '⭐', title: 'Étoile Bronze', points: '100 pts' },
              { icon: '🌟', title: 'Étoile Argent', points: '500 pts' },
              { icon: '✨', title: 'Étoile Or', points: '1000 pts' },
              { icon: '🏆', title: 'Champion', points: '5000 pts' },
            ].map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 text-center shadow-lg border-4 border-yellow-300"
              >
                <div className="text-7xl mb-4">{reward.icon}</div>
                <h3 className="text-2xl text-gray-900 mb-2">{reward.title}</h3>
                <p className="text-xl text-orange-600">{reward.points}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Parents */}
      <section id="parents" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Pour les Parents 👨‍👩‍👧‍👦
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Suivez les progrès de votre enfant avec notre tableau de bord professionnel et nos analyses IA détaillées.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: <BarChart3 className="w-6 h-6" />, text: 'Rapports de progression détaillés' },
                  { icon: <Brain className="w-6 h-6" />, text: 'Analyse IA des performances cognitives' },
                  { icon: <Shield className="w-6 h-6" />, text: 'Données sécurisées et confidentielles' },
                  { icon: <Clock className="w-6 h-6" />, text: 'Suivi en temps réel des sessions' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <span className="text-gray-800 text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Accéder au Tableau de Bord
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1631032024590-140cc8dd4b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwY2hpbGQlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjQ4NDg2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Parent et enfant"
                className="rounded-3xl shadow-2xl w-full object-cover border-8 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final - Version Fun */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500" />
        <FloatingShapes />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6">
              Prêt pour l'Aventure ? 🚀
            </h2>
            <p className="text-2xl mb-8 text-white/90">
              Rejoins des milliers d'enfants qui s'amusent et apprennent chaque jour !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-12 py-6 rounded-full text-2xl shadow-2xl hover:shadow-white/50 transition-all flex items-center justify-center gap-3"
              >
                <PlayCircle className="w-8 h-8" />
                Commencer à Jouer !
                <Rocket className="w-7 h-7" />
              </motion.button>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/90 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Sécurisé</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Amusant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Fun */}
      <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo className="w-12 h-12" />
                <span className="text-xl">ADHD Kids</span>
              </div>
              <p className="text-white/70">
                Apprendre en s'amusant ! 🎮✨
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg">Jeux 🎯</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Memory Magic</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pop Balloons</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Labyrinthe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg">Parents 👨‍👩‍👧</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Tableau de Bord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rapports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg">Aide 💡</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 ADHD Kids Platform - Fait avec ❤️ pour les enfants</p>
          </div>
        </div>
      </footer>
    </div>
  );
}