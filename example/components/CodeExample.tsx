import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import type { FC } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { borderRadius } from './theme';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import vs from 'react-syntax-highlighter/dist/esm/styles/hljs/vs';
import vs2015 from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';

SyntaxHighlighter.registerLanguage('typescript', typescript);

type CodeExampleProps = { language: string; code: string; inline?: boolean };

export const CodeExample: FC<CodeExampleProps> = ({
  language,
  code,
  inline,
}) => (
  <>
    {(Platform.OS === 'web' && (
      <SyntaxHighlighter
        language={language}
        style={inline ? vs : vs2015}
        customStyle={{ ...styles.borders, ...(inline ? styles.inline : {}) }}
      >
        {code}
      </SyntaxHighlighter>
    )) ||
      null}
  </>
);

const styles = StyleSheet.create({
  borders: {
    borderRadius,
  },
  inline: {
    backgroundColor: 'transparent',
  },
});
