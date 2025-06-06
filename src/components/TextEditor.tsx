'use client';

import { Close24 } from '@/icons/Close24';
import { formatJSON } from '@/utils/formatJSON';
import { renderJSONWithLinks } from '@/utils/renderJSONWithLinks';
import { useState } from 'react';

interface TextEditorProps {
  title: string;
  tabs: string[];
  getCurrentData: (tab: string) => unknown;
}

export function TextEditor({ title, tabs, getCurrentData }: TextEditorProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <div className="editor-container">
      <div className="editor-window">
        {/* macOS Window Controls */}
        <div className="window-header">
          <div className="traffic-lights">
            <button
              className="traffic-light red"
              onClick={() => window.close()}
            />
            <button className="traffic-light yellow" />
            <button className="traffic-light green" />
          </div>
          <div className="window-title">{title}.json - JSON Editor</div>
          <div className="window-spacer" />
        </div>

        {/* File Tabs */}
        <div className="tabs-container">
          <div className="tabs-wrapper">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
              >
                <span>{tab}.json</span>
                <Close24 className="tab-close" />
              </button>
            ))}
          </div>
        </div>

        {/* JSON Editor */}
        <div className="json-editor">
          <pre className="json-content">
            {renderJSONWithLinks(formatJSON(getCurrentData(activeTab)))}
          </pre>
        </div>

        {/* Status Bar */}
        <div className="status-bar">
          <div className="status-left">
            <span>JSON</span>
            <span>UTF-8</span>
            <span>LF</span>
          </div>
          <div className="status-right">
            <span>Ln 1, Col 1</span>
            <span>Spaces: 2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
