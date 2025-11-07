import { motion } from 'framer-motion';

const BannerAds = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Ad Space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl p-8 border border-gray-line text-center">
            <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400">Advertisement Banner (970x250)</span>
            </div>
            <p className="text-sm text-gray-500">Partner with us • Reach global freelancers</p>
          </div>
        </motion.div>

        {/* Promote Your Service CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Promote Your Service</h3>
          <p className="mb-6 opacity-90">Get featured at the top and reach more clients</p>
          <motion.button
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerAds;







