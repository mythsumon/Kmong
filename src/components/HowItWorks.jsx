import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Create an Account',
    description: 'Sign up in seconds and start your journey',
    icon: '👤'
  },
  {
    number: '02',
    title: 'Post or Offer Services',
    description: 'List your job or showcase your skills',
    icon: '📝'
  },
  {
    number: '03',
    title: 'Connect and Collaborate',
    description: 'Work together and achieve amazing results',
    icon: '🤝'
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#111111] mb-12 text-center"
        >
          How It Works
        </motion.h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <div className="text-sm text-primary font-semibold mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;



