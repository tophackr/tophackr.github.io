'use client';

import { notfound } from '@/constants/notfound';
import { TextEditor } from './TextEditor';

export function NotFound() {
  return (
    <TextEditor
      title="not-found"
      tabs={['not-found']}
      getCurrentData={() => notfound}
    />
  );
}
