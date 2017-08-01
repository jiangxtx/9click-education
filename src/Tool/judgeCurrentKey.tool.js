/**
 * Created by Jiangxtx on 2017/7/18-15:02.
 * Description:
 */

/**
 *
 * @return {string}
 */
export function judgeCurrentKey() {
    const { hash } = window.location;
    const routeMatchArr = hash.match(/#(\S*)\?/);
    const routeStr = routeMatchArr && routeMatchArr[1] || '';
    const routeArr = routeStr.split('/').filter(item => !!item);
    const currentItem = navbarList.find(item => item.link === routeArr[0]) || {};
    const currentKey = currentItem.key || '0';

    return currentKey;
}