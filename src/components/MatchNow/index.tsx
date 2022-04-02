import React from 'react';
import { MATCH } from '../../utils/match';
import { Container, Image, LeagueLogo, Play, Score, Title, Turn } from './styles';

export function MatchNow() {
  return (
    <Container
      accessible
      accessibilityLabel={`Neste momento, estão jogando ${MATCH.host_name} contra ${MATCH.visitor_name}. 
      O placar está ${MATCH.score}.`}
    >
      <Title>{MATCH.league}</Title>
      <Turn>{MATCH.turn}</Turn>

      <Play>
        <Image source={MATCH.host_logo} />
        <Score>{MATCH.score}</Score>
        <Image source={MATCH.visitor_logo} />
      </Play>

      <LeagueLogo source={MATCH.league_logo} />
    </Container >
  );
}