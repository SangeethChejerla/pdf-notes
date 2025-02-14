import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EditorMenuBar from './EditorMenuBar';

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing your notes...',
      }),
    ],
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  });

  return (
    <div className="h-full flex flex-col">
      <EditorMenuBar editor={editor} />
      <div className="flex-1 overflow-auto p-6">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
