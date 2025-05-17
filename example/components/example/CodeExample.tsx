import '@expo/match-media';
import {
  type LayoutChangeEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import vs from 'react-syntax-highlighter/dist/esm/styles/hljs/vs';
import vs2015 from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
import * as Clipboard from 'expo-clipboard';
import { Icon } from 'react-native-paper';
import type { FC } from 'react';
import { borderRadius, spacing } from '../design-system/theme';
import { useIsSmallDevice } from '../design-system/useMediaQuerySmallDevices';

interface CodeExampleProps {
  language: string;
  code: string;
  inline?: boolean;
  onContentLayout?: (event: LayoutChangeEvent) => void;
}

export const CodeExample: FC<CodeExampleProps> = ({
  language,
  code,
  inline,
  onContentLayout,
}) => {
  const isSmallDevice = useIsSmallDevice();

  if (Platform.OS !== 'web') {
    return <Text style={styles.appCode}>{code}</Text>;
  }

  return (
    <View onLayout={onContentLayout}>
      <SyntaxHighlighter
        language={language}
        style={inline ? vs : vs2015}
        wrapLongLines={true}
        showInlineLineNumbers={true}
        customStyle={{
          ...styles.borders,
          ...(inline ? styles.inline : {}),
        }}
      >
        {code}
      </SyntaxHighlighter>
      {!inline && !isSmallDevice && (
        <Pressable
          style={({ pressed }) => [
            styles.copyButton,
            { opacity: pressed ? 0.3 : 1 },
          ]}
          onPress={async () => {
            await Clipboard.setStringAsync(code);
          }}
        >
          <Icon source={'content-copy'} size={24} color={'white'} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  borders: {
    borderRadius,
    marginTop: 8,
  },
  inline: {
    backgroundColor: 'transparent',
  },
  copyButton: {
    position: 'absolute',
    top: spacing.spacing3x,
    right: spacing.spacing2x,
  },
  appCode: {
    borderRadius,
    padding: spacing.base,
    marginVertical: spacing.base,
    backgroundColor: 'black',
    color: 'white',
  },
});
