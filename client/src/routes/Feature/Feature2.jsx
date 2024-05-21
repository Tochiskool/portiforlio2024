import React from "react";
import "./style.css";
const Feature2 = () => {
  return (
    <>
      <div className='remove-gutter-xs styleCard'>
        <article>
          <blockquote>
            <hr />
            <h4>Struggling with your VSCode</h4>
            <h5>Rip it off and get a brand new one</h5>
            <ul>
              <li>rm -rf ~/.vscode*</li>
              <li>rm -rf ~/Library/Application\ Support/Code</li>
              <li>
                rm -rf ~/Library/Saved\ Application\
                State/com.microsoft.VSCode.savedState
              </li>
              <li>
                rm -rf ~/Library/Preferences/com.microsoft.VSCode.helper.plist
              </li>
              <li>rm -rf ~/Library/Preferences/com.microsoft.VSCode.plist </li>
              <li>rm -rf ~/Library/Caches/com.microsoft.VSCode</li>
              <li>rm -rf ~/Library/Caches/com.microsoft.VSCode.ShipIt</li>
              <li>sudo rm -rf /Applications/Visual\ Studio\ Code.app</li>
            </ul>
            <hr />
          </blockquote>
        </article>
      </div>
    </>
  );
};
export default Feature2;
