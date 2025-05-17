import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import { Button } from '@shared/ui/atoms/Button/Button';
import { Typography } from '@shared/ui/atoms/Typography/Typography';
import { Character } from '@shared/ui/molecules/Character/Character';

export interface IWelcomeScreenProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  characterMessage?: string;
  characterMood?: Parameters<typeof Character>[0]['mood'];
  characterImage?: string;
  primaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
  decorativeImageUrl?: string;
  children?: ReactNode;
}

export const WelcomeScreen = forwardRef<HTMLDivElement, IWelcomeScreenProps>(
  (
    {
      title,
      subtitle,
      characterMessage,
      characterMood = 'happy',
      characterImage,
      primaryButtonText = 'Comenzar',
      onPrimaryButtonClick,
      secondaryButtonText,
      onSecondaryButtonClick,
      decorativeImageUrl,
      children,
      className = '',
      ...restProps
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={`flex min-h-screen flex-col items-center justify-center px-4 py-6 md:px-6 ${className}`}
        {...restProps}
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <Typography variant="h1" component="h1" className="mb-4">
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="subtitle1"
              color="secondary"
              className="mb-8 max-w-lg"
            >
              {subtitle}
            </Typography>
          )}

          <div className="my-8">
            {decorativeImageUrl ? (
              <div className="h-64 w-64 md:h-80 md:w-80">
                <img
                  src={decorativeImageUrl}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <Character
                message={characterMessage}
                mood={characterMood}
                imageSrc={characterImage}
                size="xl"
                animated={true}
              />
            )}
          </div>

          {children && <div className="mb-8 w-full">{children}</div>}
          <div className="mt-4 flex w-full max-w-xs flex-col justify-center gap-4 sm:max-w-md sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
            </Button>
            {secondaryButtonText && (
              <Button
                variant="outline"
                size="lg"
                fullWidth
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  },
);

WelcomeScreen.displayName = 'WelcomeScreen';
