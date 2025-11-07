import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Landing pages, responsive sites, CMS themes',
    icon: '🌐',
    tags: ['Landing Page', 'Responsive', 'CMS', 'WordPress', 'Webflow'],
    iconSvg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    meta: {
      jobsToday: '145',
      avgBudget: '$500',
      topSkill: 'Figma'
    }
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Wireframes, prototypes, design systems',
    icon: '🎨',
    tags: ['Wireframe', 'Prototype', 'Design System', 'Figma', 'Usability'],
    iconSvg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    meta: {
      jobsToday: '203',
      avgBudget: '$650',
      topSkill: 'Figma'
    }
  },
  {
    id: 3,
    title: 'Databases',
    description: 'Schema design, optimization, migration',
    icon: '🗄️',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Optimization', 'Migration'],
    iconSvg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    meta: {
      jobsToday: '89',
      avgBudget: '$850',
      topSkill: 'MySQL'
    }
  },
  {
    id: 4,
    title: 'Business Cards',
    description: 'Premium layouts, print-ready files',
    icon: '💼',
    tags: ['Print-ready', 'Premium', 'Minimal', 'Foil', 'Brand set'],
    iconSvg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    meta: {
      jobsToday: '67',
      avgBudget: '$150',
      topSkill: 'InDesign'
    }
  },
  {
    id: 5,
    title: 'Logo Design',
    description: 'Brand marks, logotypes, guidelines',
    icon: '✨',
    tags: ['Wordmark', 'Icon mark', 'Guidelines', 'Rebrand', 'Vector'],
    iconSvg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    meta: {
      jobsToday: '178',
      avgBudget: '$300',
      topSkill: 'Illustrator'
    }
  },
  {
    id: 6,
    title: 'Frontend Dev',
    description: 'React/Next, Vue, Tailwind, accessibility',
    icon: '💻',
    tags: ['React/Next', 'Vue', 'Tailwind', 'TypeScript', 'Accessibility'],
    iconSvg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    meta: {
      jobsToday: '312',
      avgBudget: '$900',
      topSkill: 'React'
    }
  },
];

