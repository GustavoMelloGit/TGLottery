import React from 'react';
import { Divider } from '../../ui/Divider';
import { Container } from './style';

export default function Footer(): JSX.Element {
  return (
    <Container>
      <Divider />
      <div className='inner_content'>
        <span>Trabalho engenharia de software</span>
      </div>
    </Container>
  );
}
