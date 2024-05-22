import classNames from 'classnames';
import React from 'react';

interface AvatarProps {
  size?: 'small' | 'medium' | 'large' | 'xl' | 'largest';
  src?: string;
  initials?: string;
  alt?: string;
  bg?: string;
}

const Avatar: React.FC<AvatarProps> = ({ size = 'medium', src, initials, alt, bg="bg-primary text-white" }) => {
  const sizes = {
    small: 'h-[32px] w-[32px]',
    medium: 'h-[48px] w-[48px]',
    large: 'h-[64px] w-[64px]',
    xl: 'h-[112px] w-[112px]',
    largest: 'h-[130px] w-[130px]',
  };

  const initialsFontSize = {
    small: 'text-[13px] leading-[13px]',
    medium: 'text-[18px] leading-[18px]',
    large: 'text-[24px] leading-[24px]',
    xl: 'text-[40px] leading-[40px]',
    largest: 'text-[50px] leading-[50px]',
  }

  const avatarClasses = classNames(
    'rounded-full',
    'flex items-center justify-center overflow-hidden',
    `${!src && initials ? bg : ""}`,
    sizes[size],
  );

  return (
    <div className={avatarClasses}>
      {src ? (
        <img src={src} alt={alt || 'Avatar'} className="object-cover w-full h-full rounded-full text text" />
      ) : (
        initials && (
          <span className={"font-semibold " + initialsFontSize[size]}>
            {initials}
          </span>
        )
      )}
    </div>
  );
};

export default Avatar;