const CategoryTagChip = ({ tag, category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-7 px-3 rounded-full text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2 ${
        isActive
          ? 'bg-[#F7941D] text-white hover:bg-[#E57C00]'
          : 'bg-[rgba(247,148,29,0.12)] text-[#2D2D2D] border border-[rgba(247,148,29,0.2)] hover:border-[#F7941D] hover:bg-[rgba(247,148,29,0.18)]'
      }`}
      aria-label={`Filter by ${tag} in ${category}`}
    >
      {tag}
    </button>
  );
};

const CategoryCard = ({ category, index, activeTag, onTagClick }) => {
  const maxVisibleTags = 3;
  const visibleTags = category.tags.slice(0, maxVisibleTags);
  const remainingTags = category.tags.length - maxVisibleTags;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group bg-white rounded-[20px] p-6 border border-gray-line hover-lift relative overflow-hidden"
      style={{
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Optional Thumbnail - Top Right */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7941D] to-[#E57C00] rounded-full blur-2xl" />
      </div>

      {/* Icon Badge */}
      <div className="relative z-10 mb-4">
        <div className="w-14 h-14 rounded-full bg-[rgba(247,148,29,0.1)] flex items-center justify-center group-hover:bg-[rgba(247,148,29,0.15)] transition-colors">
          <div className="text-[#F7941D] group-hover:text-[#E57C00] transition-colors">
            {category.iconSvg}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2 relative z-10 group-hover:underline group-hover:decoration-[#F7941D] group-hover:decoration-2 transition-all">
        {category.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 relative z-10 line-clamp-2">
        {category.description}
      </p>

      {/* Category Tags */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {visibleTags.map((tag) => (
          <CategoryTagChip
            key={tag}
            tag={tag}
            category={category.title}
            isActive={activeTag === tag}
            onClick={() => onTagClick(category.title, tag)}
          />
        ))}
        {remainingTags > 0 && (
          <button
            className="h-7 px-3 rounded-full text-xs font-semibold bg-[rgba(247,148,29,0.12)] text-[#2D2D2D] border border-[rgba(247,148,29,0.2)] hover:border-[#F7941D] hover:bg-[rgba(247,148,29,0.18)] transition-all focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2"
            aria-label={`Show ${remainingTags} more tags`}
          >
            +{remainingTags} more
          </button>
        )}
      </div>

      {/* Meta Chips */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        <span className="px-2 py-1 text-xs rounded-full bg-[rgba(127,244,66,0.12)] border border-[rgba(60,164,29,0.15)] text-gray-700">
          {category.meta.jobsToday} jobs today
        </span>
        <span className="px-2 py-1 text-xs rounded-full bg-[rgba(127,244,66,0.12)] border border-[rgba(60,164,29,0.15)] text-gray-700">
          Avg. {category.meta.avgBudget}
        </span>
        <span className="px-2 py-1 text-xs rounded-full bg-[rgba(127,244,66,0.12)] border border-[rgba(60,164,29,0.15)] text-gray-700">
          {category.meta.topSkill}
        </span>
      </div>

      {/* CTA Row */}
      <div className="flex items-center justify-between gap-4 relative z-10">
        <motion.button
          className="px-4 py-2 bg-[#F7941D] text-white rounded-lg text-sm font-medium hover:bg-[#E57C00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Browse
        </motion.button>
        <a
          href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-gray-600 hover:text-[#F7941D] transition-colors underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2 rounded"
        >
          Top freelancers →
        </a>
      </div>
    </motion.div>
  );
};

const CategoriesSection = () => {
  // tag filter (from previous step) still supported
  const [activeTag, setActiveTag] = useState('');

  // Category chip list per spec
  const chips = useMemo(
    () => [
      'All',
      'Web Design',
      'UI/UX Design',
      'Databases',
      'Business Cards',
      'Logo Design',
      'Frontend Dev',
    ],
    [],
  );

  // Helpers
  const slugify = (label) =>
    label
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const chipButtonsRef = useRef([]);
  const [activeCategory, setActiveCategory] = useState('All');

  // Read from URL on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('cat');
    if (catParam) {
      const found = chips.find((c) => slugify(c) === catParam);
      if (found) setActiveCategory(found);
    }
  }, [chips]);

  // Handle chip click and URL sync
  const onChipClick = (label) => {
    setActiveCategory(label);
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (label === 'All') {
        params.delete('cat');
      } else {
        params.set('cat', slugify(label));
      }
      const url = `${window.location.pathname}?${params.toString()}`.replace(/\?$/, '');
      window.history.pushState({}, '', url);
    }
  };

  // Keyboard navigation across chips
  const onChipKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (index + 1) % chips.length;
      chipButtonsRef.current[next]?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (index - 1 + chips.length) % chips.length;
      chipButtonsRef.current[prev]?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onChipClick(chips[index]);
    }
  };

  // Update URL when tag chip clicked (existing behavior)
  const handleTagClick = (category, tag) => {
    const categorySlug = category.replace(/\s+/g, '').replace('/', '');
    const tagEncoded = encodeURIComponent(tag);
    
    setActiveTag(tag);
    
    // Update URL query params
    const newParams = new URLSearchParams();
    newParams.set('category', categorySlug);
    newParams.set('tag', tagEncoded);
    
    // Update browser URL without reload
    if (typeof window !== 'undefined') {
      window.history.pushState(
        {},
        '',
        `${window.location.pathname}?${newParams.toString()}`
      );
      setSearchParams({ category: categorySlug, tag: tag });
    }
  };

  // Filtered categories
  const filtered = useMemo(
    () =>
      categories.filter((c) => activeCategory === 'All' || c.title === activeCategory),
    [activeCategory],
  );

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#FFF4E5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Row */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4 sm:mb-0">
            Explore Categories
          </h2>
          <a
            href="#all-categories"
            className="text-base text-gray-600 hover:text-[#F7941D] transition-colors underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2 rounded"
          >
            View all →
          </a>
        </motion.div>

        {/* Category Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="relative mb-8"
        >
          {/* fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#FFF4E5] to-[#FFF4E5]/0" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#FFF4E5] to-[#FFF4E5]/0" />
          <div className="flex gap-2 overflow-x-auto no-scrollbar pr-2 -mr-2">
            {chips.map((label, i) => (
              <button
                key={label}
                ref={(el) => (chipButtonsRef.current[i] = el)}
                onKeyDown={(e) => onChipKeyDown(e, i)}
                onClick={() => onChipClick(label)}
                className={`h-9 px-4 rounded-full text-[13px] font-semibold border transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2 ${
                  activeCategory === label
                    ? 'bg-[#F7941D] text-white border-[#F7941D]'
                    : 'bg-[#F6F7F8] text-[#374151] border-[rgba(0,0,0,0.06)] hover:bg-[rgba(247,148,29,0.12)] hover:border-[rgba(247,148,29,0.3)]'
                }`}
                aria-pressed={activeCategory === label}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {filtered.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              activeTag={activeTag}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
