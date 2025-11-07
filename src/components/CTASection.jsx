import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section 
      className="py-20"
      style={{
        background: 'linear-gradient(120deg, #F9A825 0%, #E57C00 50%, #B85A00 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join thousands of freelancers and clients worldwide.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey today and connect with professionals from around the globe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Hiring
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join as Freelancer
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;





