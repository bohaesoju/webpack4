module.exports = function myBabelPlugin() {
  return {
    visitor: {
      VariableDeclaration(path){
        console.log('VaiableDeclaration() kind:', path.node.kind); //const

        if(path.node.kind === 'const'){
          path.node.kind = 'var'
        }
      },
    },
  }
}