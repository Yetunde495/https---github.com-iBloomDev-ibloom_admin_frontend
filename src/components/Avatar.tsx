import React from "react";


interface AvatarProps {
    src?: string;
    size?: number;
    rounded?: string;
  }
const Avatar = ({ src, size, rounded }: AvatarProps) => {
    const avatarSize = size ? size : 3;
    const avatarShape = rounded ? rounded : 'rounded-md';

    return (
        <div className="" >
          <img src={src} alt="User" style={{width: `${avatarSize}rem`, height:`${avatarSize}rem`}} className={`${avatarShape} object-cover`}/>
        </div>
    )
}

export default Avatar;