import React, { useState, useEffect } from 'react';

function ReactAutoIndex({ value, placeholder, onChange, className, ...rest }) {
  const [fields, setFields] = useState({});
    
    
  const handleProjectsChange = (e) => {
    const { value } = e.target;
    const lines = value.split('\n');
    const formattedValue = lines.map((line) => {
      const match = line.match(/^\d+\.\s*(.*)/);
      return match ? match[1] : line;
    });

    setFields((prevFields) => ({
      ...prevFields,
      projects: formattedValue,
    }));
      
      onChange && onChange(formattedValue);
  };

  const handleProjectsBackspace = (e) => {
    const { value } = e.target;
    const lines = value.split('\n');

    const cursorIndex = e.target.selectionStart;
    let currentLine = 0;
    let characterCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineLength = line.length;
      characterCount += lineLength + 1;
      if (cursorIndex <= characterCount) {
        currentLine = i;
        break;
      }
    }

    const cursorColumn = cursorIndex - characterCount + lines[currentLine].length;

    if (e.key === 'Backspace') {
      let setCursor = 2;
      if (lines[currentLine].trim().length === 3 && lines[currentLine].trim().split(/\s+/).filter(word => word.length > 0).length === 1) {
        setCursor = 3;
      }
      if (cursorColumn === setCursor && lines[currentLine].trim()) {
        lines.splice(currentLine, 1);

        const newLine = currentLine === 0 ? 0 : currentLine - 1;
        if (newLine === 0 && lines.length === 0) {
          e.target.addEventListener('focus', () => {
            e.target.selectionStart = e.target.selectionEnd = 0;
          });
        } else {
          const previousLineLength = lines[newLine].length;
          const newCursorPosition = Math.min(cursorColumn, previousLineLength);
          e.target.selectionStart = e.target.selectionEnd = characterCount + lines[newLine].length - newCursorPosition;
        }
      }
    }

    e.target.value = lines.join('\n');
  };

  useEffect(() => {
  if (value && Array.isArray(value)) {
    setFields({ projects: value });
      }
  }, [value]);
    
    
  const indexedValue = (fields.projects || []).map((desc, index) => `${index + 1}. ${desc}`).join('\n');

  return (
    <textarea
      value={indexedValue}
      onChange={handleProjectsChange}
      onKeyDown={handleProjectsBackspace}
      placeholder={placeholder}
      className={`text-area-style ${className}`}
      {...rest}
    />
  );
}

export { ReactAutoIndex };
