# react-native-skia-skeleton

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/chicio/react-native-skia-skeleton/ci.yml)
![GitHub package.json version](https://img.shields.io/github/package-json/v/chicio/react-native-skia-skeleton)

react-native-skia-skeleton is a high-performance, fully customizable, and smoothly animated skeleton loader built with
[React Native Skia](https://shopify.github.io/react-native-skia/) and [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/). It enables you to display elegant and visually appealing
placeholders, enhancing the user experience while your mobile or web app content loads.

Designed to help you build visually engaging apps, it supports shimmer effects, RTL layout, customizable shapes and
seamless animation transitions.

Main features of the library include:
* High performances thanks to React Native Skia and React Native Reanimated
* Full support for Android, iOS, and Web
* RTL compatible and easily themeable
* Zero dependencies outside of Skia and Reanimated

## Installation

You can install the library using npm or yarn.
Make sure you have the required dependencies installed in your project (React Native Reanimated and React Native Skia).

```sh
npm install react-native-skia-skeleton
```

```sh
yarn add react-native-skia-skeleton
```

## Usage

You can check the doc available at [https://react-native-skia-skeleton.expo.app/](https://react-native-skia-skeleton.expo.app/),
where you can find examples and a full description of how the component works.
Here below is a simple example of how to use the component:

```typescript
import { Skeleton } from 'react-native-skia-skeleton';

export default function App() {
  return (
      <Skeleton
        loading={true}
        bones={[{ style: { width: 300, height: 100 } }]}
      />
  );
}
```

These are the properties exposed on the `Skeleton` component:

| Prop           | Type             | Optional | Description                                                                                                                                    |
|----------------|------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| loading        | boolean          | No       | Whether the skeleton should be visible                                                                                                        |
| bones          | BonesLayout[]    | Yes      | List of bones to render as placeholders. If this property is not passed, the Skeleton will try to render bones based on the layout of the children. Be aware that this will work only if all the children have an explicit width and height defined in the style property. |
| containerStyle | ViewStyle        | Yes      | Style applied to the container View. This style is applied to both the container of the bones and the container of the real components (your components). |
| colors         | BoneColors       | Yes      | Custom shimmer colors. It is an object with two properties: background and shimmer.                                                            |
| animation      | BoneAnimation    | Yes      | Animation type for the shimmer effect. It is an object with three properties: duration, direction and reverse.                                 |
| children       | React.ReactNode  | Yes      | Content to render once loading is false                                                                                                        |

Below, you can find a video example of the component in action.

![Video documentation](https://github.com/chicio/react-native-skia-skeleton/blob/main/assets/video-documentation.gif?raw=true)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.
