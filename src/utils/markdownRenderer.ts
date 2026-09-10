import { marked } from 'marked';
import katex from 'katex';

// Custom extension for inline and display math
const mathExtension = {
  name: 'math',
  level: 'inline',
  start(src: string) {
    const match = src.match(/\$+/);
    return match ? match.index : -1;
  },
  tokenizer(src: string) {
    // Display math: $$...$$
    const displayMatch = src.match(/^\$\$([^\$]+?)\$\$/);
    if (displayMatch) {
      return {
        type: 'math',
        raw: displayMatch[0],
        text: displayMatch[1].trim(),
        displayMode: true,
      };
    }

    // Inline math: $...$
    const inlineMatch = src.match(/^\$([^\$\n]+?)\$/);
    if (inlineMatch) {
      return {
        type: 'math',
        raw: inlineMatch[0],
        text: inlineMatch[1].trim(),
        displayMode: false,
      };
    }

    return undefined;
  },
  renderer(token: any) {
    try {
      return katex.renderToString(token.text, {
        displayMode: token.displayMode,
        throwOnError: false,
        strict: false,
      });
    } catch (error) {
      console.error('KaTeX rendering error:', error);
      return `<span class="text-red-500">Math Error: ${token.text}</span>`;
    }
  },
};

// Configure marked with custom renderer using marked.use()
marked.use({
  extensions: [mathExtension],
  renderer: {
    heading({ tokens, depth }: any) {
      const text = this.parser.parseInline(tokens);
      const classes = {
        1: 'text-2xl text-gray-100 my-5 mb-3 font-bold',
        2: 'text-amber-600 text-xl my-5 mb-2 font-bold',
        3: 'text-amber-600 text-xl my-5 mb-2 font-bold',
        4: 'text-amber-600 text-xl my-5 mb-2 font-bold',
      };
      const className = classes[depth as keyof typeof classes] || classes[4];
      return `<h${depth} class="${className}">${text}</h${depth}>\n`;
    },

    paragraph({ tokens }: any) {
      const text = this.parser.parseInline(tokens);
      return `<p class="my-2.5 text-[19px]">${text}</p>\n`;
    },

    list({ items, ordered }: any) {
      const tag = ordered ? 'ol' : 'ul';
      let body = '';
      for (const item of items) {
        let text = '';
        if (item.tokens && item.tokens.length > 0) {
          // Use parse for block-level content, parseInline for inline only
          const hasBlockContent = item.tokens.some((t: any) => t.type === 'paragraph' || t.type === 'list');
          if (hasBlockContent) {
            text = this.parser.parse(item.tokens);
          } else {
            text = this.parser.parseInline(item.tokens);
          }
        } else if (item.text) {
          text = item.text;
        }
        body += `<li class="my-1.5 text-[19px]">${text}</li>\n`;
      }
      return `<${tag} class="pl-5 my-2">\n${body}</${tag}>\n`;
    },

    table(token: any) {
      // Render header
      let header = '<tr>\n';
      for (const cell of token.header) {
        const text = this.parser.parseInline(cell.tokens);
        header += `<th class="border border-gray-800 p-1.5 px-2.5 text-left bg-gray-800 font-bold">${text}</th>\n`;
      }
      header += '</tr>\n';

      // Render body rows
      let body = '';
      for (const row of token.rows) {
        body += '<tr>\n';
        for (const cell of row) {
          const text = this.parser.parseInline(cell.tokens);
          body += `<td class="border border-gray-800 p-1.5 px-2.5 text-left">${text}</td>\n`;
        }
        body += '</tr>\n';
      }

      return `<table class="border-collapse w-full my-3 mb-4 text-base">
      <thead>
${header}      </thead>
      <tbody>
${body}      </tbody>
    </table>\n`;
    },

    blockquote({ tokens }: any) {
      const text = this.parser.parse(tokens);
      return `<div class="bg-emerald-950/50 border-l-4 border-emerald-500 p-2.5 px-3.5 rounded text-base my-3">${text}</div>\n`;
    },

    code({ text, lang }: any) {
      if (lang === 'formula') {
        return `<div class="bg-slate-800 border-l-4 border-blue-400 p-2.5 px-3.5 font-serif text-xl font-semibold rounded my-3">${text}</div>\n`;
      }
      if (lang === 'example') {
        // Parse inline math in example blocks by processing the text with marked's inline parser
        const processedText = marked.parseInline(text);
        return `<div class="bg-gray-800 border-l-4 border-amber-500 p-2.5 px-3.5 rounded text-base my-3">${processedText}</div>\n`;
      }
      return `<pre class="bg-gray-800 p-3 rounded my-3 overflow-x-auto"><code>${text}</code></pre>\n`;
    },

    codespan({ text }: any) {
      return `<code class="bg-gray-800 px-1.5 py-0.5 rounded text-sm">${text}</code>`;
    },

    strong({ tokens }: any) {
      const text = this.parser.parseInline(tokens);
      return `<strong class="font-bold">${text}</strong>`;
    },

    em({ tokens }: any) {
      const text = this.parser.parseInline(tokens);
      return `<em class="italic">${text}</em>`;
    },
  },
  gfm: true, // GitHub Flavored Markdown
  breaks: false,
});

/**
 * Safely render markdown to HTML with predefined Tailwind classes
 * This prevents XSS by using marked's built-in sanitization
 */
export function renderMarkdown(markdown: string): string {
  return marked.parse(markdown) as string;
}

/**
 * Load markdown content from a file path
 * In Vite, we use ?raw suffix to import as string
 */
export async function loadMarkdownFile(path: string): Promise<string> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${path}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown file:', error);
    return '# Error\n\nFailed to load content.';
  }
}
