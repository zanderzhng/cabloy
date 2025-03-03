const __snippet = `{ path: '<%=argv.pageName%>', component: loadjsx('<%=argv.pageName%>') },`;

module.exports = {
  file: 'front/src/routes.js',
  async transform({ cli, ast, argv, ctx }) {
    // code
    const code = await cli.template.renderContent({ content: __snippet });
    if (!ast.has(`export default [$_$]`)) {
      ast.replace(`export default []`, `export default [${code}]`);
    } else {
      ast.replace(`export default [$_$]`, `export default [$_$, \n ${code}]`);
    }
    // ok
    return ast;
  },
};
