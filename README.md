# Image Component

The `Image` component utilizes the Intersection Observer API to load images only when they are in the viewport.

## Features

- **Lazy Loading**: The component loads images lazily, ensuring images are only loaded when they enter the viewport.
- **Custom Effects**: Supports `blur` and `opacity` effects during the image loading process.
- **Placeholder Image**: Option to display a placeholder image until the main image is loaded.
- **Customizable**: Accepts various props to customize the image attributes and loading behavior.

## Props

| Prop            | Type                     | Default | Description                                                                                 |
|-----------------|--------------------------|---------|---------------------------------------------------------------------------------------------|
| `src`           | `string`                 | `-`     | The source URL of the main image to be loaded.                                              |
| `placeholderSrc`| `string`                 | `-`     | The source URL of the placeholder image to be shown until the main image is loaded.         |
| `className`     | `string`                 | `-`     | CSS class names to apply to the image.                                                      |
| `id`            | `string`                 | `-`     | The ID of the image element.                                                                |
| `alt`           | `string`                 | `-`     | Alternate text for the image.                                                               |
| `width`         | `string` or `number`     | `-`     | The width of the image.                                                                     |
| `height`        | `string` or `number`     | `-`     | The height of the image.                                                                    |
| `threshold`     | `number`                 | `0.1`   | Specifies the percentage of the image that must be visible in the viewport before it loads. |
| `loading`       | `'eager'` or `'lazy'`    | `-`     | Specifies the loading behavior of the image.                                                |
| `effect`        | `'blur'` or `'opacity'`  | `-`     | The effect applied to the image during the loading process.                                 |

## Usage

To use the `Image` component, import it into React project and provide the necessary props.

### Example

```jsx
import Image from './Image';

function App() {
  return (
    <div>
      <Image 
        src="https://example.com/image.jpg"
        placeholderSrc="https://example.com/placeholder.jpg"
        alt="Sample Image"
        width={600}
        height={400}
        threshold={0.5}
        effect="blur"
      />
    </div>
  );
}

export default App;
```

In the example above, the `Image` component will display a placeholder image first and apply a blur effect as the main image loads. The image will start loading when 50% of it is visible in the viewport due to the `threshold` prop set to `0.5`.

## Notes

- The `threshold` prop defines how much of the image should be visible before it starts loading. The value ranges from `0` (0%) to `1` (100%).
- The `effect` prop determines the visual effect during the image loading process. It can be set to `'blur'` for a blur effect or `'opacity'` for a fade-in effect.
- The component uses the `IntersectionObserver` API, which may require a polyfill for support in older browsers.