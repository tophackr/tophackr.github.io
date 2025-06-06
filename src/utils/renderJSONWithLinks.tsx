import { handleLinkCallback } from './handleLinkCallback';

export const renderJSONWithLinks = (jsonString: string) => {
  const lines = jsonString.split('\n');
  return lines.map((line, index) => {
    let processedLine = line;

    // links
    processedLine = processedLine.replace(/"([^"]+)"/g, (match, value) => {
      let linkified = value;

      if (
        value.startsWith('http') ||
        value.includes('@') ||
        value.startsWith('+')
      ) {
        linkified = `<span class="clickable-link" data-url="${value}">${value}<svg class="icon-link" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></span>`;
      }

      return `<span class="string">"${linkified}"</span>`;
    });

    // string values, keys (property names)
    processedLine = processedLine.replace(
      /<span class="string">"([^"]+)"<\/span>(\s*):/g,
      (match, key, sep) => `<span class="key">"${key}"</span>${sep}:`
    );

    // numbers
    processedLine = processedLine.replace(
      /: (\d+)/g,
      ': <span class="number">$1</span>'
    );

    // booleans
    processedLine = processedLine.replace(
      /: (true|false)/g,
      ': <span class="boolean">$1</span>'
    );

    // null
    processedLine = processedLine.replace(
      /: (null)/g,
      ': <span class="null">$1</span>'
    );

    // brackets and braces
    processedLine = processedLine.replace(
      /([{}\[\],])/g,
      '<span class="bracket">$1</span>'
    );

    return (
      <div
        key={index}
        className="leading"
      >
        <span
          dangerouslySetInnerHTML={{ __html: processedLine }}
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('clickable-link')) {
              const url = target.getAttribute('data-url');
              if (url) handleLinkCallback(url);
            }
          }}
        />
      </div>
    );
  });
};
