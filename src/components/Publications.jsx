import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBook, FaExternalLinkAlt, FaQuoteRight, FaChevronDown, FaChevronUp, FaEye } from 'react-icons/fa';

const publications = [
  {
    title: "Structural Mapping of the Base Stacks Containing Post-transcriptionally Modified Bases in RNA",
    authors: "Ali Z, Kaur S, Kukhta T, Abu-Saleh AAA, Jhunjhunwala A, et al.",
    journal: "ACS Publications",
    type: "Journal Article",
    year: "2023",
    link: "https://pubs.acs.org/doi/10.1021/acs.jpcb.3c02268"
  },
  {
    title: "Occurrence and classification of T-shaped interactions between nucleobases in RNA structures",
    authors: "Ali Z, Kukhta T, Jhunjhunwala A, Trant JF, Sharma P",
    journal: "RNA Journal",
    type: "Journal Article",
    year: "2023",
    link: "https://rnajournal.cshlp.org/content/29/8/1215.short"
  },
  {
    title: "Structural and Energetic Features of Base–Base Stacking Contacts in RNA",
    authors: "Ali Z, Goyal A, Jhunjhunwala A, et al.",
    journal: "ACS Publications",
    type: "Journal Article",
    year: "2022",
    link: "https://pubs.acs.org/doi/10.1021/acs.jcim.2c01116"
  },
  {
    title: "On the Nature of Nucleobase Stacking in RNA: A Comprehensive Survey of Its Structural Variability and a Systematic Classification of Associated Interactions",
    authors: "Jhunjhunwala A, Ali Z, Bhattacharya S, Halder A, Sharma P",
    journal: "ACS Publications",
    type: "Journal Article",
    year: "2021",
    link: "https://pubs.acs.org/doi/abs/10.1021/acs.jcim.0c01225"
  },
  {
    title: "Occurrences of protonated base triples in RNA are determined by their cooperative binding energies and specific functional requirements",
    authors: "Halder A, Jhunjhunwala A, Bhattacharyya D, Mitra M",
    journal: "bioRxiv",
    type: "Journal Article",
    year: "2021",
    link: "https://www.biorxiv.org/content/10.1101/2021.01.10.426061v1.abstract"
  },
  {
    title: "A Comprehensive Survey on the Nature of Ring:Ring Nucleobase Stacking Interactions in RNA",
    authors: "Jhunjhunwala A, Ali Z, Bhattacharya S, Halder A, et al.",
    journal: "bioRxiv",
    type: "Journal Article",
    year: "2020",
    link: "https://www.biorxiv.org/content/10.1101/2020.02.28.970798v1.abstract"
  },
  {
    title: "Going beyond base-pairs: topology-based characterization of base-multiplets in RNA",
    authors: "Bhattacharya S, Jhunjhunwala A, Halder A, et al.",
    journal: "RNA Journal",
    type: "Journal Article",
    year: "2019",
    link: "https://rnajournal.cshlp.org/content/25/5/573.short"
  }
];

// Sort publications by year in descending order
const sortedPublications = [...publications].sort((a, b) => b.year - a.year);
const INITIAL_DISPLAY_COUNT = 3;

export default function Publications() {
  const [showAll, setShowAll] = useState(false);
  
  // Reset showAll state when user navigates away
  useEffect(() => {
    const handleScroll = () => {
      const publicationsSection = document.getElementById('publications');
      if (publicationsSection) {
        const rect = publicationsSection.getBoundingClientRect();
        // If publications section is not visible and showAll is true, collapse it
        if ((rect.bottom < 0 || rect.top > window.innerHeight) && showAll) {
          setShowAll(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAll]);

  const displayedPublications = showAll 
    ? sortedPublications 
    : sortedPublications.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-lg text-gray-600">Research contributions in RNA structure analysis and bioinformatics</p>
        </motion.div>

        <div className="space-y-6">
          <AnimatePresence>
            {displayedPublications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {pub.type === "Journal Article" ? (
                      <FaBook className="text-blue-600 w-6 h-6" />
                    ) : (
                      <FaQuoteRight className="text-green-600 w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-3 font-mono text-sm tracking-tight">
                      {pub.authors}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className={`px-3 py-1 rounded-full ${
                        pub.type === "Journal Article" 
                          ? "bg-blue-100 text-blue-800" 
                          : "bg-green-100 text-green-800"
                      }`}>
                        {pub.journal}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {pub.year}
                      </span>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Publication"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors ml-auto p-2 hover:bg-blue-50 rounded-full"
                      >
                        <FaEye className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {sortedPublications.length > INITIAL_DISPLAY_COUNT && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
              >
                {showAll ? (
                  <>
                    Show Less
                    <FaChevronUp className="ml-2" />
                  </>
                ) : (
                  <>
                    Show More
                    <FaChevronDown className="ml-2" />
                  </>
                )}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
