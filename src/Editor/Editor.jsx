import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import HighlightExtension from '../HighlightExtension';
import EmojiExtension from '../EmojiInsertion';
import FontSizeExtension from '../FontSizeExtension';
import ImageExtension from '../ImageExtension';
import UnderlineExtension from '../../UnderlineExtension';
import TextAlign from '@tiptap/extension-text-align';
import { Bold, Italic, Highlighter, Save, Type, Smile, Rocket, Heart, Image, Underline, AlignLeft, AlignRight, AlignCenter } from 'lucide-react';
import styles from './Editor.module.css';

const Editor = () => {
  const [message, setMessage] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      HighlightExtension,
      EmojiExtension,
      FontSizeExtension,
      ImageExtension,
      UnderlineExtension,
      TextAlign.configure({
        types: ['paragraph', 'heading'],
      }),
    ],
    content: localStorage.getItem('editorContent') || '<p>Start writing your notes here...</p>',
  });

  const handleSave = () => {
    if (editor) {
      const content = editor.getHTML();
      localStorage.setItem('editorContent', content);
      setMessage('Notes saved!');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const setFontSize = (size) => {
    editor.chain().focus().setFontSize(size).run();
  };

  const insertEmoji = (emoji) => {
    editor.chain().focus().insertEmoji(emoji).run();
  };

  const addImage = () => {
    const url = prompt('Enter the image URL');
    if (url && isValidUrl(url)) {
      editor.chain().focus().insertImage({ src: url, alt: 'Image' }).run();
    } else {
      alert('Invalid URL. Please enter a valid image URL.');
    }
  };
  
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className={styles.editorContainer}>
      <div className={styles.toolbar}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? styles.isActive : ''}
        >
          <Bold size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? styles.isActive : ''}
        >
          <Italic size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? styles.isActive : ''}
        >
          <Underline size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive('highlight') ? styles.isActive : ''}
        >
          <Highlighter size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? styles.isActive : ''}
        >
          <AlignLeft size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? styles.isActive : ''}
        >
          <AlignCenter size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? styles.isActive : ''}
        >
          <AlignRight size={18} />
        </button>
        <button 
        onClick={addImage} 
        className={editor.isActive('image') ? styles.isActive : ''}>
          <Image  size={18} />
        </button>
        <button onClick={() => insertEmoji('😊')}><Smile size={18} /></button>
        <button onClick={() => insertEmoji('🚀')}><Rocket size={18} /></button>
        <button onClick={() => insertEmoji('❤️')}><Heart size={18} /></button>
        <div className={styles.fontSizeWrapper}>
          <Type size={18} />
          <select
            onChange={(e) => setFontSize(e.target.value)}
            defaultValue="16px"
          >
            <option value="12px">12</option>
            <option value="14px">14</option>
            <option value="16px">16</option>
            <option value="18px">18</option>
            <option value="20px">20</option>
            <option value="24px">24</option>
            <option value="28px">28</option>
            <option value="32px">32</option>
          </select>
        </div>
        <button onClick={handleSave} className={styles.saveButton}>
          <Save size={18} />
          Save
        </button>
      </div>
      {message && <p className={styles.message}>{message}</p>}
      <div className={styles.editorContent}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;

