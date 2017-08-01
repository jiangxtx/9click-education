import 'whatwg-fetch'
import queryString from 'query-string'
import { showInform } from '../components/AntdWrapComponent'

export const FETCH_URL = process.env.NODE_ENV==='production'? '' : '/api'

// export const FETCH_DATA_BASE_URL = process.env.NODE_ENV === 'production'?'':'/wc'; // weic

/**
 * include or same-origin:
 *      'include' is to send cookies in a cross-origin resource sharing request;
 *      'same-origin' is the opposite;
 * @type {string}
 */
const CREDENTIAL_STATE = process.env.NODE_ENV === 'production'?'same-origin' : 'include';

const FETCH_HEAD = {
    credentials: CREDENTIAL_STATE,
    headers: {
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json, text/javascript,*/*'
    }
};

const FETCH_GET = Object.assign({}, FETCH_HEAD, { method: 'get' });

/**
 * 检测fetch 请求是否正确响应
 *      fetch(url)
            .then(fetchStatusCheck).then(res => res.json() ).then.....
 * @param response
 * @returns {*}
 */
function fetchStatusCheck(response) {
    if ( (response.status >= 200 && response.status < 300) || response.ok) {
        return response;
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
    }
}

const custom_fetch = {
    get: function (url, callback) {
        fetch_function('get', url, callback, {})
    },
    post: function(url, data, callback) {
        fetch_function('post',url,callback,data)
    },
    delete: function (url, data, callback) {
        fetch_function('delete',url,callback,data)
    },
    patch: function (url, data, callback) {
        fetch_function('patch',url, callback, data)
    },
    put: function (url, data, callback) {
        fetch_function('put',url,callback,data)
    }
}

const _error_info = () => {
    showInform({
        type: 'error',
        title: '数据请求',
        msg: '抱歉，数据请求失败，请稍后再试...',
    })
}

const fetch_function = function (type, url, callback, data={}) {
    const FETCH_DATA = Object.assign({}, FETCH_HEAD, {
        method: type,
        body: queryString.stringify(data),
    });
    const _fetch = fetch(FETCH_URL + url, type === 'get' ? FETCH_GET : FETCH_DATA);

    _fetch.then(res => {
        if((res.status >= 200 && res.status < 300)|| res.ok) {
            res.json().then(result => {
                callback && callback(result)
            },function (err) {
                _error_info()
            })
        } else {
            _error_info()
        }
    })
}

/**
 * fetch 文件上传，解决 cookies 问题
 */
const file_fetch = (url, data, callback) => {
    const fileData = Object.prototype.toString.call(data);
    if (fileData !== "[object FormData]") {
        console.error('fileData should be type of "FormData"');
        return false;
    }

    const fetData = {
        method: 'POST',
        credentials: CREDENTIAL_STATE,
        body: data,
    };

    fetch(url, fetData)
        .then(res => fetchStatusCheck(res))
        .then(data => data.json() )
        .then(json => callback(json))
}

export { custom_fetch, file_fetch }