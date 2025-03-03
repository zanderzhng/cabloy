const __snippet_declare = `const <%=argv.appKey%> = require('./app/<%=argv.appKey%>.js');\n`;
const __snippet_body = `<%=argv.appKey%>(app),`;

module.exports = {
  file: 'backend/src/config/static/apps.js',
  init: `module.exports = app => {
  const apps = [
  ];
  return apps;
};
  `,
  async transform({ cli, ast, argv, ctx }) {
    // code
    let code = await cli.template.renderContent({ content: __snippet_declare });
    ast.before(code);
    code = await cli.template.renderContent({ content: __snippet_body });
    if (!ast.has(`const apps = [$_$]`)) {
      ast.replace(`const apps = []`, `const apps = [${code}]`);
    } else {
      ast.replace(`const apps = [$_$]`, `const apps = [$_$, \n ${code}]`);
    }
    // ok
    return ast;
  },
};
