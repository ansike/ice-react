/*
 * @Description: This is a description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2019-09-30 10:56:52
 * @LastEditTime: 2019-10-06 23:21:01
 */
/**
 * 设置当前语言
 * @param {String} lang
 */
function setLocale(lang) {
  if (lang !== undefined && !/^([a-z]{2})-([A-Z]{2})$/.test(lang)) {
    throw new Error('setLocale lang format error');
  }

  if (getLocale() !== lang) {
    window.localStorage.setItem('lang', lang);
    window.location.reload();
  }
}

/**
 * 获取当前语言
 */
function getLocale() {
  if (!window.localStorage.getItem('lang')) {
    // window.localStorage.setItem('lang', navigator.language);
    // 先写死使用中文,随后有精力再考虑多语言问题
    window.localStorage.setItem('lang', "zh-CN");
  }
  return localStorage.getItem('lang');
}

export { setLocale, getLocale };
