import {motion} from 'framer-motion'

function App() {
  const borderWidth = {
    hidden:{
      width:0
    },
    show:{
      width:"100%",
      transition:{
        duration:1.4,
        ease:'easeIn'
      }
    }
  }
  const borderHeight = {
    hidden:{
      height:0
    },
    show:{
      height:"100%",
      transition:{
        duration:1.4,
        ease:'easeIn'
      }
    }
  }

  const textAnimate = {
    hidden: {
    },
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1.5,
      },
    },
  }
  const textAnimateChildren = {
    hidden: {
      y: "-180%",
    },
    show: {
      y: 0,
      transition: {
        ease: 'easeOut',
      },
    },
  }
  const imgAnimate = {
    hidden: {
    },
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 2.9,
      },
    },
  }
  const imgAnimateChildren = {
    hidden: {
      y: "230%",
    },
    show: {
      y: 0,
      transition: {
        ease: 'easeOut',
      },
    },
  }

  const navAnimate = {
    hidden: {
    },
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 4.6,
      },
    },
  }
  const navAnimateChildren = {
    hidden: {
      y: -50,
    },
    show: {
      y: 0,
      transition: {
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className='h-screen overflow-hidden'>
      <nav className="px-8 py-[10px] w-full bg-[#f24c3d] relative z-50">
        <motion.ul
          variants={navAnimate}
          initial="hidden"
          animate="show"
          className="flex justify-between items-center">
          <motion.li variants={navAnimateChildren}><a href="#" className="font-bold text-2xl text-[#f9d949]">Art-</a></motion.li>
          <motion.div variants={navAnimateChildren} className="flex space-x-5">
            <li><a href="#">How we</a></li>
            <li><a href="#">Our Arts</a></li>
            <li><a href="#">Tools</a></li>
            <li><a href="#">Paint</a></li>
          </motion.div>
          <motion.li variants={navAnimateChildren}><a href="#">contact</a></motion.li>
        </motion.ul>
      </nav>
      <motion.div
        variants={borderWidth}
        initial="hidden"
        animate="show"
        className="bg-[#242424] h-[2px] w-full" />
      <section className="px-8 relative h-full bg-[#22A699]">
        <motion.div
          variants={borderHeight}
          initial="hidden"
          animate="show"
          className="w-[2px] h-[calc(100vh-55px)] bg-[#242424] absolute top-0 left-8" />
        <motion.div
          variants={textAnimate}
          initial="hidden"
          animate="show"
          className="px-2 space-x-8 flex font-BowlbyOne relative z-10 selection:bg-[#F29727]">
          <motion.p className="text-8xl" variants={textAnimateChildren} >Hello.</motion.p>
          <motion.p className="text-8xl" variants={textAnimateChildren} >Bonjour.</motion.p>
          <motion.p className="text-8xl" variants={textAnimateChildren} >Ciao.</motion.p>
        </motion.div>
        <motion.div
          variants={borderHeight}
          initial="hidden"
          animate="show"
          className="w-[2px] h-[calc(100vh-55px)] bg-[#242424] absolute top-0 right-8" />
        <motion.div
          variants={imgAnimate}
          initial="hidden"
          animate="show"
          className="py-2 h-[505px] relative grid grid-cols-2">
          <motion.img src="/img/1.webp" alt="painting" className="w-[400px] absolute left-2 top-4" variants={imgAnimateChildren}/>
          <motion.img src="/img/2.webp" alt="painting" className="w-[400px] absolute right-[220px] top-[20px]" variants={imgAnimateChildren}/>
          <motion.img src="/img/3.webp" alt="painting" className="w-[250px] absolute left-[420px] bottom-2" variants={imgAnimateChildren}/>
          <motion.img src="/img/4.webp" alt="painting" className="w-[200px] absolute right-4 bottom-4" variants={imgAnimateChildren}/>
        </motion.div>
      </section>
    </div>
  )
}

export default App
