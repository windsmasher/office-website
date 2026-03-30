import React from 'react';

export type CmsContentErrorCode = 'missing_env' | 'fetch';

type Props = {
  /** When null, nothing is rendered. */
  error: string | null;
  /**
   * Polish genitive phrase after „załadować”
   * (e.g. „aktualności”, „cennika”, „danych firmy”).
   */
  fetchResource?: string;
};

/**
 * Shared copy for Sanity load failures (missing env vars or fetch error).
 */
export const CmsErrorMessage: React.FC<Props> = ({
  error,
  fetchResource = 'treści',
}) => {
  if (error === 'missing_env') {
    return (
      <p>
        Brak konfiguracji CMS: ustaw <code>VITE_SANITY_PROJECT_ID</code> i{' '}
        <code>VITE_SANITY_DATASET</code> (np. skopiuj{' '}
        <code>.env.example</code> do <code>.env</code>).
      </p>
    );
  }
  if (error === 'fetch') {
    return (
      <p>
        Nie udało się załadować {fetchResource}. Spróbuj odświeżyć stronę.
      </p>
    );
  }
  return null;
};
