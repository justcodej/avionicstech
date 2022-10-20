import Head from 'next/head'
import Image from 'next/image'
import { useLayoutEffect, useFrame, useRect } from '@studio-freight/hamo'
import Lenis from '@studio-freight/lenis'
import { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'

import 'swiper/css'

export default function Home() {
  const [lenis, setLenis] = useState()
  const [index, setIndex] = useState()
  const [active, setActive] = useState()
  const [data, setData] = useState({})

  const onMouseEnter = (e, index) => {
    e.stopPropagation()
    setIndex(index)
  }

  const onMouseLeave = () => {
    setIndex(-1)
  }

  const handleClickItem = (e, index) => {
    e.stopPropagation()
    setActive(index)
  }
  
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    setLenis(lenis)

    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  const reset = () => {
    setIndex(-1)
    setActive(-1)
  }
  
  useEffect(() => {
    const request = async () => {
      const baseUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://http://47.92.112.138/:3000'
      const res = await fetch(`${baseUrl}/api/lighlights`)
      const data = await res.json()
      setData(data)
    }
    request()
  }, [])

  useEffect(() => {
    document.addEventListener('click', reset, false)
    
    return () => {
      document.removeEventListener('click', reset)
    }
  }, [])

  useFrame((time) => {
    lenis?.raf(time)
  }, [])

  return (
    <div className='container'>
      <Head>
        <title>Avionicstech - 2022上海国际航电技术大会</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <nav className='menu'>
          <div className='rest-text'>Avionicstech</div>
          <ul className='menu-list'>
            <li className='menu-item'><a href="#首页">首页</a></li>
            <li className='menu-item'><a href="#关于大会">关于大会</a></li>
            <li className='menu-item'><a href="#会议一览">会议一览</a></li>
            <li className='menu-item'><a href="#会议内容">会议内容</a></li>
            <li className='menu-item'><a href="#合作单位">合作单位</a></li>
          </ul>
        </nav>
        <section className="banner">
          <Swiper
            autoplay
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <video src='https://turbineengine.com/wp-content/uploads/2018/03/headervideo1.mp4' className='slide-video' loop autoPlay muted></video>
              <div className='video-container'>
                <div className="middle">
                  <h2 className='title'>2022上海国际航电技术大会</h2>
                  <p className='subtitle'>创新变革，推动先进航电技术</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img-container together'>
                <h2 className='title'>与决策者共同学习，协同研发创新</h2>
                <p className='subtitle'>300+ 参会</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img-container up'>
                <h2 className='title'>全球领先平台，探索新增长</h2>
                <p className='subtitle'>产业链上下游企业汇聚，智慧通航创新赋能 破局发展</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='img-container only'>
                <h2 className='title'>三大主题专场</h2>
                <p className='subtitle'>民航客机先进航电系统、通用飞机驾驶舱系统、eVTOL自主飞行系统</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className='about'>
          <div className="container">
            <p className='city'>中国 · 上海</p>
            <p className='date'>2022年12月14-15日</p>
          </div>
        </section>
        <section className='introduction'>
          <div className="container">
            <div className='img'><Image layout='fill' src="/images/yEODPDap2r.jpg" objectFit='cover' alt="" /></div>
            <div className="info">
              <p className='title'>驾驶舱系统、软件开发、机载MRO、通用飞机航电系统、Evtol飞控技术</p>
              <p className='desc'>在科技创新背景下，ATC2022将聚焦数字技术在航空电子领域的未来发展，本届大会主题：“创新变革、推动先进航电技术”。深入探讨航电、机电、飞控、软件等技术前沿，将围绕模块综合化航空电子系统、先进民航驾驶舱集成、通用飞机座舱系统、软件赋能驱动等内容展开交流。</p>
            </div>
          </div>
        </section>
        <section className='blinds'>
          <div className="title">会议亮点 HIGHLIGHTS</div>
          <ul className='blinds-list' onMouseLeave={onMouseLeave}>
            {
              data.data?.map((item, i) => (
                <li
                  className={classNames('blinds-item', { 'hover': index === i }, { 'active': active === i })}
                  key={item.text}
                  onMouseEnter={(e) => onMouseEnter(e, i)}
                  onClick={(e) => handleClickItem(e, i)}
                >
                  <div className='background'>
                    <Image layout='fill' src={item.img} objectFit='cover' alt='' />
                  </div>
                  <div className="info">
                    <p className='count'><CountUp end={item.end} duration={item.duration} />+</p>
                    {
                      active === i &&
                      <>
                        <p className='text'>{item.text}</p>
                        {item.en && <p className='en'>{item.en}</p>}
                      </>
                    }
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </main>
    </div>
  )
}

// export const getStaticProps = async (context) => {
//   const baseUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000'
//   const res = await fetch(`${baseUrl}/api/lighlights`)
//   const data = await res.json()
//   return {
//     props: {
//       data
//     }
//   }
// }