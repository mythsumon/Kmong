import { motion } from 'framer-motion';

const jobs = [
  {
    id: 1,
    title: 'Need Website Redesign for E-commerce Store',
    category: 'Design',
    country: '🇺🇸',
    price: '$1,500 - $3,000',
    dueDate: 'Due in 7 days',
    posted: '2 hours ago'
  },
  {
    id: 2,
    title: 'Mobile App Development - React Native',
    category: 'Development',
    country: '🇬🇧',
    price: '$5,000 - $10,000',
    dueDate: 'Due in 14 days',
    posted: '5 hours ago'
  },
  {
    id: 3,
    title: 'Social Media Content Creation',
    category: 'Marketing',
    country: '🇨🇦',
    price: '$500 - $1,000',
    dueDate: 'Due in 5 days',
    posted: '1 day ago'
  },
  {
    id: 4,
    title: 'Technical Documentation Writing',
    category: 'Writing',
    country: '🇦🇺',
    price: '$800 - $1,500',
    dueDate: 'Due in 10 days',
    posted: '2 days ago'
  },
  {
    id: 5,
    title: 'Product Launch Video Production',
    category: 'Video',
    country: '🇩🇪',
    price: '$2,000 - $4,000',
    dueDate: 'Due in 21 days',
    posted: '3 days ago'
  },
];

const JobCard = ({ job, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 border border-gray-line hover-lift"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-[#111111] mb-2">{job.title}</h3>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="bg-gray-100 px-2 py-1 rounded">{job.category}</span>
            <span>{job.country}</span>
            <span>{job.posted}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-line">
        <div>
          <div className="text-lg font-bold text-primary">{job.price}</div>
          <div className="text-sm text-gray-600">{job.dueDate}</div>
        </div>
        <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors">
          Apply
        </button>
      </div>
    </motion.div>
  );
};

const LiveJobs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#111111] mb-8 text-center"
        >
          Latest Job Requests
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveJobs;







