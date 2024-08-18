## Streaming VS Partial Prerendering(ppr)

Streaming and Partial Prerendering are both techniques used in modern web development to improve the performance and user experience of web applications, particularly in the context of server-side rendering. However, they serve different purposes and work in different ways. Here’s a breakdown of the differences between the two:

### 1. **Streaming**

**Purpose**:

- Streaming is a technique that allows the server to send parts of a web page to the client as they are rendered, rather than waiting for the entire page to be generated before sending it.

**How It Works**:

- **Incremental Delivery**: When a user requests a page, the server begins rendering the page and starts sending the HTML to the client as soon as possible. This means that the user can start seeing and interacting with parts of the page while the rest of the page is still being rendered and loaded.
- **`Suspense` Integration**: With React’s `Suspense` and server-side streaming (supported in Next.js 13+), components that need to wait for data can show a fallback UI (like a loading spinner) while the data is being fetched. Once the data is ready, the final content is streamed to the client, replacing the fallback.
- **Perceived Performance**: Streaming can significantly improve perceived performance because users see content sooner, even if the full page isn't ready yet.

**Example**:

- The server streams the header, then the sidebar, then the content, and finally the footer. The user sees each part as it becomes available, rather than waiting for the whole page to load at once.

### 2. **Partial Prerendering**

**Purpose**:

- Partial Prerendering is a technique that allows certain parts of a page to be statically generated at build time, while other parts are rendered on-demand. This can improve load times by delivering pre-rendered content from the server.

**How It Works**:

- **Static and Dynamic Content**: With Partial Prerendering, some parts of the page are pre-rendered during the build process (e.g., content that doesn’t change frequently), and these pre-rendered parts are served as static files. Other parts that are more dynamic (e.g., personalized content) are rendered on-demand when the user requests the page.
- **Combination with ISR**: Partial Prerendering can be used in combination with Incremental Static Regeneration (ISR), where static pages are regenerated in the background at certain intervals or under specific conditions, keeping the content fresh without requiring a full rebuild.
- **Optimized Load Time**: By pre-rendering parts of the page, the initial load time can be reduced because the server doesn’t need to render everything on the fly. The pre-rendered content is delivered quickly, and any dynamic content is fetched and rendered afterward.

**Example**:

- A blog page might pre-render the blog post content (static) but render the comments section (dynamic) on-demand when the page is requested.

### Key Differences:

1. **Rendering Timing**:

   - **Streaming**: The page is rendered on demand, and the HTML is sent to the client incrementally as it's ready. The user sees content as it is being rendered by the server.
   - **Partial Prerendering**: Some parts of the page are pre-rendered at build time, so they are ready to be served immediately. Other parts are rendered on demand when the page is requested.

2. **Use Case**:

   - **Streaming**: Ideal for pages where it's important to show content as quickly as possible, even if it’s just part of the page, to improve perceived performance.
   - **Partial Prerendering**: Best for pages that have a mix of static and dynamic content, where static content can be pre-rendered to optimize initial load times, and dynamic content is fetched and rendered as needed.

3. **Combination**:
   - In some cases, both techniques can be combined. For example, you might partially pre-render certain parts of a page and then use streaming to deliver the rest of the content incrementally as it becomes available.

### Summary:

- **Streaming**: Sends parts of the page to the client incrementally as they are ready, improving perceived load times by showing content as soon as possible.
- **Partial Prerendering**: Pre-renders static parts of a page at build time, reducing the server's workload at request time and improving initial load times for static content.

Both techniques aim to improve the user experience by optimizing how and when content is delivered, but they do so in different ways. Streaming focuses on delivering content as it's generated, while Partial Prerendering focuses on pre-generating content that doesn't change often to speed up delivery.

### Reference

- [Partial prerendering: Building towards a new default rendering model for web applications](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model)
- [Next.js Doc: Partial Prerendering](https://nextjs.org/learn/dashboard-app/partial-prerendering)
