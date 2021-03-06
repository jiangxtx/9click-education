/**
 * 把项目涉及到的常量都汇聚起来，方便管理
 *      —— 2016/12/22.
 */


/**
 * 项目内部相关的常量数据
 */
const COURSE_AUDIT_APPROVE = 2;  // 2 stands for Course which has been authored.
const ADMIN_PURE_COURSE = 'type=pure'; // 管理员查看课程学习详情页面的 URL query 信息，用于控制管理员-课程详情的头部展示

/**
 * 项目本身相关的配置信息
 */
const PROJ_LICENSE_KEY = '沪ICP备 15038486 号 -3'; // 网站备案/许可证号

//首页临时右侧竖向轮播
const TEMP_VERTICAL_COURSE = [
    {
        "verticalPicUrl":"../img/homepage/3dprint.jpg",
        "courseId":'fd8f20a7-5c2d-4aa2-9b8d-71541d971037'
    }, {
        "verticalPicUrl":"../img/homepage/robot.jpg",
        "courseId":"3c992ad4-1e0e-4592-b6fe-16ed1c539679"
    }
]

// antd 组件中 message 显示的全局配置
const MESSAGE_CONFIG = {
    top: '40%',
    duration: 2,
};

// 表单中常用字段及其校验规则（适配 antd 表单的检验）
const COMMON_FORM_INFO = {
    realName: {
        key: 'realName',
        rules: [
            { required: true, message: '请输入您的姓名!' },
            { pattern: /^[a-zA-Z0-9._-]{1,20}$/, message: '长度需介于1~20,只包括数字 字母 - _ .' },
        ],
        iconType: 'smile-o',
        placeholder: '请输入您的姓名'
    },
    cardId: {
        key: 'cardId',
        rules: [
            { required: true, message: '请输入您的身份证号!' },
            { pattern: /^[1-9]{1}[0-9]{16}([0-9]|[xX])$/, message: '长度（18位）或格式错误' },
        ],
        iconType: 'credit-card',
        placeholder: '请输入您的身份证号'
    },
    telphone: {
        key: 'telphone',
        rules: [
            { required: true, message: '请输入您的手机号!' },
            { pattern: /^1[34578]\d{9}$/, message: '手机号码长度/格式错误' },
        ],
        iconType: 'phone',
        placeholder: '请输入您的手机号'
    },
    subject: {
        key: 'subject',
        rules: [
            { required: true, message: '请输入您的任教学科!' },
        ],
        iconType: 'appstore-o',
        placeholder: '请输入您的任教学科'
    },
    jobTime: {
        key: 'jobTime',
        rules: [
            { required: true, message: '请输入您的任教年限!' },
        ],
        iconType: 'clock-circle-o',
        placeholder: '请输入您的任教年限'
    },
    qq: {
        key: 'qq',
        rules: [
            { required: true, message: '请输入您的QQ号!' },
        ],
        iconType: 'exclamation-circle-o',
        placeholder: '请输入您的QQ号'
    },
    wechat: {
        key: 'wechat',
        rules: [
            { required: true, message: '请输入您的微信号!' },
        ],
        iconType: 'exclamation-circle-o',
        placeholder: '请输入您的微信号'
    },
};

export {
    COURSE_AUDIT_APPROVE, ADMIN_PURE_COURSE,
    PROJ_LICENSE_KEY,
    TEMP_VERTICAL_COURSE,
    MESSAGE_CONFIG,
    COMMON_FORM_INFO,
}