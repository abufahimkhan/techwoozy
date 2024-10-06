"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutDM from "./aboutdm";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden py-20 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
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
              className="animate_left relative aspect-[588/400.5] w-full md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.jpg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.jpg"
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
              className="animate_right w-full md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Tech Woozy LLC
                </span>{" "}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                A Complete Solution for
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  IT Support Training and Placement
                </span>
              </h2>
              <p>
                Our comprehensive software support & digital marketing solutions
                ensure your operations run smoothly and efficiently, enhancing
                overall performance.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle4 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle4 mb-0.5 text-black dark:text-white">
                    Software Development-(Web & Mobile Frameworks)
                  </h3>
                  <p className="text-xs">
                    TechWoozy LLC excels in leveraging JavaScript/TypeScript
                    frameworks like React, Angular, and Vue, alongside native
                    authentication tools, to integrate RESTful APIs and develop
                    custom APIs. Proficient in Figma for efficient design
                    workflows, our expertise extends to various languages and
                    modern web/mobile technologies for scalable solutions, with
                    a strong foundation in data structures and algorithms.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle4 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle4 mb-0.5 text-black dark:text-white">
                    Software Testing
                  </h3>
                  <p className="text-xs">
                    Techwoozy LLC excels in software testing, offering expertise
                    in web and mobile testing tools like Selenium WebDriver and
                    Appium. We cover Agile/Scrum and SDLC/STLC processes,
                    delivering quality assurance across various testing types,
                    from smoke and regression testing to performance and user
                    acceptance testing processes and various testing types,
                    ensuring top-notch quality assurance for your projects.
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
                    IT Training and Placement
                  </h3>
                  <p className="text-xs">
                    Embark on a career journey with TechWoozy LLC's IT Training
                    and Placement program. Master web and mobile testing,
                    automation frameworks, and programming languages like Java
                    and Python. Gain hands-on experience with tools like
                    Selenium WebDriver and Jenkins, and unlock job opportunities
                    abroad. Join us to accelerate your IT career today!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
      <AboutDM />
      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-full md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Launch Your Business Fast
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Packed with All Essential{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  Integrations
                </span>
              </h2>
              <p>
                TechWoozy LLC offers comprehensive solutions, from software
                development to digital marketing, ensuring seamless operations
                and accelerated growth. Our integrated tools and expert guidance
                empower your business to scale efficiently and achieve
                unparalleled success. Follow us for full roadmap to growth.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto aspect-[588/400.5] w-full md:w-1/2"
            >
              <Image
                src="/images/about/about-light-02.jpg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.jpg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
