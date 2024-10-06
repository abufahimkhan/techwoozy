import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top z-40 rounded-lg border border-white bg-custom-dark p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark"
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-[5px]">
        <Image
          src={icon}
          layout="responsive"
          width={240}
          height={140}
          alt={title}
          className="h-auto w-full object-cover"
        />
      </div>
      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-white xl:text-itemtitle">
        {title}
      </h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default SingleFeature;
