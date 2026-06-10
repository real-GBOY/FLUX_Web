import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  Dumbbell,
  Flame,
  Target,
  Timer,
  Users,
  Zap,
  ChevronRight,
  Play,
  Menu,
  X,
  ArrowRight,
  Star,
  Check,
} from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-flux-black text-flux-text overflow-x-hidden">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <motion.div style={{ opacity: heroOpacity }}>
        <HeroSection ref={heroRef} />
      </motion.div>
      <StatsSection />
      <FeaturesSection />
      <ProgramsSection />
      <TrainersSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Navigation({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-flux-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-flux-accent rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-flux-black" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            FLUX<span className="text-flux-accent">.</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Programs', 'Trainers', 'Pricing', 'About'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              href={`#${item.toLowerCase()}`}
              className="text-flux-muted hover:text-flux-accent transition-colors font-medium"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex bg-flux-accent text-flux-black px-6 py-2.5 rounded-full font-semibold hover:bg-flux-accentLight transition-colors"
        >
          Start Free Trial
        </motion.button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-flux-text p-2"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-flux-darker border-t border-flux-light"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {['Home', 'Programs', 'Trainers', 'Pricing', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-flux-muted hover:text-flux-accent transition-colors font-medium py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-flux-accent text-flux-black px-6 py-3 rounded-full font-semibold w-full mt-2">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function HeroSection(_props: unknown, ref: React.Ref<HTMLDivElement>) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-flux-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-flux-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-flux-black via-transparent to-flux-black" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Hero image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Gym"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-flux-black via-flux-black/80 to-transparent" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center"
      >
        <div>
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-flux-gray px-4 py-2 rounded-full mb-6">
            <Flame className="w-4 h-4 text-flux-accent" />
            <span className="text-sm font-medium text-flux-muted">Transform Your Body</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
          >
            Unleash Your
            <br />
            <span className="text-gradient">Inner Strength</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-flux-muted max-w-xl mb-8 leading-relaxed"
          >
            Join FLUX and experience the future of fitness. Personalized training,
            expert coaches, and a community that pushes you beyond limits.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,136,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-flux-accent text-flux-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-flux-light text-flux-text px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:border-flux-accent hover:text-flux-accent transition-colors"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://images.pexels.com/photos/157${1000 + i}/pexels-photo-157${1000 + i}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                  alt="Member"
                  className="w-10 h-10 rounded-full border-2 border-flux-black object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-flux-accent">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-flux-muted">5,000+ Active Members</p>
            </div>
          </motion.div>
        </div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block relative"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-8 top-20 bg-flux-gray/80 backdrop-blur px-6 py-4 rounded-2xl border border-flux-light"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-flux-accent/20 rounded-full flex items-center justify-center">
                <Timer className="w-6 h-6 text-flux-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">45</p>
                <p className="text-sm text-flux-muted">Min Session</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-40 bg-flux-gray/80 backdrop-blur px-6 py-4 rounded-2xl border border-flux-light"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-flux-accent/20 rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6 text-flux-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">850</p>
                <p className="text-sm text-flux-muted">Cal/Hour</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [-5, 15, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-10 bottom-10 bg-flux-gray/80 backdrop-blur px-6 py-4 rounded-2xl border border-flux-light"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-flux-accent/20 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-flux-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-flux-muted">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-flux-muted flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-flux-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

const ForwardHeroSection = Object.forwardRef(HeroSection);

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Active Members', value: '5,000+', icon: Users },
    { label: 'Expert Trainers', value: '50+', icon: Dumbbell },
    { label: 'Workout Programs', value: '100+', icon: Target },
    { label: 'Success Stories', value: '10,000+', icon: Star },
  ];

  return (
    <section ref={ref} className="py-20 bg-flux-darker border-y border-flux-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-flux-accent mx-auto mb-3" />
              <motion.p
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 100 }}
                className="text-4xl lg:text-5xl font-black text-flux-text mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-flux-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Dumbbell,
      title: 'Modern Equipment',
      description: 'State-of-the-art machines and free weights for every fitness level.',
    },
    {
      icon: Timer,
      title: '24/7 Access',
      description: 'Work out on your schedule with round-the-clock gym access.',
    },
    {
      icon: Users,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified fitness professionals.',
    },
    {
      icon: Zap,
      title: 'HiT Classes',
      description: 'High-intensity group classes that push your limits.',
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Smart technology to monitor and celebrate your progress.',
    },
    {
      icon: Flame,
      title: 'Nutrition Plans',
      description: 'Custom meal plans designed for your fitness goals.',
    },
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-flux-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-flux-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6">
            Everything You Need to <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-flux-muted max-w-2xl mx-auto text-lg">
            From cutting-edge equipment to expert guidance, we provide all the tools
            for your transformation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-flux-gray p-8 rounded-2xl border border-flux-light hover:border-flux-accent/50 transition-all group"
            >
              <div className="w-14 h-14 bg-flux-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-flux-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-flux-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-flux-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      title: 'Strength Training',
      description: 'Build muscle, increase power, and sculpt your ideal physique.',
      duration: '12 weeks',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/1783897/pexels-photo-1783897.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Fat Burn',
      description: 'High-intensity workouts designed to maximize calorie burn.',
      duration: '8 weeks',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/9992699/pexels-photo-9992699.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Flexibility & Mobility',
      description: 'Enhance your range of motion and prevent injuries.',
      duration: '6 weeks',
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Functional Fitness',
      description: 'Train movements that improve everyday life performance.',
      duration: '10 weeks',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section ref={ref} id="programs" className="py-24 bg-flux-darker">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-flux-accent font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6">
            Find Your <span className="text-gradient">Perfect Program</span>
          </h2>
          <p className="text-flux-muted max-w-2xl mx-auto text-lg">
            Whether you're a beginner or a seasoned athlete, we have a program tailored for your goals.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program, i) => (
            <motion.button
              key={program.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveProgram(i)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeProgram === i
                  ? 'bg-flux-accent text-flux-black'
                  : 'bg-flux-gray text-flux-muted hover:text-flux-text'
              }`}
            >
              {program.title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <motion.img
                key={programs[activeProgram].image}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={programs[activeProgram].image}
                alt={programs[activeProgram].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-flux-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-3">
                  <span className="bg-flux-accent/20 text-flux-accent px-3 py-1 rounded-full text-sm font-medium">
                    {programs[activeProgram].duration}
                  </span>
                  <span className="bg-flux-gray text-flux-text px-3 py-1 rounded-full text-sm font-medium">
                    {programs[activeProgram].level}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <h3 className="text-3xl lg:text-4xl font-black mb-4">
                {programs[activeProgram].title}
              </h3>
              <p className="text-flux-muted text-lg mb-8 leading-relaxed">
                {programs[activeProgram].description}
              </p>

              <div className="space-y-4 mb-8">
                {['Personalized workout plan', 'Weekly check-ins with trainer', 'Progress tracking dashboard', 'Nutrition guidance included'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-flux-accent/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-flux-accent" />
                    </div>
                    <span className="text-flux-text">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-flux-accent text-flux-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 group"
              >
                Start This Program
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function TrainersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const trainers = [
    {
      name: 'Marcus Johnson',
      role: 'Strength Coach',
      image: 'https://images.pexels.com/photos/1681014/pexels-photo-1681014.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sarah Chen',
      role: 'HiT Specialist',
      image: 'https://images.pexels.com/photos/9992699/pexels-photo-9992699.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'James Rodriguez',
      role: 'Fitness Director',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Elena Petrova',
      role: 'Yoga Instructor',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section ref={ref} id="trainers" className="py-24 bg-flux-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-flux-accent font-semibold text-sm uppercase tracking-wider">Meet Our Team</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6">
            Expert <span className="text-gradient">Trainers</span>
          </h2>
          <p className="text-flux-muted max-w-2xl mx-auto text-lg">
            Our certified professionals are dedicated to helping you achieve your fitness goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[3/4]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-flux-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 border-2 border-flux-accent/0 group-hover:border-flux-accent/50 rounded-2xl transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
              <p className="text-flux-accent font-medium">{trainer.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: 'Michael Torres',
      role: 'Lost 50 lbs in 6 months',
      image: 'https://images.pexels.com/photos/1681014/pexels-photo-1681014.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'FLUX changed my life. The trainers pushed me beyond what I thought was possible, and the community kept me accountable.',
    },
    {
      name: 'Jessica Williams',
      role: 'Marathon Runner',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'The personalized training program helped me improve my marathon time by 15 minutes. Incredible facility and instructors.',
    },
    {
      name: 'David Park',
      role: 'Gained 20 lbs muscle',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Best investment I have made. The equipment, the atmosphere, the trainers - everything is top-notch.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={ref} className="py-24 bg-flux-darker">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-flux-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6">
            Real <span className="text-gradient">Results</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-flux-gray p-8 lg:p-12 rounded-3xl text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-flux-accent/30">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl lg:text-2xl text-flux-text mb-6 leading-relaxed italic">
                "{testimonials[active].quote}"
              </p>
              <h4 className="text-lg font-bold">{testimonials[active].name}</h4>
              <p className="text-flux-accent font-medium">{testimonials[active].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active ? 'bg-flux-accent w-8' : 'bg-flux-light'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const plans = [
    {
      name: 'Basic',
      price: '29',
      features: ['Gym access (6am-10pm)', 'Basic equipment usage', 'Locker room access', 'Free parking'],
      popular: false,
    },
    {
      name: 'Pro',
      price: '59',
      features: ['24/7 gym access', 'All Basic features', 'Group classes included', 'Personal training (2 sessions/mo)', 'Nutrition consultation'],
      popular: true,
    },
    {
      name: 'Elite',
      price: '99',
      features: ['All Pro features', 'Unlimited personal training', 'Custom meal plans', 'Priority booking', 'Recovery zone access', 'Guest passes (2/mo)'],
      popular: false,
    },
  ];

  return (
    <section ref={ref} id="pricing" className="py-24 bg-flux-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-flux-accent font-semibold text-sm uppercase tracking-wider">Membership</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-flux-muted max-w-2xl mx-auto text-lg">
            Flexible membership options designed to fit your lifestyle and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative bg-flux-gray p-8 rounded-3xl border ${
                plan.popular ? 'border-flux-accent' : 'border-flux-light'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-flux-accent text-flux-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className="text-flux-muted">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-flux-accent flex-shrink-0" />
                    <span className="text-flux-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-bold transition-colors ${
                  plan.popular
                    ? 'bg-flux-accent text-flux-black hover:bg-flux-accentLight'
                    : 'border border-flux-light text-flux-text hover:border-flux-accent hover:text-flux-accent'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-flux-darker relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-flux-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-flux-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl lg:text-6xl font-black mb-6">
          Ready to Start Your <span className="text-gradient">Transformation</span>?
        </h2>
        <p className="text-xl text-flux-muted mb-10 max-w-2xl mx-auto">
          Join FLUX today and get your first week free. No commitment, just results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0,255,136,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-flux-accent text-flux-black px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 group"
          >
            Claim Your Free Week
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-flux-light text-flux-text px-10 py-5 rounded-full font-semibold text-lg hover:border-flux-accent hover:text-flux-accent transition-colors"
          >
            Schedule a Tour
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-flux-black border-t border-flux-light py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-flux-accent rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-flux-black" />
              </div>
              <span className="text-2xl font-bold">
                FLUX<span className="text-flux-accent">.</span>
              </span>
            </div>
            <p className="text-flux-muted leading-relaxed">
              Transform your body, transform your life. Join the fitness revolution today.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Programs', 'Trainers', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-flux-muted hover:text-flux-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-3">
              {['Strength Training', 'HiT Classes', 'Yoga & Mobility', 'Personal Training', 'Nutrition'].map((link) => (
                <li key={link}>
                  <a href="#programs" className="text-flux-muted hover:text-flux-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-flux-muted">
              <li>123 Fitness Street</li>
              <li>Los Angeles, CA 90001</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-flux-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@fluxgym.com" className="hover:text-flux-accent transition-colors">
                  info@fluxgym.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-flux-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-flux-muted text-sm">
            2024 FLUX. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-flux-muted text-sm hover:text-flux-accent transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
