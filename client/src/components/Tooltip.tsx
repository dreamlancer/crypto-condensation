import React, { useState } from "react";
import styled from "styled-components";

const StyledTooltip = styled.div`
  position: relative;
  margin-left: 1rem;
`;

const ExitEvent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const HelpIcon = styled.button`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  font-weight: 500;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border: solid 1px var(--primary);
  color: var(--primary);
`;

const Indicator = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: var(--white);
  position: absolute;
  top: 200%;
  left: 30%;
  transform: rotate(45deg) translateX(-50%);
  border-radius: 0.2rem;
`;

const Popup = styled.div`
  position: absolute;
  top: 200%;
  left: 0;
  transform: translateX(-50%);
  height: 100px;
  width: 400px;
  padding: 1.7rem;
  border-radius: 1rem;
  background-color: var(--white);
  color: var(--main);
  font-size: 1.5rem;
`;

type Props = {
  content: string;
};

const Tooltip = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledTooltip>
      {open && <ExitEvent onClick={() => setOpen(false)} />}
      <HelpIcon onClick={() => setOpen(true)}>?</HelpIcon>
      {open && (
        <>
          <Indicator />
          <Popup>{props.content}</Popup>
        </>
      )}
    </StyledTooltip>
  );
};

export default Tooltip;