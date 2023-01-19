import React from "react";
import { MenuContainer } from "./styles";

const Menu = (props: any) => {
  return (
    <MenuContainer
      onClick={(event: any) => props.onSelectVideo(event.target.value)}
    >
      {props.videoValues.map((value: string, i: number) => (
        <div className="video-inputs">
          <input key={i} type="radio" name="src" value={value} />
          {value}
        </div>
      ))}
    </MenuContainer>
  );
};

export default Menu;
