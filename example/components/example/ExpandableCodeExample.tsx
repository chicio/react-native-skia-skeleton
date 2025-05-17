import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import type { FC } from 'react';
import { useState } from 'react';
import {
  type LayoutChangeEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { Icon, Text } from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { borderRadius, spacing } from '../design-system/theme';
import { CodeExample } from './CodeExample';

SyntaxHighlighter.registerLanguage('typescript', typescript);

interface CodeExampleProps {
  language: string;
  code: string;
}

export const ExpandableCodeExample: FC<CodeExampleProps> = ({
  language,
  code,
}) => {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const height = useSharedValue(0);

  const toggleAccordion = () => {
    setOpen((prev) => {
      const next = !prev;
      height.value = withTiming(next ? contentHeight : 0, { duration: 250 });
      return next;
    });
  };

  const onContentLayout = (event: LayoutChangeEvent) => {
    const h = event.nativeEvent.layout.height;
    setContentHeight(h);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text variant="titleSmall" style={styles.headerText}>
            {open ? 'Hide code example' : 'Show code example'}
          </Text>
          <Icon source={open ? 'chevron-up' : 'chevron-down'} size={24} />
        </View>
      </Pressable>

      <Animated.View style={[animatedStyle, styles.animationContainer]}>
        <CodeExample
          onContentLayout={onContentLayout}
          language={language}
          code={code}
          inline={false}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  borders: {
    borderRadius,
    marginTop: 8,
  },
  inline: {
    backgroundColor: 'transparent',
  },
  animationContainer: {
    overflow: 'hidden',
    width: '100%',
  },
  header: {
    borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginLeft: 8,
  },
  copyButton: {
    position: 'absolute',
    top: spacing.spacing3x,
    right: spacing.spacing2x,
  },
});
