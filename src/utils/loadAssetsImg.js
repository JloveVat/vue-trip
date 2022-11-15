export const getAssetURL = (image) => {
  // 参数一: (相对路径, 当前路径).转为超链接
  return new URL(`../assets/img/${image}`, import.meta.url).href
}