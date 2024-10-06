"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutDM = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse lg:gap-32.5">
            <motion.div
             variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left h-[75%] relative aspect-[588/400.5] w-full md:w-1/2"
          >
              <Image
                src="/images/about/dm-light-01.jpg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/dm-dark-01.jpg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Marketing & Designing
                {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                 
                </span> */}
              </h2>
              <p>
                We also provide digital marketing solutions, and graphic design
                services ensure your operations run smoothly and efficiently,
                enhancing overall performance.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle4 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle4 mb-0.5 text-black dark:text-white">
                    Digital Marketing
                  </h3>
                  <p className="text-xs">
                    TechWoozy LLC is dedicated to innovation and seamless
                    operations. Our experienced team specializes in tailored
                    software support and digital marketing solutions. Leveraging
                    top marketing tools, including email marketing, social
                    media, analytics, CRM, website testing, lead capture, and
                    SEO, we ensure success in the digital landscape.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle4 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle4 mb-0.5 text-black dark:text-white">
                    Graphics Design & UI/UX Design
                  </h3>
                  <p className="text-xs">
                    Techwoozy LLC provides exceptional Graphic Design & UI/UX
                    Design services, crafting captivating visuals and
                    user-friendly interfaces. With expertise in Canva,
                    Photoshop, After Effects, Illustrator, and Figma, from
                    branding, developing differernt projects content to social
                    media graphics, we ensure high-quality output identity
                    across various platforms.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle4 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle4 mb-0.5 text-black dark:text-white">
                    Content Writing
                  </h3>
                  <p className="text-xs">
                    We excel in crafting engaging blog posts, captivating
                    multimedia content, and eye-catching banner designs to
                    elevate your brand's online presence. Our content research
                    leverages free tools like HubSpot AI Content Writer, Ahrefs’
                    Keyword Generator, Google Trends, and Google Search Console,
                    ensuring top-notch quality and relevance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}


    </>
  );
};

export default AboutDM;
