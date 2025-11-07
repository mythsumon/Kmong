import { motion } from 'framer-motion';

const categories = [
  { name: 'Design', icon: '🧑‍🎨', color: 'from-purple-100 to-purple-50' },
  { name: 'Development', icon: '💻', color: 'from-blue-100 to-blue-50' },
  { name: 'Marketing', icon: '📱', color: 'from-pink-100 to-pink-50' },
  { name: 'Writing', icon: '✍️', color: 'from-yellow-100 to-yellow-50' },
  { name: 'Video & Motion', icon: '🎥', color: 'from-red-100 to-red-50' },
  { name: 'Translation', icon: '🌍', color: 'from-green-100 to-green-50' },
  { name: 'Business', icon: '💼', color: 'from-indigo-100 to-indigo-50' },
  { name: 'Consulting', icon: '📊', color: 'from-teal-100 to-teal-50' },
];

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="bg-gradient-to-br from-[#f9f9f9] to-white rounded-2xl p-6 hover-lift border border-gray-line">
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="font-semibold text-[#111111]">{category.name}</h3>
      </div>
    </motion.div>
  );
};

const SearchAndCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="What service are you looking for?"
              className="w-full pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-line focus:border-primary focus:outline-none transition-colors shadow-sm"
            />
          </div>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchAndCategories;







