// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    data: [
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
  })
}
