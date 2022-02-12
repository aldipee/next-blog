import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
function CodePre({ code }) {
  if (code) {
    return (
      <div className="my-4">
        <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            return (
              <pre className="px-4 py-3 rounded " style={{ ...style }}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            );
          }}
        </Highlight>
      </div>
    );
  }
  return <div>No code</div>;
}
export default CodePre;
