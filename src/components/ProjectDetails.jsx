import { motion } from "framer-motion";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-[140] flex items-start sm:items-center justify-center w-full h-full p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm"
      onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden max-h-[calc(100dvh-1.5rem)] sm:max-h-[90vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-3 right-3 sm:top-5 sm:right-5 bg-midnight hover:bg-gray-500 z-10"
          aria-label="Close project details"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full max-h-[40vh] object-cover rounded-t-2xl" />
        <div className="p-4 sm:p-5 flex-1 min-h-0 overflow-y-auto">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 text-sm sm:text-base font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 text-sm sm:text-base font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-8 sm:size-10 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
