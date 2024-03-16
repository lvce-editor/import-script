export const loadBabelParser = async () => {
  const parser = await import('@babel/parser')
  return parser
}
