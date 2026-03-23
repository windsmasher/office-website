import React from 'react';

type Props = {
  text: string;
};

function isBulletLine(line: string): boolean {
  const t = line.trim();
  return t.startsWith('•') || t.startsWith('-') || t.startsWith('*');
}

function stripBullet(line: string): string {
  return line.trim().replace(/^[\s•\-*]+/, '').trim();
}

/**
 * Renders plain text from CMS: double newlines = paragraphs;
 * consecutive bullet lines become a styled list.
 */
export const NewsBody: React.FC<Props> = ({ text }) => {
  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim());

  return (
    <>
      {paragraphs.map((block, blockIndex) => {
        const lines = block.split('\n').map((l) => l.trimEnd());
        const nonEmpty = lines.filter((l) => l.trim());
        const allBullets =
          nonEmpty.length > 0 && nonEmpty.every((l) => isBulletLine(l));

        if (allBullets) {
          return (
            <ul className="styled-list" key={blockIndex}>
              {nonEmpty.map((line, i) => (
                <li key={i}>{stripBullet(line)}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={blockIndex}>
            {lines.map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 ? <br /> : null}
                {line}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
};
