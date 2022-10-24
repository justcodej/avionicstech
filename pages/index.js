import Head from 'next/head'
import Image from 'next/image'
import { useLayoutEffect, useFrame, useRect } from '@studio-freight/hamo'
import Lenis from '@studio-freight/lenis'
import { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'

import 'swiper/css'

const data = [
  {
    img: '/images/SAF2017_0222576.jpeg',
    end: 300,
    duration: 6,
    text: '航空航天行业参会代表',
  },
  {
    img: '/images/SAF2019_0317645.jpg',
    end: 180,
    duration: 6,
    text: '参会企业',
    en: 'Companies'
  },
  {
    img: '/images/SAF2016_0195680.jpg',
    end: 35,
    duration: 3,
    text: '智能航电主题演讲',
    en: 'Keynote Speaker Presentations'
  },
  {
    img: '/images/SAF2017_0238493.jpg',
    end: 20,
    duration: 2,
    text: '航电技术演示',
    en: 'Technical Presentations'
  },
  {
    img: '/images/SAF2019_0333382.jpg',
    end: 160,
    duration: 6,
    text: '卓越技术高工代表',
  },
  {
    img: '/images/download.jpg',
    end: 20,
    duration: 2,
    text: '行业热点话题',
  },
  {
    img: '/images/Slider1-Turbo-Engine-Solutions.jpg',
    end: 2,
    duration: 1,
    text: '2天航电全产业链盛会',
  },
]

export default function Home() {
  const [lenis, setLenis] = useState()
  const [index, setIndex] = useState()
  const [active, setActive] = useState()

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
            <div className='img'></div>
            <div className="info">
              <p className='title'>未来航电</p>
              <p className='desc'>在科技创新背景下，ATC2022将聚焦数字技术在航空电子领域的未来发展，本届大会主题：“创新变革、推动先进航电技术”。深入探讨航电、机电、飞控、软件等技术前沿，将围绕模块综合化航空电子系统、先进民航驾驶舱集成、通用飞机座舱系统、软件赋能驱动等内容展开交流。</p>
            </div>
          </div>
        </section>
        <section className='blinds'>
          <div className="title">会议亮点 HIGHLIGHTS</div>
          <div className="container">
            <ul className='blinds-list' onMouseLeave={onMouseLeave}>
              {
                data.map((item, i) => (
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
                      <p className='count'><CountUp end={item.end} duration={item.duration} /> +</p>
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
          </div>
        </section>
        <section className="schedule">
          <div className="title">大会议程 meeting schedule</div>
          <div className="container">
            <Swiper className='schedule-list' slidesPerView={2} spaceBetween={20}>
              <SwiperSlide className='schedule-item'>
                <div className="date">12.15 am</div>
                <div className="title">未来航电论坛</div>
                <ol className='schedule-item-ol'>
                  <li className='schedule-item-li'>大型客机对机载系统的应用与技术需求</li>
                  <li className='schedule-item-li'>通航航电系统新机遇</li>
                  <li className='schedule-item-li'>航空电子互连网络的顶层设计架构与验证方案</li>
                  <li className='schedule-item-li'>航空运输业全球化对未来航电新的挑战机遇</li>
                  <li className='schedule-item-li'>绿色航电安全、高效、智能、先进航电技术</li>
                  <li className='schedule-item-li'>综合模块化航空电子系统（IMA）发展趋势</li>
                  <li className='schedule-item-li'>分布式航电系统综合架构（DIMA）研究进展</li>
                </ol>
              </SwiperSlide>
              <SwiperSlide className='schedule-item'>
                <div className="date">12.15 pm</div>
                <div className="title">智能航空机载论坛</div>
                <ol className='schedule-item-ol'>
                  <li className='schedule-item-li'>机载MRO</li>
                  <li className='schedule-item-li'>综合化航电系统在国产民航飞机的应用</li>
                  <li className='schedule-item-li'>现代航空电子系统技术发展浅析</li>
                  <li className='schedule-item-li'>民用航空机电产业格局分析</li>
                  <li className='schedule-item-li'>综合化航电系统在国产民航飞机的应用</li>
                  <li className='schedule-item-li'>现代航空电子系统技术发展浅析</li>
                  <li className='schedule-item-li'>民用航空机电产业格局分析</li>
                </ol>
              </SwiperSlide>
              <SwiperSlide className='schedule-item'>
                <div className="date">12.16 am</div>
                <div className="title">智能航空机载论坛</div>
                <ol className='schedule-item-ol'>
                  <li className='schedule-item-li'>综合航电技术在国产通用飞机上的应用研究</li>
                  <li className='schedule-item-li'>机载智能电源管理系统</li>
                  <li className='schedule-item-li'>航空电子适航标准</li>
                  <li className='schedule-item-li'>民用飞机座舱显示与控制系统</li>
                  <li className='schedule-item-li'>综合化航电系统在国产民航飞机的应用</li>
                  <li className='schedule-item-li'>座舱显示管理系统</li>
                  <li className='schedule-item-li'>航电系统MRO</li>
                </ol>
              </SwiperSlide>
              <SwiperSlide className='schedule-item'>
                <div className="date">12.16 pm</div>
                <div className="title"> 通用飞机驾驶舱创新论坛</div>
                <ol className='schedule-item-ol'>
                  <li className='schedule-item-li'>现代航空电子系统技术发展浅析</li>
                  <li className='schedule-item-li'>航电系统实时仿真测试技术</li>
                  <li className='schedule-item-li'>eVTOL自主飞行系统</li>
                  <li className='schedule-item-li'>智能协同eVTOL的关键飞控技术</li>
                  <li className='schedule-item-li'>航电系统实时仿真测试技术</li>
                  <li className='schedule-item-li'>eVTOL自主飞行系统</li>
                  <li className='schedule-item-li'>智能协同eVTOL的关键飞控技术</li>
                </ol>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className='glance'>
          <div className="title">会议一览</div>
          <div className="container">
            <ul className='glance-list'>
              <li>
                <div className="title">战略会议</div>
                <div className="text">为适应全球化民航低碳市场需求，零排放全电推进系统、储能与推进技术研究、智能简洁驾驶舱系统、飞行自动化技术、自主起降技术等推动航空电气化未来</div>
              </li>
              <li>
                <div className="title">技术会议</div>
                <div className="text">来自行业领先整机商及航电集成商研发企业，携手共进，深耕未来航电核心技术</div>
              </li>
            </ul>
            <ul className='module-list'>
              <li className='module-item'>智能机载系统</li>
              <li className='module-item'>机电系统</li>
              <li className='module-item'>驾驶舱系统</li>
              <li className='module-item'>惯导系统</li>
              <li className='module-item'>总线仿真与测试</li>
              <li className='module-item'>航空电气化</li>
              <li className='module-item'>电推进系统</li>
              <li className='module-item'>自主起降</li>
              <li className='module-item'>自主飞控</li>
              <li className='module-item'>机载GPU处理器</li>
            </ul>
          </div>
        </section>
        <section className='meeting-content'>
          <div className="title">会议内容/演讲嘉宾</div>
          <div className="container">
            <div className='container-l'>
              <p className='title'>“电能驱动、氢能驱动、混合动力、eVTOL等，全球能源结构正拥抱零碳时代。绿色航电、全新一代航电系统正在构建未来智能感知飞行系统。数据智能、决策辅助、智能预测、安全互联等新技术逐渐使用在航空飞行安全体系。</p>
              <ul>
                <li>10个参会原因，10 reasons to join Avionics Tech</li>
                <li>行业会议引领者Industry Conference Leadership</li>
                <li>学习领袖对未来的预研 Pre-research</li>
                <li>上下游企业洽谈Upstream and downstream enterprises cooperative</li>
                <li>获得知识见解 Valuable knowledge – Topics</li>
                <li>寻找潜在合作伙伴One business platform</li>
                <li>学习新产品和创新能力New technology new products</li>
                <li>技术工程师专场会议 All the key technologies at one venue</li>
                <li>更多机会 Unlimited opportunities</li>
                <li>技术前沿 Leading R&D</li>
                <li>支持未来航电发挥领先作用Support leading avionics technology systems</li>
              </ul>
            </div>
            <div className='container-r'>
              <p className='title'>会议同期有来自国内外航空行业协会、民机制造单位、航空电子系统集成商、高校/院所、企业等参与。</p>
              <ul>
                <li>您将会获得/遇见谁</li>
                <li>两天有效的学习时间，领略未来新的发展趋势</li>
                <li>航电行业未来之声</li>
                <li>聚焦中国民航市场的动态、政策趋势、项目交付、产业发展，领变全球航电产业创新商业模式及智能机载5G技术前沿。</li>
                <li>民航、通航、智能飞行Evtol等民航驾驶舱、航空机电全产业链大会</li>
                <li>机载软件、硬件、适航、标准、市场需求等多方位阐述</li>
              </ul>
            </div>
          </div>
        </section>
        <footer className='beian'><a href="https://beian.miit.gov.cn" target='__bank'>沪ICP备2020025359号</a></footer>
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