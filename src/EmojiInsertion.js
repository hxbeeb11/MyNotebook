import { Node } from '@tiptap/core';

const EmojiExtension = Node.create({
  name: 'emoji',

  inline: true,
  group: 'inline',
  atom: true,

  addAttributes() {
    return {
      emoji: {
        default: '😊',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-emoji]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', { 'data-emoji': HTMLAttributes.emoji }, HTMLAttributes.emoji];
  },

  addCommands() {
    return {
      insertEmoji:
        (emoji) =>
        ({ commands }) => {
          return commands.insertContent({ type: this.name, attrs: { emoji } });
        },
    };
  },
});

export default EmojiExtension;
