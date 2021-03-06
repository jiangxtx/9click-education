/**
 * Created by Jiangxtx on 2017/7/13-16:44.
 * Description:
 *      主要用于【教师培训】详情的数据
 */

import cover_1 from '../img/case/case-cover-1.jpg'
import cover_2 from '../img/case/case-cover-2.jpg'
import cover_3 from '../img/case/case-cover-3.jpg'
import cover_4 from '../img/case/case-cover-4.jpg'
import cover_5 from '../img/case/case-cover-5.jpg'

// 研修共同的信息汇总
const _trainCommonInfo = {
    style: [
        {
            method: '线上研修',
            methodDescp: '在线学习，规模大、成本低',
            apply: '普及新理念新知识，解决本地教师普遍性的问题'
        }, {
            method: '混合研修',
            methodDescp: '集中面授、在线学习、跟岗研修、精雕细琢',
            apply: '解决教师发展过程中的关键性问题，提升教师的关键能力'
        }, {
            method: '线下研修',
            methodDescp: '集中面授、考察观摩、讨论交流、周期短、针对性强',
            apply: '以地区或学校针对性需求出发，解决学校教育教学与教师个体专业发展的现实问题'
        }
    ],
    safeguard: '提供高质量的教学，舒适的学习环境，现代化的教学设施，严格而又人性化的管理，确保研修目标的达成，让学员有充实而又愉悦的研修体验。',
    certificate: [
        '1. 线上研修。学员遵循在线研修的各项规定，学完规定的课程内容，完成要求的作业，评价合格，准予结业，颁发我单位电子证书。',
        '2. 线下研修。学员遵守我单位的各项研修要求，学完规定的课程，考核合格，颁发我单位证书。',
        '3. 线上与线下相结合的研修。学员遵循我单位线上线下研修的要求，学完规定的课程，考核合格，颁发我单位证书。',
    ],
    evaluate: '研修前，将对研修单位和学员的需求进行全面了解，进行评估分析，制定有针对性的课程安排。研修后，将继续跟踪服务，了解学员满意度，并作为今后改进培训质量的重要依据。',
    successcase: [
        '1. 银川市中小学教育质量综合评价项目',
        '2. 安徽省合肥市“中小学业质量绿色指标评价”研修'
    ]
};

const teacherTrainData = {
    total: 2,
    success: true,
    data: [
        {
            id: 1,
            name: '数字化时代基础教育课堂教学变革',
            courseList: [
                { name: '《如何创建一门慕课》', aim: '学会建设一门慕课，掌握慕课质量标准', target: [
                    '充分感悟数字化信息化时代教学变革的意义和价值',
                    '学会微课设计与制作的技术',
                    '学会教学管理平台的使用',
                    '掌握课堂教学变革的思路与方法',
                ] },
                { name: '《慕课1.0与翻转课堂》', aim: '掌握微课制作的原则、方法和注意事项以及各种课型的翻转课堂的上法' },
                { name: '《慕课2.0与探究学习》', aim: '掌握基础教育慕课2.0的质量标准，学会运用慕课2.0开展教学' },
                { name: '《微课制作前期准备》', aim: '学习如何规避微视频制作中常见问题，提升录制教学微视频的效率' },
                { name: '《轻松玩转Camtasia Studio》', aim: '掌握Camtasia Studio的使用，轻松制作微视频' },
                { name: '《智能手机与翻转课堂》', aim: '学会使用手机、平板电脑等智能移动终端录制微课' },
                { name: '《iPad录制教学微视频》', aim: '学会使用手机、平板电脑等智能移动终端录制微课' },
                { name: '《视频后期编辑处理软件之VEGAS PRO》', aim: '掌握VEGAS PRO 13的使用，让视频编辑得更加精致' },
                { name: '《交互式微课设计与制作》', aim: '熟练掌握Storyline2的基本操作，制作出符合要求的交互式微课' },
                { name: '《PPT2013基本操作》', aim: '熟练使用PowerPoint制作高质量的课件' },
                { name: '《思维导图训练》', aim: '集中精力于真正的主题，改善创造力和记忆力' },
            ],
            object: '中学校长、幼儿园校长、骨干教师等',
            style: _trainCommonInfo.style,
            safeguard: _trainCommonInfo.safeguard,
            certificate: _trainCommonInfo.certificate,
            evaluate: _trainCommonInfo.evaluate,
            successcase: _trainCommonInfo.successcase
        }, {
            id: 2,
            name: '基础教育考试与评价',
            courseList: [
                { name: '《教育不中考改革方案解读》', aim: '了解教育部改革方案的影响与应对策略', target: [
                    '认清做好教育质量综合评价的重要意义',
                    '认清做好教育质量综合评价的重要意义',
                    '掌握问卷编制与分析技术',
                    '掌握数据挖掘和报告撰写要领',
                ] },
                { name: '《国际学术评价项目的比较》', aim: '了解国际大型评价项目的内容、理念和技术' },
                { name: '《考试命题的方法与设计》', aim: '掌握考试命题的主要方法，了解设计的一般规则' },
                { name: '《问卷编制的方法与设计》', aim: '掌握问卷编制的主要方法，了解设计的一般规则' },
                { name: '《学业质量综合评价的思考与实践》', aim: '了解教育质量评价结果在实践中的应用与思考' },
                { name: '《学业成绩分析技术》', aim: '掌握通用的学业成绩分析技术' },
                { name: '《问卷分析技术》', aim: '掌握常用的问卷分析技术' },
                { name: '《数据挖掘与报告撰写要领》', aim: '了解报告中的数据解读及数据撰写报告的方法' }
            ],
            object: '区域教育行政管理人员，教研员，高中、初中和小学学校分管领导或骨干教师等',
            style: _trainCommonInfo.style,
            safeguard: _trainCommonInfo.safeguard,
            certificate: _trainCommonInfo.certificate,
            evaluate: _trainCommonInfo.evaluate,
            successcase: _trainCommonInfo.successcase
        }
    ]
}

