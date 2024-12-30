import { Mark } from '@tiptap/core';

const UnderlineExtension = Mark.create({
  name: 'underline',

  parseHTML() {
    return [
      {
        tag: 'u',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['u', HTMLAttributes];
  },

  addCommands() {
    return {
      toggleUnderline:
        () =>
        ({ commands }) => {
          return commands.toggleMark('underline');
        },
    };
  },
});

export default UnderlineExtension;
