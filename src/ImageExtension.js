import { Node } from '@tiptap/core';

const ImageExtension = Node.create({
  name: 'image',

  group: 'block',

  inline: false,

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
        getAttrs: (dom) => ({
          src: dom.getAttribute('src'),
          alt: dom.getAttribute('alt'),
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['img', { ...HTMLAttributes, width: '500', height: 'auto' }];  // This renders the image tag with attributes
  },

  addCommands() {
    return {
      insertImage:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});

export default ImageExtension;