const successCaseData = {
    total: 5,
    success: true,
    data: [
        {
            id: 1,
            title: '上海高中名校慕课建设教师在线研修项目',
            imgpath: cover_1,
            abstract: '根据上海市教委有关高中慕课建设工作的部署，在“四校”慕课建设的基础上，上海56所实验性示范性高中以及部分特色高中将开展本校的慕课建设。为了让学校教师了解上海市高中慕课建设的意义价值、质量标准，掌握慕课建设的方法，我单位组织上海高中名校慕课建设教师研修活动。',
            content: '<p>根据上海市教委有关高中慕课建设工作的部署，在“四校”慕课建设的基础上，上海56所实验性示范性高中以及部分特色高中将开展本校的慕课建设。为了让学校教师了解上海市高中慕课建设的意义价值、质量标准，掌握慕课建设的方法，我单位组织上海高中名校慕课建设教师研修活动。</p><p>研修采用集中面授和网络跟进研修相结合的方式。集中研修主要采用专题报告的形式，让学员明确慕课建设的意义和价值，了解上海高中名校慕课建设的方法、质量标准和注意事项。研修形式如下：</p><p>1. 线上研修与定期答疑。7月2日至9月1日，学员在线研修，学习慕课开发方法、质量标准、视频制作技术等。学员在线学习期间，上海智而仁教育培训公司组织教师定期进行在线辅导答疑，答疑时间为每周两天，每天2个小时。</p><p>2. 在线预约，线下交流与操作。对于在线答疑不能有效解决的问题，学员和我们在线预约时间，组成一个实体班级，到我单位集中答疑辅导和上机操作。</p><p>3. 动手实践，完成作业。研修期间，每位学员需设计一门慕课，并至少录制出该门慕课的一个视频，进行在线提交。我们的专家团队进行作品点评分析，学员进行修改完善，直至达到相关标准。</p>'
        }, {
            id: 2,
            title: '贵州省清镇一中“数字化时代课堂教学变革”教师线上研修',
            imgpath: cover_2,
            abstract: '贵州省清镇一中为提升教师数字化信息化时代的专业素养，增强课堂教学和信息技术融合的能力，提升课堂教学效益和学生学习质量，推动学校办学水平的不断提升，委托我单位举办了“清镇一中数字化时代课堂教学变革”教师在线研修项目。',
            content: '<p>贵州省清镇一中为提升教师数字化信息化时代的专业素养，增强课堂教学和信息技术融合的能力，提升课堂教学效益和学生学习质量，推动学校办学水平的不断提升，委托我单位举办了“清镇一中数字化时代课堂教学变革”教师在线研修项目。</p><p>此次研修主要采取在线学习与交流。清镇一中教师登录在线研修平台自主学习，学员在线学习期间，我们会组织教师定期进行在线辅导答疑，让教师学习成果不打折扣。另外研修期间，学员还会被要求完成相应的作业，我们的专家团队会对作业点评分析，督促学员进行修改完善，直至达到相关标准。</p><p>通过此次研修，清镇一中教师充分体会到数字化信息化时代教学变革的意义和价值；了解到数字化信息化对教育带来的机遇和挑战以及学校教育教学应对的思路与举措；更重要的是学会了微课设计与制作的技术，以及教学管理平台的使用，掌握了课堂教学变革的思路与方法，为将清镇一中教育信息化技术运用能力提高到新的高度。</p>',
        }, {
            id: 3,
            title: '四川省宜宾市 “微课制作与翻转课堂实施”智慧教育咨询服务项目',
            imgpath: cover_3,
            abstract: '为提升教师信息化技术应用水平，改革人才培养模式，创新教学方式，提高课堂教学的有效性，受四川省宜宾市教育科学研究所委托，2016年1月11日至2016年1月15日，我单位举办“微课制作与翻转课堂的实施”智慧教育咨询服务项目。',
            content: '<p>为提升教师信息化技术应用水平，改革人才培养模式，创新教学方式，提高课堂教学的有效性，受四川省宜宾市教育科学研究所委托，2016年1月11日至2016年1月15日，我单位举办“微课制作与翻转课堂的实施”智慧教育咨询服务项目。</p><p>四川省宜宾市高中、初中和小学学校分管领导或骨干教师，约50人参加了培训。培训课程包括《中小学慕课建设与翻转课堂》《思维导图与微课制作》《手机录制微课技术》《录屏式微课制作技术》《交互式微课制作技术》《从慕课1.0走向慕课2.0》《未来课堂及教学管理平台操作使用》《文科微课制作与翻转课堂实施》《理科微课制作与翻转课堂实施》《翻转课堂教学实践》等。</p><p>通过此次培训，参训学员充分认清了数字化时代课堂教学改革的重要意义；掌握了基本的微课制作方法；理解了翻转课堂教学的理念、思路与方法；掌握了未来课堂的设置理念和操作方法。</p>',
        }, {
            id: 4,
            title: '贵州省学校卓越发展计划项目学校“微课制作与翻转课堂的实施”培训项目',
            imgpath: cover_4,
            abstract: '为提升教师信息化技术应用水平，改革人才培养模式，创新教学方式，提高课堂教学的有效性，受贵州省学校卓越发展计划项目办委托，我单位于2015年6月14日至2015年6月20日举办“翻转课堂的实施”培训项目。',
            content: '<p>为提升教师信息化技术应用水平，改革人才培养模式，创新教学方式，提高课堂教学的有效性，受贵州省学校卓越发展计划项目办委托，我单位于2015年6月14日至2015年6月20日举办“翻转课堂的实施”培训项目。</p><p>贵州省学校卓越发展计划项目高中学校分管校长或教科（教务）主（副）主任、信息中心主任、骨干教师等参加了培训。培训总计40个小时，包括《数字化时代的教育变革》《微课与翻转课堂》《运用PPT和录屏技术制作微课》《翻转课堂实践》《微课制作技巧与技术》《未来课堂理念与操作》《教学管理平台操作使用》等课程。</p><p>通过此次培训，参训学员充分认清了数字化时代课堂教学改革的重要意义；掌握了基本的微课制作方法；理解了翻转课堂教学的理念、思路与方法；掌握了未来课堂的设置理念和操作方法。</p>',
        }, {
            id: 5,
            title: '安微省合肥市“中小学生学业质量绿色指标评价”研修',
            imgpath: cover_5,
            abstract: '根据合肥市教育局、上海市教委教研室、华东师范大学考试与评价研究院《关于开展中小学生学业质量绿色指标评价项目合作的协议》，作为该项目的一部分，受合肥市教育局委托，我单位于2014年7月12日至19日在华东师范大学举办“合肥市中小学生学业质量绿色指标评价专题研修班”。',
            content: '<p>根据合肥市教育局、上海市教委教研室、华东师范大学考试与评价研究院《关于开展中小学生学业质量绿色指标评价项目合作的协议》，作为该项目的一部分，受合肥市教育局委托，我单位于2014年7月12日至19日在华东师范大学举办“合肥市中小学生学业质量绿色指标评价专题研修班”。</p><p>此次研修采取线下专家讲座的形式进行，研修内容包括《上海市“绿色指标”综合评价改革》《现代教育评价发展的趋势》《绿色指标体系的解读》《问题解决：考试及调查信息挖掘方案设》等一系列讲座与报告。</p><p>此次研修有50人左右参加，通过研修，达成了以下目标：</p><p>1．深化了对学生评价尤其是中小学生学业质量绿色指标评价的认识，理解了中小学生学业质量绿色指标评价的内涵。</p><p>2．熟悉了中小学生学业质量绿色指标评价实施的操作理念与方法，为顺利实施中小学生学业质量绿色指标评价奠定基础。</p><p>3．有利于研修教师树立全面正确的教育观、质量观和成才观，深入推进素质教育，为学生终身可持续发展打好基础。</p>'
        },
    ]
}

export { teacherTrainData, successCaseData }
