import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

import './editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

// const Editor = () => {

//   const [html, setHtml] = useState();

//   useEffect(() => {
//       runCode("", html, iframe);
//   }, [html]);

//   const iframe = useRef();

//   const runCode = (css, html, iframe) => {
//     const document = iframe.contentDocument;
//     const documentContents = `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Document</title>
//         <style>
//           ${css}
//         </style>
//       </head>
//       <body>
//         ${html}
//       </body>
//       </html>
//     `;

//     document.open();
//     document.write(documentContents);
//     document.close();
//   };

//     const codeMirrorOptions = {
//         theme: 'material',
//         lineNumbers: true,
//         scrollbarStyle: null,
//         lineWrapping: true,
//     };

//     return (
//         <div className="editor">
//             <section className="playground">
//                 <div className="code-editor html-code">
//                     <div className="editor-header">HTML</div>
//                         <CodeMirror
//                             value={html}
//                             options={{
//                                 mode: 'htmlmixed',
//                                 ...codeMirrorOptions,
//                             }}
//                             onBeforeChange={(editor, data, html) => {
//                                 setHtml({ html });
//                             }}
//                         />
//                 </div>
//             </section>
//             <section className="result">
//                 <iframe title="result" className="iframe" ref={iframe} />
//             </section>
//         </div>
//     );
  
// }

// export default Editor;



class Editor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        html: '',
        css: false,
        js: null,
      };
    }
  
    componentDidUpdate() {
      this.runCode();
    }

    componentWillMount() {
        this.setState({ html:this.props.code.html, css:this.props.code.css });
    }

    componentDidMount() {
        this.runCode();
    }

    syncUpdates = () => {
        // const data = { ...this.state };
      };
  
    runCode = () => {
      const { html, css } = this.state;
  
      const iframe = this.refs.iframe;
      const document = iframe.contentDocument;
      const documentContents = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
        </body>
        </html>
      `;
  
      document.open();
      document.write(documentContents);
      document.close();
    };

    showCss = (show, codeMirrorOptions) => {
        if (show) {
            return (
                <div className="code-editor css-code">
                    <div className="editor-header">CSS</div>
                    <CodeMirror
                        value={this.state.css}
                        options={{
                            mode: "css",
                            ...codeMirrorOptions
                        }}
                        onBeforeChange={(editor, data, css) => {
                        this.setState({ css }, () => this.syncUpdates());
                    }}
                    />
                </div>
            )
        } else {
            return ""
        }
    };
  
    render() {
      const { html } = this.state;
      const codeMirrorOptions = {
        theme: 'material',
        lineNumbers: true,
        scrollbarStyle: null,
        lineWrapping: true,
      };
  
      return (
          <div className="editor">
              <section className="playground">
                  <div className={"code-editor html-code"}>
                      <div className="editor-header">HTML</div>
                          <CodeMirror
                              value={html}
                              options={{
                                  mode: 'htmlmixed',
                                  ...codeMirrorOptions,
                              }}
                              onBeforeChange={(editor, data, html) => {
                                  this.setState({ html });
                              }}
                          />
                  </div>
                  {this.showCss(this.state.css, codeMirrorOptions)}
              </section>
              <section className="result">
                  <iframe title="result" className="iframe" ref="iframe" />
              </section>
          </div>
      );
    }
  }
  
  export default Editor;

//   {/* <h1>test</h1>
// <img src="https://images.unsplash.com/photo-1587011937850-62f861bb391b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="sdf" /> */}