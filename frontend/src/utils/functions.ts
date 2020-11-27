export const extractCorrectImageFromQuery = (queryData: any, name: string) => {
  let ret : any;
  // console.log('name', name.toUpperCase())
  queryData.forEach(data => {
    // if (data.node.childImageSharp) console.log('data.node.childImageSharp', data.node.childImageSharp.fluid.src)
    if (data.node.childImageSharp?.fluid.src.toUpperCase().includes(name.toUpperCase())) {
      ret = data.node.childImageSharp;
      return;
    }
  })
  // console.log('ret', ret)
  return ret
}