<motion.div
  className="w-full md:w-1/3 flex flex-col items-end"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, delay: 1 }}
>
  {/* Enlarged Image */}
  <div className="w-[15rem] h-[15rem] relative overflow-hidden rounded-full">
    <Image
      src="https://raw.githubusercontent.com/krytigx/Portfolio_images/refs/heads/main/place_holder.jpg"
      alt="kryptigx"
      fill
      className="object-cover"
    />
  </div>

  {/* Description aligned under 'R' in GARG */}
  <motion.p
    className="text-lg md:text-4xl leading-relaxed mt-[calc(12rem/2)] md:pl-[5rem] text-right"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 1.2 }}
  >
    Hello, I'm a freelancer specializing in minimal design with 10 years of expertise — based in Tokyo, working remote. Let's create!
  </motion.p>
</motion.div>
