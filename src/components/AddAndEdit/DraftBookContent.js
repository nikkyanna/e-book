import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

/* page displays the text editor portion */

const DraftBookContent = (props) => {
  const { onChange, value } = props;

  //converting the value to EditorState format, so that in case of edit the data
  //will be dispalyed on the text editor
  const [draftContent, setDraftContent] = useState(
    EditorState.createWithContent(ContentState.createFromText(value))
  );

  // if from edit -> display the wordcounts initially
  useEffect(() => {
    wordCounter(value);
  }, []);

  //counting number of words and setting
  const wordCounter = (text) => {
    var wordCount = 0;
    for (var i = 0; i <= text.length; i++) {
      if (text.charAt(i) === " ") {
        wordCount++;
      }
    }

    document.getElementById("counter").innerText =
      wordCount < 2 ? `${wordCount} WORD` : `${wordCount} WORDS`;
  };

  // when words are entered in editor. callback sent to parent, wordcounts are also set
  const onEditorStateChange = (editorState) => {
    setDraftContent(editorState);

    let value = convertToRaw(editorState.getCurrentContent());
    const found = value.blocks.find((item) => item.text);
    if (typeof found !== "undefined") {
      onChange(found.text);
      wordCounter(found.text);
    }
  };

  return (
    <>
      <div className="draft-container">
        <Editor
          editorState={draftContent}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <div id="counter" className="counter">
        0 WORD
      </div>
    </>
  );
};

export default DraftBookContent;
