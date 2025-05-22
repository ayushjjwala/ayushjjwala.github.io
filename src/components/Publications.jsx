import { motion } from 'framer-motion';
import { FaBook, FaExternalLinkAlt, FaQuoteRight } from 'react-icons/fa';

const publications = [
  {
    title: "Structural Mapping of the Base Stacks Containing Post-transcriptionally Modified Bases in RNA",
    authors: "Ali Z, Kaur S, Kukhta T, Abu-Saleh AAA, Jhunjhunwala A, et al.",
    journal: "Journal of Physical Chemistry B",
    type: "Journal Article",
    year: "2023",
    link: "https://pubs.acs.org/doi/10.1021/acs.jpcb.3c02268"
  },
  {
    title: "Occurrence and classification of T-shaped interactions between nucleobases in RNA structures",
    authors: "Ali Z, Kukhta T, Jhunjhunwala A, Trant JF, Sharma P",
    journal: "RNA Journal (Cold Spring Harbor Laboratory)",
    type: "Journal Article",
    year: "2023",
    link: "https://rnajournal.cshlp.org/content/29/8/1215.short"
  },
  {
    title: "Structural and Energetic Features of Base–Base Stacking Contacts in RNA",
    authors: "Ali Z, Goyal A, Jhunjhunwala A, et al.",
    journal: "Journal of Chemical Information and Modeling",
    type: "Journal Article",
    year: "2022",
    link: "https://pubs.acs.org/doi/10.1021/acs.jcim.2c01116"
  },
  {
    title: "On the Nature of Nucleobase Stacking in RNA: A Comprehensive Survey of Its Structural Variability and a Systematic Classification of Associated Interactions",
    authors: "Jhunjhunwala A, Ali Z, Bhattacharya S, Halder A, Sharma P",
    journal: "Journal of Chemical Information and Modeling",
    type: "Journal Article",
    year: "2021",
    link: "https://pubs.acs.org/doi/abs/10.1021/acs.jcim.0c01225"
  },
  {
    title: "Occurrences of protonated base triples in RNA are determined by their cooperative binding energies and specific functional requirements",
    authors: "Halder A, Jhunjhunwala A, Bhattacharyya D, Mitra M",
    journal: "bioRxiv",
    type: "Preprint",
    year: "2021",
    link: "https://www.biorxiv.org/content/10.1101/2021.01.10.426061v1.abstract"
  },
  {
    title: "A Comprehensive Survey on the Nature of Ring:Ring Nucleobase Stacking Interactions in RNA",
    authors: "Jhunjhunwala A, Ali Z, Bhattacharya S, Halder A, et al.",
    journal: "bioRxiv",
    type: "Preprint",
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

export default function Publications() {
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

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <p className="text-gray-700 mb-3 italic">{pub.authors}</p>
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
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors ml-auto hover:underline"
                    >
                      View Publication
                      <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
