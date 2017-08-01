/**
 * Created by Jiangxtx on 2017/7/11-10:27.
 * Description:
 */

const trainList = [
    { title: '教育培训', link: '/train' },
    { title: '师训在线', link: '/train/online' },
]

const studEducList = [
    { title: '创客教育', link: '/educ' },
    { title: '研究性学习平台', link: '/educ/study' },
]

const aboutUsList = [
    { key: '0', title: '公司简介', link: '/about' },
    { key: '1', title: '团队展示', link: '/about/team' },
    { key: '2', title: '合作伙伴', link: '/about/partner' },
    { key: '3', title: '招贤纳士', link: '/about/recruit' },
    { key: '4', title: '联系我们', link: '/about/contact' },
]

const navbarList = [
    { title: '首页', link: '/', key: '0' },
    {
        title: '教师培训',
        link: 'train' ,
        key: '1',
        subnav: [].concat(trainList),
    }, {
        title: '学生研学',
        link: 'educ' ,
        key: '2',
        subnav: [].concat(studEducList),
    },
    { title: '成功案例', link: 'case', key: '3' },
    {
        title: '关于我们',
        link: 'about',
        key: '4',
        subnav: [].concat(aboutUsList),
    },
];

// 首页轮播参数配置
const slider_setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
}

export { navbarList, trainList, aboutUsList, studEducList, slider_setting }